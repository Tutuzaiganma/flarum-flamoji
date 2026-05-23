/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

import { saveAs } from 'file-saver';
import Alert from 'flarum/common/components/Alert';
import Button from 'flarum/common/components/Button';
import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import CustomEmojiList from './CustomEmojiList';
import EditEmojiModal from './EditEmojiModal';
import EditEmojiTypeModal from './EditEmojiTypeModal';
import MoveEmojiSelectionModal from './MoveEmojiSelectionModal';
import Sortable from 'sortablejs';
import Switch from 'flarum/common/components/Switch';
import urlChecker from '../../common/utils/urlChecker';

export default class CustomEmojiSection extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.categoryListElement = null;
    this.categoryScrollElement = null;
    this.categorySortable = null;
    app.customEmojiListState.loadInitialData();
  }

  onremove() {
    this.destroyCategorySortable();
  }

  selectedTypeIdForImportExport() {
    return app.customEmojiListState.selectedTypeId;
  }

  selectedCategoryFilter() {
    const selectedTypeId = app.customEmojiListState.selectedTypeId;

    return {
      all: 1,
      type_id: selectedTypeId,
    };
  }

  exportEmojiList() {
    const targetTypeId = this.selectedTypeIdForImportExport();
    const selectedCategory = this.selectedCategory();

    if (!targetTypeId || !selectedCategory) {
      return;
    }

    const exportName = selectedCategory?.path || selectedCategory?.title || 'category';
    const safeExportName = String(exportName)
      .trim()
      .replace(/[^a-z0-9-_]+/gi, '_')
      .replace(/^_+|_+$/g, '');

    app.store.find('pianotell/emojis', { filter: this.selectedCategoryFilter() }).then((results) => {
      const customEmojiList = results.map((emoji) => ({
        type_id: targetTypeId,
        sort: emoji.sort?.() ?? null,
        title: emoji.title(),
        text_to_replace: emoji.textToReplace(),
        path: emoji.path(),
      }));

      const blob = new Blob([JSON.stringify(customEmojiList)], { type: 'application/json;charset=utf-8' });
      saveAs(blob, `flamoji-${safeExportName || 'category'}.json`);
    });
  }

  importEmojiList() {
    if (!this.selectedTypeIdForImportExport()) {
      return;
    }

    if (!confirm(app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.import_emojis_message'))) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json';

    input.onchange = (e) => {
      app.customEmojiListState.loading = true;

      const file = e.target.files?.[0];
      if (!file) {
        app.customEmojiListState.loading = false;
        m.redraw();
        return;
      }

      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');

      reader.onload = (readerEvent) => {
        let parsedRows = [];
        const targetTypeId = this.selectedTypeIdForImportExport();

        try {
          const payload = JSON.parse(readerEvent.target.result);
          const rows = Array.isArray(payload) ? payload : Object.values(payload || {});
          parsedRows = rows.map((row) => ({
            ...(row || {}),
            type_id: targetTypeId,
          }));
        } catch (error) {
          app.customEmojiListState.loading = false;
          this.showErrorAlert(error);
          return;
        }

        app
          .request({
            method: 'POST',
            url: `${app.forum.attribute('apiUrl')}/pianotell/import-emojis`,
            body: { data: parsedRows },
          })
          .then(() => {
            EditEmojiModal.prototype.clearCache().then(() => window.location.reload());
          })
          .catch((error) => {
            app.customEmojiListState.loading = false;
            this.showErrorAlert(error);
          });
      };
    };

    input.click();
  }

  categoryItems() {
    return app.customEmojiListState.categories;
  }

  selectedCategory() {
    const selectedTypeId = app.customEmojiListState.selectedTypeId;
    return this.categoryItems().find((category) => category.id === selectedTypeId) || null;
  }

  categoryIconSrc(category) {
    const path = category?.path || '';

    if (!path) {
      return null;
    }

    return urlChecker(path) ? path : app.forum.attribute('baseUrl') + path;
  }

  showErrorAlert(error) {
    const fallback = app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.request_failed');
    const detail = error?.response?.errors?.[0]?.detail || fallback;
    app.alerts.show(Alert, { type: 'error' }, detail);
  }

  showSuccessMessage() {
    return app.alerts.show(
      Alert,
      { type: 'success' },
      app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.saved_message')
    );
  }

  showCacheClearWarning(err) {
    // eslint-disable-next-line no-console
    console.warn('Flamoji: failed to clear formatter cache after emoji delete', err);
    app.alerts.show(Alert, { type: 'warning' }, app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.cache_clear_warning'));
  }

  createCategory() {
    app.modal.show(EditEmojiTypeModal);
  }

  editCategory() {
    const selected = this.selectedCategory();
    if (!selected) {
      return;
    }

    app.modal.show(EditEmojiTypeModal, { category: selected });
  }

  deleteCategory() {
    const selected = this.selectedCategory();
    if (!selected) {
      return;
    }

    if (
      !confirm(
        app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.delete_confirmation', {
          title: selected.title,
        })
      )
    ) {
      return;
    }

    app.customEmojiListState
      .deleteCategory(selected.id)
      .then(() => app.customEmojiListState.clearFormatterCache().catch((err) => this.showCacheClearWarning(err)))
      .then(() => this.showSuccessMessage())
      .catch((error) => this.showErrorAlert(error));
  }

  toggleCategoryVisibility(category, isVisible) {
    if (!category) {
      return;
    }

    app.customEmojiListState.updateCategoryVisibility(category.id, isVisible).catch((error) => this.showErrorAlert(error));
  }

  deleteSelectedEmojis() {
    const state = app.customEmojiListState;
    const count = state.selectedCount();

    if (!count) {
      return;
    }

    if (
      !confirm(
        app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.delete_confirmation', {
          count,
        })
      )
    ) {
      return;
    }

    state
      .bulkDeleteSelected()
      .then(() => state.clearFormatterCache().catch((err) => this.showCacheClearWarning(err)))
      .then(() => this.showSuccessMessage())
      .catch((error) => this.showErrorAlert(error));
  }

  moveSelectedEmojis() {
    if (!app.customEmojiListState.selectedCount()) {
      return;
    }

    app.modal.show(MoveEmojiSelectionModal);
  }

  onCategoryListCreateOrUpdate(vnode) {
    this.categoryListElement = vnode.dom;
    this.categoryScrollElement = vnode.dom.closest('.CustomEmojiWorkspace-categoryDirectory') || vnode.dom;
    this.ensureCategorySortable();
    this.updateCategorySortableState();
  }

  ensureCategorySortable() {
    if (!this.categoryListElement || this.categorySortable) {
      return;
    }

    this.categorySortable = Sortable.create(this.categoryListElement, {
      animation: 150,
      handle: '.CustomEmojiWorkspace-categoryDragHandle',
      draggable: 'li[data-category-id]',
      delay: 0,
      touchStartThreshold: 4,
      fallbackTolerance: 4,
      scroll: true,
      bubbleScroll: true,
      forceAutoScrollFallback: true,
      scrollSensitivity: 80,
      scrollSpeed: 12,
      chosenClass: 'is-dragging',
      ghostClass: 'is-dragging-ghost',
      onEnd: () => this.onCategorySortEnd(),
    });
  }

  updateCategorySortableState() {
    if (!this.categorySortable) {
      return;
    }

    this.categorySortable.option('disabled', app.customEmojiListState.categoriesLoading);
    this.categorySortable.option('scroll', this.categoryScrollElement || true);
  }

  destroyCategorySortable() {
    if (!this.categorySortable) {
      return;
    }

    this.categorySortable.destroy();
    this.categorySortable = null;
    this.categoryScrollElement = null;
  }

  onCategorySortEnd() {
    if (!this.categoryListElement) {
      return;
    }

    const orderedIds = Array.from(this.categoryListElement.querySelectorAll('li[data-category-id]'))
      .map((item) => String(item.dataset.categoryId || ''))
      .filter(Boolean);

    app.customEmojiListState.persistCategorySortByIds(orderedIds).catch((error) => this.showErrorAlert(error));
  }

  view() {
    const state = app.customEmojiListState;
    const selectedCategory = this.selectedCategory();
    const categoryLocked = !selectedCategory || state.categoriesLoading;

    return (
      <div className="ExtensionPage-customFlamoji">
        <div className="ExtensionPage-customFlamoji-header">
          <div className="container">
            <div className="ExtensionTitle">
              <div className="ExtensionName">
                <h2>{app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.heading_title')}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="CustomEmojiWorkspace">
            <div className="CustomEmojiWorkspace-categories">
              <div className="CustomEmojiWorkspace-title">
                <h3>{app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.heading')}</h3>
              </div>
              <div className="CustomEmojiWorkspace-categoryActions">
                <Button className="Button Button--small" icon="fas fa-plus" onclick={() => this.createCategory()}>
                  {app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.add_button')}
                </Button>
                <Button className="Button Button--small" icon="fas fa-pencil-alt" disabled={categoryLocked} onclick={() => this.editCategory()}>
                  {app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.edit_button')}
                </Button>
                <Button className="Button Button--small" icon="fas fa-trash" disabled={categoryLocked} onclick={() => this.deleteCategory()}>
                  {app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.delete_button')}
                </Button>
              </div>
              <div className="CustomEmojiWorkspace-categoryIO">
                <Button className="Button Button--small" icon="fas fa-file-import" disabled={!selectedCategory} onclick={() => this.importEmojiList()}>
                  {app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.import_json_button')}
                </Button>
                <Button className="Button Button--small" icon="fas fa-file-export" disabled={!selectedCategory} onclick={() => this.exportEmojiList()}>
                  {app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.export_json_button')}
                </Button>
              </div>
              <div className="CustomEmojiWorkspace-categoryDirectory">
                <ul className="CustomEmojiWorkspace-categoryList" oncreate={(vnode) => this.onCategoryListCreateOrUpdate(vnode)} onupdate={(vnode) => this.onCategoryListCreateOrUpdate(vnode)}>
                  {this.categoryItems().map((category) => (
                    <li key={category.id} data-category-id={category.id} className="CustomEmojiWorkspace-categoryListItem">
                      <button
                        type="button"
                        className={'CustomEmojiWorkspace-categoryItem' + (state.selectedTypeId === category.id ? ' is-active' : '')}
                        onclick={() => state.setSelectedType(category.id)}
                      >
                        <span
                          className="CustomEmojiWorkspace-categoryDragHandle"
                          title={app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.drag_handle_hint')}
                          aria-label={app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.drag_handle_hint')}
                        >
                          <i className="fas fa-bars" aria-hidden="true" />
                        </span>
                        {this.categoryIconSrc(category) ? (
                          <img className="CustomEmojiWorkspace-categoryIcon" src={this.categoryIconSrc(category)} alt="" aria-hidden="true" />
                        ) : (
                          ''
                        )}
                        <span className="CustomEmojiWorkspace-categoryName" title={category.title}>
                          {category.title}
                        </span>
                      </button>
                      <Switch
                        className="CustomEmojiWorkspace-categoryVisibilitySwitch"
                        state={!category.isHidden}
                        disabled={state.categoriesLoading}
                        onchange={(isVisible) => this.toggleCategoryVisibility(category, isVisible)}
                      >
                        <span className="visually-hidden">
                          {app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.visibility_toggle_label', {
                            title: category.title,
                          })}
                        </span>
                      </Switch>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="CustomEmojiWorkspace-list">
              <div className="CustomEmojiWorkspace-listHeader">
                <div className="CustomEmojiWorkspace-title">
                  <h3 title={selectedCategory?.title || ''}>{selectedCategory?.title || ''}</h3>
                </div>
                <div className="CustomEmojiWorkspace-listActions">
                  <div className="CustomEmojiWorkspace-listBulkActions">
                    <Button
                      className="Button Button--small"
                      icon={state.allSelected() ? 'fas fa-times' : 'fas fa-check-square'}
                      disabled={!state.hasEmojis() || state.isLoading()}
                      onclick={() => state.toggleAllSelection()}
                    >
                      {app.translator.trans(
                        state.allSelected()
                          ? 'pianotell-flamoji.admin.custom_emojis_section.emoji_list.clear_selection_button'
                          : 'pianotell-flamoji.admin.custom_emojis_section.emoji_list.select_all_button'
                      )}
                    </Button>
                    <Button
                      className="Button Button--small"
                      icon="fas fa-exchange-alt"
                      disabled={!state.selectedCount() || state.isLoading()}
                      onclick={() => this.moveSelectedEmojis()}
                    >
                      {app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.move_button')}
                    </Button>
                    <Button
                      className="Button Button--small Button--danger"
                      icon="fas fa-trash"
                      disabled={!state.selectedCount() || state.isLoading()}
                      onclick={() => this.deleteSelectedEmojis()}
                    >
                      {app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.delete_button')}
                    </Button>
                  </div>
                  <Button
                    className="Button Button--primary Button--small"
                    icon="fas fa-plus"
                    disabled={state.isLoading() || !selectedCategory}
                    onclick={() => app.modal.show(EditEmojiModal)}
                  >
                    {app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.modal_title')}
                  </Button>
                </div>
              </div>
              <CustomEmojiList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
