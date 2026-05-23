/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

import app from 'flarum/common/app';
import Alert from 'flarum/common/components/Alert';
import Button from 'flarum/common/components/Button';
import Component from 'flarum/common/Component';
import EditEmojiModal from './EditEmojiModal';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Sortable, { MultiDrag } from 'sortablejs';
import urlChecker from '../../common/utils/urlChecker';

let multiDragMounted = false;

export default class CustomEmojiList extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.listElement = null;
    this.emojiListElement = null;
    this.emojiSortable = null;
    this.sortContext = null;
    this.drag = null;
    this.selectionBox = null;

    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  onremove() {
    this.clearPointerListeners();
    this.destroyEmojiSortable();
  }

  view() {
    const state = app.customEmojiListState;

    return (
      <div
        className={'customEmoji-list' + (this.drag?.active ? ' is-boxSelecting' : '')}
        oncreate={(vnode) => this.onListContainerCreateOrUpdate(vnode)}
        onupdate={(vnode) => this.onListContainerCreateOrUpdate(vnode)}
        onpointerdown={(event) => this.onPointerDown(event)}
        onscroll={this.onScroll}
      >
        {/* Loading */}
        {state.isLoading() && state.emojis.length === 0 ? <LoadingIndicator display="unset" size="large" /> : ''}

        {/* Emoji list */}
        <ul oncreate={(vnode) => this.onEmojiGridCreateOrUpdate(vnode)} onupdate={(vnode) => this.onEmojiGridCreateOrUpdate(vnode)}>
          {state.emojis.map((emoji) => {
            const url = urlChecker(emoji.path()) ? emoji.path() : app.forum.attribute('baseUrl') + emoji.path();
            const emojiId = state.emojiId(emoji);
            const selected = state.isEmojiSelected(emoji);
            const editLabel = app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.edit_button');

            return (
              <li key={emojiId} data-emoji-id={emojiId} className={selected ? 'is-selected' : ''}>
                <div
                  className={'customEmoji' + (selected ? ' is-selected' : '')}
                  data-emoji-id={emojiId}
                  role="button"
                  aria-pressed={selected ? 'true' : 'false'}
                  tabindex="0"
                  onkeydown={(event) => this.onEmojiKeydown(event, emoji)}
                >
                  <button
                    type="button"
                    className="Button Button--icon customEmoji-dragHandle"
                    title={app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.drag_handle_hint')}
                    aria-label={app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.drag_handle_hint')}
                  >
                    <i className="fas fa-bars" aria-hidden="true" />
                  </button>
                  <Button
                    className="Button Button--icon customEmoji-editButton"
                    icon="fas fa-pencil-alt"
                    title={editLabel}
                    aria-label={editLabel}
                    onclick={() => app.modal.show(EditEmojiModal, { model: emoji })}
                  />
                  <div className="customEmoji-imageWrapper">
                    <img src={url} className="customEmoji-image" alt={emoji.title()} title={emoji.textToReplace()} />
                  </div>
                  <div className="customEmoji-title">
                    <h4>{emoji.title()}</h4>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        {this.selectionBox ? <div className="customEmoji-selectionBox" style={this.selectionBoxStyle()} aria-hidden="true" /> : ''}
        {state.empty() ? (
          <div className="customEmoji-empty">{app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.empty_text')}</div>
        ) : (
          ''
        )}
      </div>
    );
  }

  onEmojiKeydown(event, emoji) {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    app.customEmojiListState.toggleEmojiSelection(emoji);
    this.syncSortableSelection();
  }

  draggingEmojiIdsById(emojiId) {
    const state = app.customEmojiListState;
    if (!emojiId || !state.currentEmojiIds().includes(emojiId)) {
      return [];
    }

    if (state.selectedCount() > 1 && state.selectedEmojiIds.has(emojiId)) {
      const selected = new Set(state.selectedEmojiIds);
      return state.currentEmojiIds().filter((id) => selected.has(id));
    }

    return [emojiId];
  }

  onListContainerCreateOrUpdate(vnode) {
    this.listElement = vnode.dom;
    this.updateEmojiSortableState();
  }

  onEmojiGridCreateOrUpdate(vnode) {
    this.emojiListElement = vnode.dom;
    this.ensureEmojiSortable();
    this.updateEmojiSortableState();
    this.syncSortableSelection();
  }

  ensureEmojiSortable() {
    if (!this.emojiListElement) {
      return;
    }

    if (this.emojiSortable) {
      return;
    }

    if (!multiDragMounted) {
      Sortable.mount(new MultiDrag());
      multiDragMounted = true;
    }

    this.emojiSortable = Sortable.create(this.emojiListElement, {
      multiDrag: true,
      selectedClass: 'is-sortable-selected',
      animation: 150,
      handle: '.customEmoji-dragHandle',
      draggable: 'li[data-emoji-id]',
      delay: 0,
      touchStartThreshold: 4,
      fallbackTolerance: 3,
      scroll: true,
      bubbleScroll: true,
      forceAutoScrollFallback: true,
      scrollSensitivity: 80,
      scrollSpeed: 12,
      chosenClass: 'is-dragging',
      ghostClass: 'is-dragging-ghost',
      onStart: (event) => this.onEmojiSortStart(event),
      onEnd: (event) => this.onEmojiSortEnd(event),
    });
  }

  destroyEmojiSortable() {
    if (!this.emojiSortable) {
      return;
    }

    this.emojiSortable.destroy();
    this.emojiSortable = null;
    this.sortContext = null;
  }

  updateEmojiSortableState() {
    if (!this.emojiSortable) {
      return;
    }

    this.emojiSortable.option('disabled', app.customEmojiListState.isLoading());
    this.emojiSortable.option('scroll', this.listElement || true);
  }

  onEmojiSortStart(event) {
    this.syncSortableSelection();

    const state = app.customEmojiListState;
    const draggedId = String(event.item?.dataset?.emojiId || '');

    if (!draggedId) {
      this.sortContext = null;
      return;
    }

    this.sortContext = {
      draggedId,
      movingIds: this.draggingEmojiIdsById(draggedId),
      orderBefore: state.currentEmojiIds(),
    };
  }

  onEmojiSortEnd() {
    const state = app.customEmojiListState;
    const context = this.sortContext;
    this.sortContext = null;

    if (!context || !this.emojiListElement) {
      return;
    }

    const finalOrder = this.readEmojiOrderFromDom();
    if (!finalOrder.length) {
      return;
    }

    const nextOrder = this.composeEmojiOrder(context, finalOrder);
    state.persistEmojiSortByIds(nextOrder).catch((error) => this.showErrorAlert(error));
  }

  syncSortableSelection() {
    if (!this.emojiListElement || !this.emojiSortable || typeof Sortable.utils?.select !== 'function' || typeof Sortable.utils?.deselect !== 'function') {
      return;
    }

    const selectedIds = new Set(app.customEmojiListState.selectedEmojiIds);

    const items = Array.from(this.emojiListElement.querySelectorAll('li[data-emoji-id]'));

    items.forEach((item) => {
      Sortable.utils.deselect(item);
    });

    items.forEach((item) => {
      const emojiId = String(item.dataset.emojiId || '');
      const shouldSelect = selectedIds.has(emojiId);

      if (shouldSelect) {
        Sortable.utils.select(item);
      }
    });
  }

  readEmojiOrderFromDom() {
    if (!this.emojiListElement) {
      return [];
    }

    return Array.from(this.emojiListElement.querySelectorAll('li[data-emoji-id]'))
      .map((item) => String(item.dataset.emojiId || ''))
      .filter(Boolean);
  }

  composeEmojiOrder(context, finalOrder) {
    const movingIds = context.movingIds || [];
    if (movingIds.length <= 1) {
      return finalOrder;
    }

    const movingIdSet = new Set(movingIds);
    const draggedIndex = finalOrder.indexOf(context.draggedId);
    if (draggedIndex < 0) {
      return context.orderBefore;
    }

    let previousStableId = null;
    for (let i = draggedIndex - 1; i >= 0; i--) {
      const id = finalOrder[i];
      if (!movingIdSet.has(id)) {
        previousStableId = id;
        break;
      }
    }

    let nextStableId = null;
    for (let i = draggedIndex + 1; i < finalOrder.length; i++) {
      const id = finalOrder[i];
      if (!movingIdSet.has(id)) {
        nextStableId = id;
        break;
      }
    }

    const baseOrder = context.orderBefore.filter((id) => !movingIdSet.has(id));
    let insertIndex = baseOrder.length;

    if (previousStableId) {
      insertIndex = baseOrder.indexOf(previousStableId) + 1;
    } else if (nextStableId) {
      insertIndex = baseOrder.indexOf(nextStableId);
    }

    if (insertIndex < 0) {
      insertIndex = baseOrder.length;
    }

    return [...baseOrder.slice(0, insertIndex), ...movingIds, ...baseOrder.slice(insertIndex)];
  }

  onPointerDown(event) {
    if (event.button !== 0 || this.isInteractiveTarget(event.target)) {
      return;
    }

    const card = event.target.closest('.customEmoji[data-emoji-id]');
    if (card && !this.listElement?.contains(card)) {
      return;
    }

    this.drag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startContentX: this.contentX(event.clientX),
      startContentY: this.contentY(event.clientY),
      currentX: event.clientX,
      currentY: event.clientY,
      active: false,
      card,
      selectionBeforeDrag: new Set(app.customEmojiListState.selectedEmojiIds),
      longPressTimer: setTimeout(() => {
        this.beginBoxSelection();
        m.redraw();
      }, 350),
    };

    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
    document.addEventListener('pointercancel', this.onPointerUp);
  }

  onPointerMove(event) {
    if (!this.drag || event.pointerId !== this.drag.pointerId) {
      return;
    }

    this.drag.currentX = event.clientX;
    this.drag.currentY = event.clientY;

    if (!this.drag.active && this.dragDistance() > 3) {
      this.beginBoxSelection();
    }

    if (this.drag.active) {
      event.preventDefault();
      this.updateBoxSelection();
      m.redraw();
    }
  }

  onPointerUp(event) {
    if (!this.drag || event.pointerId !== this.drag.pointerId) {
      return;
    }

    if (this.drag.longPressTimer) {
      clearTimeout(this.drag.longPressTimer);
    }

    if (this.drag.active) {
      this.updateBoxSelection();
    } else if (this.drag.card) {
      const emojiId = this.drag.card.dataset.emojiId;
      const emoji = app.customEmojiListState.emojis.find((item) => app.customEmojiListState.emojiId(item) === emojiId);

      if (emoji) {
        app.customEmojiListState.toggleEmojiSelection(emoji);
        this.syncSortableSelection();
      }
    }

    this.drag = null;
    this.selectionBox = null;
    this.clearPointerListeners();
    m.redraw();
  }

  onScroll() {
    if (!this.drag?.active) {
      return;
    }

    this.updateBoxSelection();
    m.redraw();
  }

  beginBoxSelection() {
    if (!this.drag || this.drag.active) {
      return;
    }

    if (this.drag.longPressTimer) {
      clearTimeout(this.drag.longPressTimer);
      this.drag.longPressTimer = null;
    }

    this.drag.active = true;
    this.updateBoxSelection();
  }

  updateBoxSelection() {
    if (!this.drag || !this.listElement) {
      return;
    }

    const box = this.currentSelectionBox();
    const selectedIds = new Set(this.drag.selectionBeforeDrag);

    this.listElement.querySelectorAll('.customEmoji[data-emoji-id]').forEach((card) => {
      if (this.rectsIntersect(box.content, this.cardContentRect(card))) {
        selectedIds.add(card.dataset.emojiId);
      }
    });

    this.selectionBox = box.content;
    app.customEmojiListState.replaceSelection(selectedIds);
    this.syncSortableSelection();
  }

  currentSelectionBox() {
    const currentContentX = this.contentX(this.drag.currentX);
    const currentContentY = this.contentY(this.drag.currentY);
    const left = Math.min(this.drag.startContentX, currentContentX);
    const top = Math.min(this.drag.startContentY, currentContentY);
    const right = Math.max(this.drag.startContentX, currentContentX);
    const bottom = Math.max(this.drag.startContentY, currentContentY);

    return {
      content: {
        left,
        top,
        right,
        bottom,
        width: right - left,
        height: bottom - top,
      },
    };
  }

  selectionBoxStyle() {
    return {
      left: `${this.selectionBox.left}px`,
      top: `${this.selectionBox.top}px`,
      width: `${this.selectionBox.width}px`,
      height: `${this.selectionBox.height}px`,
    };
  }

  rectsIntersect(a, b) {
    return a.left <= b.right && a.right >= b.left && a.top <= b.bottom && a.bottom >= b.top;
  }

  cardContentRect(card) {
    const listRect = this.listElement.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const left = cardRect.left - listRect.left + this.listElement.scrollLeft;
    const top = cardRect.top - listRect.top + this.listElement.scrollTop;

    return {
      left,
      top,
      right: left + cardRect.width,
      bottom: top + cardRect.height,
    };
  }

  contentX(clientX) {
    return clientX - this.listElement.getBoundingClientRect().left + this.listElement.scrollLeft;
  }

  contentY(clientY) {
    return clientY - this.listElement.getBoundingClientRect().top + this.listElement.scrollTop;
  }

  dragDistance() {
    return Math.max(Math.abs(this.drag.currentX - this.drag.startX), Math.abs(this.drag.currentY - this.drag.startY));
  }

  clearPointerListeners() {
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);
    document.removeEventListener('pointercancel', this.onPointerUp);

    if (this.drag?.longPressTimer) {
      clearTimeout(this.drag.longPressTimer);
    }
  }

  isInteractiveTarget(target) {
    return !!target.closest('button, a, input, select, textarea, label');
  }

  showErrorAlert(error) {
    const fallback = app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.request_failed');
    const detail = error?.response?.errors?.[0]?.detail || fallback;
    app.alerts.show(Alert, { type: 'error' }, detail);
  }
}
