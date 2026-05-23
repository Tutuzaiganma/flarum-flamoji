/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

import app from 'flarum/common/app';

export default class CustomEmojiListState {
  constructor() {
    this.emojis = [];
    this.categories = [];
    this.selectedTypeId = null;
    this.selectedEmojiIds = new Set();

    this.loading = false;
    this.categoriesLoading = false;
  }

  loadInitialData() {
    return this.loadCategories().then(() => this.loadResults());
  }

  loadCategories() {
    this.categoriesLoading = true;

    return app
      .request({
        method: 'GET',
        url: `${app.forum.attribute('apiUrl')}/pianotell/emoji-types`,
      })
      .then((payload) => {
        const rows = Array.isArray(payload?.data) ? payload.data : [];
        this.categories = rows
          .map((row) => this.normalizeCategory(row))
          .filter(Boolean)
          .sort((a, b) => this.sortByPosition(a.sort, b.sort, a.id, b.id));

        if (!this.selectedTypeId || !this.categories.some((category) => category.id === this.selectedTypeId)) {
          this.selectedTypeId = this.categories[0]?.id || null;
        }
      })
      .finally(() => {
        this.categoriesLoading = false;
        m.redraw();
      });
  }

  normalizeCategory(row) {
    if (!row) {
      return null;
    }

    return {
      id: String(row.id),
      sort: this.normalizeSortValue(row.attributes?.sort),
      title: row.attributes?.title || '',
      path: row.attributes?.path || '',
      isHidden: !!row.attributes?.isHidden,
    };
  }

  setSelectedType(typeId) {
    const nextTypeId = typeId ? String(typeId) : null;

    if (this.selectedTypeId === nextTypeId) {
      return Promise.resolve();
    }

    this.selectedTypeId = nextTypeId;
    this.clearSelection();

    return this.loadResults();
  }

  loadResults() {
    this.loading = true;

    if (!this.selectedTypeId) {
      this.emojis = [];
      this.clearSelection();
      this.loading = false;
      m.redraw();

      return Promise.resolve([]);
    }

    const filter = {
      all: 1,
      type_id: this.selectedTypeId,
    };

    return app.store
      .find('pianotell/emojis', { filter })
      .then(this.parseResults.bind(this))
      .catch((error) => {
        this.loading = false;
        m.redraw();
        throw error;
      });
  }

  parseResults(results) {
    this.emojis = [...results].sort((a, b) =>
      this.sortByPosition(this.normalizeSortValue(a.sort?.()), this.normalizeSortValue(b.sort?.()), this.emojiId(a), this.emojiId(b))
    );
    this.pruneSelection();

    this.loading = false;

    m.redraw();

    return results;
  }

  createCategory(title, path = '') {
    this.categoriesLoading = true;

    return app
      .request({
        method: 'POST',
        url: `${app.forum.attribute('apiUrl')}/pianotell/emoji-types`,
        body: {
          data: {
            attributes: {
              title,
              path,
            },
          },
        },
      })
      .then((payload) => {
        const category = this.normalizeCategory(payload?.data);

        if (category) {
          this.categories.push(category);
          this.categories.sort((a, b) => this.sortByPosition(a.sort, b.sort, a.id, b.id));
          this.selectedTypeId = category.id;
        }

        return this.loadResults().then(() => category);
      })
      .finally(() => {
        this.categoriesLoading = false;
        m.redraw();
      });
  }

  updateCategory(categoryId, title, path = '', sort = null) {
    this.categoriesLoading = true;

    return app
      .request({
        method: 'PATCH',
        url: `${app.forum.attribute('apiUrl')}/pianotell/emoji-types/${categoryId}`,
        body: {
          data: {
            attributes: {
              title,
              path,
              ...(sort === null || sort === undefined ? {} : { sort }),
            },
          },
        },
      })
      .then((payload) => {
        const nextCategory = this.normalizeCategory(payload?.data);
        const index = this.categories.findIndex((category) => category.id === String(categoryId));

        if (nextCategory && index > -1) {
          this.categories.splice(index, 1, nextCategory);
          this.categories.sort((a, b) => this.sortByPosition(a.sort, b.sort, a.id, b.id));
        }

        m.redraw();

        return nextCategory;
      })
      .finally(() => {
        this.categoriesLoading = false;
        m.redraw();
      });
  }

  updateCategoryVisibility(categoryId, isVisible) {
    const previousCategories = this.categories.map((item) => ({ ...item }));
    const category = this.categories.find((item) => item.id === String(categoryId));

    if (!category) {
      return Promise.resolve(null);
    }

    category.isHidden = !isVisible;
    this.categoriesLoading = true;
    m.redraw();

    return app
      .request({
        method: 'PATCH',
        url: `${app.forum.attribute('apiUrl')}/pianotell/emoji-types/${categoryId}`,
        body: {
          data: {
            attributes: {
              isHidden: !isVisible,
            },
          },
        },
      })
      .then((payload) => {
        const nextCategory = this.normalizeCategory(payload?.data);
        const index = this.categories.findIndex((item) => item.id === String(categoryId));

        if (nextCategory && index > -1) {
          this.categories.splice(index, 1, nextCategory);
        }

        return nextCategory;
      })
      .catch((error) => {
        this.categories = previousCategories;
        throw error;
      })
      .finally(() => {
        this.categoriesLoading = false;
        m.redraw();
      });
  }

  deleteCategory(categoryId) {
    this.categoriesLoading = true;

    return app
      .request({
        method: 'DELETE',
        url: `${app.forum.attribute('apiUrl')}/pianotell/emoji-types/${categoryId}`,
      })
      .then(() => {
        const index = this.categories.findIndex((category) => category.id === String(categoryId));
        if (index > -1) {
          this.categories.splice(index, 1);
        }

        if (this.selectedTypeId === String(categoryId)) {
          this.selectedTypeId = this.categories[0]?.id || null;
        }

        this.clearSelection();

        return this.loadResults();
      })
      .finally(() => {
        this.categoriesLoading = false;
        m.redraw();
      });
  }

  persistCategorySort(nextCategories) {
    const previousCategories = this.categories.slice();
    const withSort = nextCategories.map((category, index) => ({
      ...category,
      sort: index + 1,
    }));
    const previousSort = new Map(previousCategories.map((category) => [category.id, this.normalizeSortValue(category.sort)]));
    const changed = withSort.filter((category) => previousSort.get(category.id) !== category.sort);

    this.categories = withSort;

    if (!changed.length) {
      m.redraw();
      return Promise.resolve();
    }

    this.categoriesLoading = true;
    m.redraw();

    return app
      .request({
        method: 'POST',
        url: `${app.forum.attribute('apiUrl')}/pianotell/emoji-types/reorder`,
        body: {
          data: {
            attributes: {
              ids: withSort.map((category) => category.id),
            },
          },
        },
      })
      .catch((error) => {
        this.categories = previousCategories;
        throw error;
      })
      .finally(() => {
        this.categoriesLoading = false;
        m.redraw();
      });
  }

  persistCategorySortByIds(orderedIds) {
    const nextCategories = this.itemsByOrderedIds(this.categories, orderedIds, (category) => category.id);

    if (!nextCategories.length) {
      return Promise.resolve();
    }

    return this.persistCategorySort(nextCategories);
  }

  hasEmojis() {
    return this.emojis.length > 0;
  }

  isLoading() {
    return this.loading;
  }

  empty() {
    return !this.hasEmojis() && !this.isLoading();
  }

  emojiId(emoji) {
    return String(emoji?.id?.() || emoji?.data?.id || '');
  }

  currentEmojiIds() {
    return this.emojis.map((emoji) => this.emojiId(emoji)).filter(Boolean);
  }

  pruneSelection() {
    const currentIds = new Set(this.currentEmojiIds());
    this.selectedEmojiIds.forEach((id) => {
      if (!currentIds.has(id)) {
        this.selectedEmojiIds.delete(id);
      }
    });
  }

  isEmojiSelected(emoji) {
    const id = this.emojiId(emoji);

    return id ? this.selectedEmojiIds.has(id) : false;
  }

  toggleEmojiSelection(emoji) {
    const id = this.emojiId(emoji);

    if (!id) {
      return;
    }

    if (this.selectedEmojiIds.has(id)) {
      this.selectedEmojiIds.delete(id);
    } else {
      this.selectedEmojiIds.add(id);
    }

    m.redraw();
  }

  replaceSelection(ids) {
    this.selectedEmojiIds = new Set(ids);
    this.pruneSelection();
  }

  clearSelection() {
    this.selectedEmojiIds.clear();
    m.redraw();
  }

  selectAll() {
    this.selectedEmojiIds = new Set(this.currentEmojiIds());
    m.redraw();
  }

  toggleAllSelection() {
    if (this.allSelected()) {
      this.clearSelection();
    } else {
      this.selectAll();
    }
  }

  selectedCount() {
    return this.selectedEmojiIds.size;
  }

  allSelected() {
    return this.hasEmojis() && this.selectedCount() === this.currentEmojiIds().length;
  }

  bulkDeleteSelected() {
    const ids = Array.from(this.selectedEmojiIds);

    if (!ids.length) {
      return Promise.resolve();
    }

    this.loading = true;
    m.redraw();

    return app
      .request({
        method: 'POST',
        url: `${app.forum.attribute('apiUrl')}/pianotell/emojis/bulk-delete`,
        body: {
          data: {
            attributes: {
              ids,
            },
          },
        },
      })
      .then(() => {
        this.clearSelection();
        return this.loadResults();
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }

  bulkMoveSelected(typeId) {
    const ids = Array.from(this.selectedEmojiIds);
    const nextTypeId = typeId ? String(typeId) : null;

    if (!ids.length || !nextTypeId) {
      return Promise.resolve();
    }

    this.loading = true;
    m.redraw();

    return app
      .request({
        method: 'POST',
        url: `${app.forum.attribute('apiUrl')}/pianotell/emojis/bulk-move`,
        body: {
          data: {
            attributes: {
              ids,
              typeId: nextTypeId,
            },
          },
        },
      })
      .then(() => {
        this.clearSelection();
        return this.loadResults();
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }

  persistEmojiSort(nextEmojis) {
    const previousEmojis = this.emojis.slice();
    const currentSort = new Map(previousEmojis.map((emoji) => [this.emojiId(emoji), this.normalizeSortValue(emoji.sort?.())]));
    const changed = nextEmojis
      .map((emoji, index) => ({ emoji, sort: index + 1 }))
      .filter(({ emoji, sort }) => currentSort.get(this.emojiId(emoji)) !== sort);

    this.emojis = nextEmojis;

    if (!changed.length) {
      m.redraw();
      return Promise.resolve();
    }

    this.loading = true;
    this.syncEmojiSortValues(changed);
    m.redraw();

    if (!this.selectedTypeId) {
      return Promise.resolve();
    }

    return app
      .request({
        method: 'POST',
        url: `${app.forum.attribute('apiUrl')}/pianotell/emojis/reorder`,
        body: {
          data: {
            attributes: {
              ids: nextEmojis.map((emoji) => this.emojiId(emoji)).filter(Boolean),
              typeId: this.selectedTypeId,
            },
          },
        },
      })
      .catch((error) => {
        this.emojis = previousEmojis;
        this.restoreEmojiSortValues(previousEmojis, currentSort);
        throw error;
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }

  persistEmojiSortByIds(orderedIds) {
    const nextEmojis = this.itemsByOrderedIds(this.emojis, orderedIds, (emoji) => this.emojiId(emoji));

    if (!nextEmojis.length) {
      return Promise.resolve();
    }

    return this.persistEmojiSort(nextEmojis);
  }

  syncEmojiSortValues(rows) {
    rows.forEach(({ emoji, sort }) => {
      if (emoji?.data?.attributes) {
        emoji.data.attributes.sort = sort;
      }
    });
  }

  restoreEmojiSortValues(emojis, sortById) {
    emojis.forEach((emoji) => {
      const id = this.emojiId(emoji);

      if (id && sortById.has(id) && emoji?.data?.attributes) {
        emoji.data.attributes.sort = sortById.get(id);
      }
    });
  }

  clearFormatterCache() {
    return app.request({
      method: 'DELETE',
      url: `${app.forum.attribute('apiUrl')}/cache`,
    });
  }

  itemsByOrderedIds(items, orderedIds, idResolver) {
    const itemMap = new Map(items.map((item) => [idResolver(item), item]));
    const usedIds = new Set();
    const nextItems = [];

    orderedIds.forEach((id) => {
      const key = String(id || '');
      if (!key || usedIds.has(key) || !itemMap.has(key)) {
        return;
      }

      nextItems.push(itemMap.get(key));
      usedIds.add(key);
    });

    items.forEach((item) => {
      const id = idResolver(item);
      if (usedIds.has(id)) {
        return;
      }

      nextItems.push(item);
      usedIds.add(id);
    });

    return nextItems;
  }

  normalizeSortValue(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  sortByPosition(leftSort, rightSort, leftId, rightId) {
    if (leftSort !== rightSort) {
      return leftSort - rightSort;
    }

    return String(leftId).localeCompare(String(rightId), undefined, { numeric: true });
  }
}
