/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

import app from 'flarum/common/app';
import Alert from 'flarum/common/components/Alert';
import Button from 'flarum/common/components/Button';
import Modal from 'flarum/common/components/Modal';
import Select from 'flarum/common/components/Select';
import Stream from 'flarum/common/utils/Stream';

export default class MoveEmojiSelectionModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.typeId = Stream(this.initialTypeId());
  }

  className() {
    return 'MoveEmojiSelectionModal Modal--small';
  }

  title() {
    return app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.move_modal_title');
  }

  content() {
    const categoryOptions = this.categoryOptions();

    return (
      <div className="Modal-body">
        <div className="Form">
          <div className="Form-group">
            <label>{app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.category_label')}</label>
            <Select
              value={this.typeId()}
              options={categoryOptions}
              title={categoryOptions[this.typeId()] || ''}
              wrapperAttrs={{ className: 'Flamoji-categorySelect' }}
              onchange={this.typeId}
            />
          </div>
          <div className="Form-group">
            {Button.component(
              {
                type: 'submit',
                className: 'Button Button--primary',
                loading: this.loading,
                disabled: app.customEmojiListState.selectedCount() === 0,
              },
              app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.move_submit_button')
            )}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();
    this.loading = true;

    app.customEmojiListState
      .bulkMoveSelected(this.typeId())
      .then(() => app.customEmojiListState.clearFormatterCache().catch((err) => this.showCacheClearWarning(err)))
      .then(() => {
        this.hide();
        this.showSuccessMessage();
      })
      .catch(this.onerror.bind(this))
      .then(() => {
        this.loading = false;
        m.redraw();
      });
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
    console.warn('Flamoji: failed to clear formatter cache after bulk emoji move', err);
    app.alerts.show(Alert, { type: 'warning' }, app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.cache_clear_warning'));
  }

  initialTypeId() {
    const selectedTypeId = app.customEmojiListState.selectedTypeId;
    const firstDifferentCategory = this.categoryItems().find((category) => category.id !== selectedTypeId);

    return firstDifferentCategory?.id || this.categoryItems()[0]?.id || '';
  }

  categoryOptions() {
    return this.categoryItems().reduce((options, category) => {
      options[category.id] = category.title;

      return options;
    }, {});
  }

  categoryItems() {
    return app.customEmojiListState.categories;
  }
}
