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
import ItemList from 'flarum/common/utils/ItemList';
import Stream from 'flarum/common/utils/Stream';
import urlChecker from '../../common/utils/urlChecker';

export default class EditEmojiTypeModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.category = this.attrs.category || null;
    this.categoryTitle = Stream(this.category?.title || '');
    this.categoryPath = Stream(this.category?.path || '');
  }

  className() {
    return 'EditEmojiTypeModal Modal--small';
  }

  title() {
    const defaultTitle = this.category
      ? app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.edit_modal_title')
      : app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.add_modal_title');

    const titleText = this.categoryTitle().trim() || defaultTitle;
    const titlePrefix = this.titlePrefix(titleText);
    const title = (
      <span className="EditEmojiTypeModal-titleText" title={typeof titleText === 'string' ? titleText : undefined}>
        {titleText}
      </span>
    );

    if (titlePrefix) {
      return [titlePrefix, title];
    }

    return title;
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form">{this.fields().toArray()}</div>
      </div>
    );
  }

  fields() {
    const items = new ItemList();

    items.add(
      'title',
      <div className="Form-group">
        <label>{app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.title_label')}</label>
        <input className="FormControl" bidi={this.categoryTitle} />
      </div>,
      20
    );

    items.add(
      'path',
      <div className="Form-group">
        <label>{app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.path_or_url_label')}</label>
        <input className="FormControl" placeholder="/assets/emojis/category.png" bidi={this.categoryPath} />
      </div>,
      10
    );

    items.add(
      'submit',
      <div className="Form-group">
        {Button.component(
          {
            type: 'submit',
            className: 'Button Button--primary',
            loading: this.loading,
          },
          app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.submit_button')
        )}
      </div>,
      -10
    );

    return items;
  }

  onsubmit(e) {
    e.preventDefault();
    this.loading = true;

    const state = app.customEmojiListState;
    const title = this.categoryTitle().trim();
    const path = this.categoryPath().trim();
    const request = this.category ? state.updateCategory(this.category.id, title, path) : state.createCategory(title, path);

    request
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
      app.translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.saved_message')
    );
  }

  titlePrefix(titleText) {
    const path = this.categoryPath().trim();

    if (!path) {
      return null;
    }

    if (this.isFaIconPath(path)) {
      return <i className={`EditEmojiTypeModal-titleIcon ${path}`} aria-hidden="true" />;
    }

    const url = urlChecker(path) ? path : app.forum.attribute('baseUrl') + path;
    return <img className="EditEmojiTypeModal-titleImage" src={url} alt={titleText} />;
  }

  isFaIconPath(path) {
    const tokens = path
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (tokens.length < 2) {
      return false;
    }

    const hasStyleToken = tokens.some((token) => token === 'fa' || /^fa[a-z]+$/i.test(token) || /^fa-[a-z-]+$/i.test(token));
    const hasIconToken = tokens.some((token) => /^fa-[a-z0-9-]+$/i.test(token));

    return hasStyleToken && hasIconToken;
  }
}
