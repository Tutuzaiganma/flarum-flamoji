/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/utils/getEmojiCategories.js":
/*!************************************************!*\
  !*** ./src/common/utils/getEmojiCategories.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getEmojiCategories)
/* harmony export */ });
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

// emoji-mart category IDs. See @emoji-mart/data sets/*/native.json -> categories[].id.
// Note: emoji-mart merges what emoji-button called "smileys" + "people" into a single
// "people" category. Other IDs differ from the legacy emoji-button names; the
// settings migration rewrites stored values from the old IDs to these.
function getEmojiCategories() {
  return ['people', 'nature', 'foods', 'activity', 'places', 'objects', 'symbols', 'flags'];
}

/***/ }),

/***/ "./src/common/utils/urlChecker.js":
/*!****************************************!*\
  !*** ./src/common/utils/urlChecker.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ urlChecker)
/* harmony export */ });
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

// JavaScript way to check if the path starts with http:// or https://
// We're using a similar thing on the ConfigureTextFormatter.php
function urlChecker(url) {
  var regex = new RegExp('^(http|https)://', 'i');
  if (url.match(regex)) return true;
  return false;
}

/***/ }),

/***/ "./src/forum/components/TextEditorButton.js":
/*!**************************************************!*\
  !*** ./src/forum/components/TextEditorButton.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextEditorButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__);

/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */




/**
 * The `TextEditorButton` component displays a button suitable for the text
 * editor toolbar.
 *
 * So this class is only here because of
 * to set `showOnFocus={false}` on the tooltip.
 */
var TextEditorButton = /*#__PURE__*/function (_Button) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TextEditorButton, _Button);
  function TextEditorButton() {
    return _Button.apply(this, arguments) || this;
  }
  var _proto = TextEditorButton.prototype;
  _proto.view = function view(vnode) {
    var originalView = _Button.prototype.view.call(this, vnode);

    // Steal tooltip label from the Button superclass
    var tooltipText = this.attrs.tooltipText || originalView.attrs.title;
    delete originalView.attrs.title;
    return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
      showOnFocus: false,
      text: tooltipText
    }, originalView);
  };
  TextEditorButton.initAttrs = function initAttrs(attrs) {
    _Button.initAttrs.call(this, attrs);
    attrs.className = 'Button Button--icon Button--link Button-flamoji';
    attrs.tooltipText = attrs.title;
  };
  return TextEditorButton;
}((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils_getEmojiCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/getEmojiCategories */ "./src/common/utils/getEmojiCategories.js");
/* harmony import */ var _components_TextEditorButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TextEditorButton */ "./src/forum/components/TextEditorButton.js");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/utils/urlChecker */ "./src/common/utils/urlChecker.js");

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */









// Translation key prefixes
var t = 'pianotell-flamoji.forum.';
var t_p = t + 'emoji-mart.';

// emoji-mart's twitter.json `x`/`y` percentages assume a specific sprite-
// sheet grid size. @emoji-mart/data v1.2.1 was built against
// emoji-datasource v15.0.1 (61×61 grid). The matching twitter sprite is
// emoji-datasource-twitter@15.0.1. Bumping @emoji-mart/data later means
// re-pinning this URL to the corresponding emoji-datasource-twitter
// release — verify by checking that the sprite's tile count matches
// `data.sheet.cols`/`data.sheet.rows`.
var TWEMOJI_SPRITESHEET_URL = 'https://cdn.jsdelivr.net/npm/emoji-datasource-twitter@15.0.1/img/twitter/sheets-256/64.png';
flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().initializers.add('pianotell-flamoji', function () {
  /**
   * Build the emoji-mart i18n object from Flarum's translator. emoji-mart
   * shallow-merges the `i18n` prop on top of its built-in English
   * defaults, but nested objects (`categories`, `skins`) are *replaced*
   * wholesale rather than deep-merged — partial objects there leave
   * downstream code reading from `undefined`. So we always emit the full
   * nested structure.
   */
  function buildI18n() {
    var cat = function cat(id) {
      return flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('pianotell-flamoji.forum.emoji-mart.categories.' + id);
    };
    var tp = function tp(key) {
      return flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans(t_p + key);
    };
    return {
      search: tp('search_placeholder'),
      search_no_results_1: tp('no_emojis_found_title'),
      search_no_results_2: tp('no_emojis_found_message'),
      pick: tp('pick'),
      add_custom: tp('add_custom'),
      categories: {
        search: tp('category_search'),
        frequent: cat('frequent'),
        people: cat('people'),
        nature: cat('nature'),
        foods: cat('foods'),
        activity: cat('activity'),
        places: cat('places'),
        objects: cat('objects'),
        symbols: cat('symbols'),
        flags: cat('flags'),
        custom: cat('custom')
      },
      skins: {
        choose: tp('skin_tone_choose'),
        1: tp('skin_tone_default'),
        2: tp('skin_tone_light'),
        3: tp('skin_tone_medium_light'),
        4: tp('skin_tone_medium'),
        5: tp('skin_tone_medium_dark'),
        6: tp('skin_tone_dark')
      }
    };
  }
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'oncreate', function () {
    this.flamojiButton = this.element.querySelector('.Button-flamoji');
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'oninit', function () {
    this.isPickerLoading = this.isPickerLoaded = false;
    this.isPickerVisible = false;

    // https://v4.webpack.js.org/guides/public-path/#on-the-fly
    // Normalize trailing slash on baseUrl so chunk URLs don't end up with
    // a double slash (`/forum//assets/...`). Most servers tolerate it,
    // but some chunked-loading paths and CDNs are strict about it.
    var baseUrl = (flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl') || '').replace(/\/+$/, '');
    __webpack_require__.p = baseUrl + '/assets/extensions/pianotell-flamoji/dist/';
  });

  /**
   * Position the picker as a popup. Two placement modes:
   *
   * Primary: centered horizontally on the flamoji toolbar button,
   * floating above it. As the viewport shrinks vertically, the picker
   * slides up to stay on-screen rather than clipping at the top.
   *
   * Fallback (when the button is so close to a viewport edge that a
   * button-centered picker wouldn't fit): center on the composer body
   * horizontally, and align the picker's vertical center with the
   * composer's bottom edge. Same idea as the original emoji-button
   * picker — popup hovers over the bottom of the composer.
   *
   * In both modes the final coordinates are clamped to the viewport so
   * the popup stays fully visible.
   *
   * Picker lives at document.body level (see buildPicker), so we use
   * viewport coordinates from getBoundingClientRect — `position: fixed`
   * already accounts for page scroll, no offset math needed.
   */
  function positionPicker() {
    if (!this.picker) return;
    positionElement.call(this, this.picker);
  }

  /**
   * Shared positioner used by both the real picker and the loading
   * placeholder. Same primary/fallback geometry as positionPicker; pulled
   * out so the loader can reuse it without temporarily aliasing
   * `this.picker`.
   */
  function positionElement(el) {
    if (!el || !this.flamojiButton) return;
    var btnRect = this.flamojiButton.getBoundingClientRect();
    var elRect = el.getBoundingClientRect();
    // Reposition won't work until the element has measurable dimensions —
    // emoji-mart populates Shadow DOM asynchronously after appendChild,
    // so the first call right after mount sees width/height of 0. The
    // ResizeObserver wired up in buildPicker() will re-fire this once
    // the picker takes its real shape.
    if (!elRect.width || !elRect.height) return;
    var margin = 6;
    var screenPadding = 8;
    var minLeft = screenPadding;
    var maxLeft = window.innerWidth - elRect.width - screenPadding;
    var minTop = screenPadding;
    var maxTop = window.innerHeight - elRect.height - screenPadding;

    // Try primary placement: horizontally centered on the button.
    var btnCenterX = btnRect.left + btnRect.width / 2;
    var left = btnCenterX - elRect.width / 2;
    var top;
    if (left < minLeft || left > maxLeft) {
      // Fallback: horizontally center on the composer body, vertically
      // anchor the picker's center to the composer's bottom edge.
      var composer = this.element.closest('.ComposerBody') || this.element;
      var composerRect = composer.getBoundingClientRect();
      left = composerRect.left + (composerRect.width - elRect.width) / 2;
      top = composerRect.bottom - elRect.height / 2;
    } else {
      // Primary: float above the button; slide up rather than clip if
      // there isn't enough room above.
      top = btnRect.top - margin - elRect.height;
    }

    // Final clamp keeps the picker fully on-screen in either mode.
    if (left > maxLeft) left = maxLeft;
    if (left < minLeft) left = minLeft;
    if (top > maxTop) top = maxTop;
    if (top < minTop) top = minTop;
    el.style.top = Math.round(top) + 'px';
    el.style.left = Math.round(left) + 'px';
  }

  // Clean up the picker DOM + listeners when the editor is removed (e.g.
  // composer closes, or another composer takes over). Without this, every
  // open/close cycle would leak an <em-emoji-picker> custom element on
  // document.body and a window listener.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'onremove', function () {
    if (this._flamojiReposition) {
      window.removeEventListener('resize', this._flamojiReposition);
      window.removeEventListener('scroll', this._flamojiReposition, true);
      this._flamojiReposition = null;
    }
    if (this._flamojiKeydown) {
      document.removeEventListener('keydown', this._flamojiKeydown, true);
      this._flamojiKeydown = null;
    }
    if (this._flamojiResizeObserver) {
      this._flamojiResizeObserver.disconnect();
      this._flamojiResizeObserver = null;
    }
    // Tear down the loading-placeholder popup if it's still on screen
    // (composer dismissed mid-load, or picker mount races teardown).
    unmountPickerLoader.call(this);
    if (this._flamojiLoaderTimer) {
      clearTimeout(this._flamojiLoaderTimer);
      this._flamojiLoaderTimer = null;
    }
    if (this.picker && typeof this.picker.remove === 'function') {
      try {
        this.picker.remove();
      } catch (e) {
        // The custom element may already be detached.
      }
    }
    this.picker = null;
    this.isPickerLoaded = false;
    this.isPickerVisible = false;
    this.flamojiButton = null;
  });

  /**
   * Mount a placeholder popup at the picker's eventual position so the
   * user gets immediate visual feedback while the emoji-mart chunks +
   * custom-emoji API are loading on first open. Mount is delayed by
   * LOADER_DELAY_MS so warm-cache loads (≪100ms) skip the loader
   * entirely — avoids a flicker where the placeholder appears for one
   * frame and is immediately replaced.
   *
   * If a loader is already mounted (e.g. the user clicked Retry after a
   * prior failure), it's reused rather than re-mounted.
   */
  var LOADER_DELAY_MS = 120;
  function scheduleLoaderMount() {
    var _this = this;
    if (this._flamojiLoader || this._flamojiLoaderTimer) return;
    this._flamojiLoaderTimer = setTimeout(function () {
      _this._flamojiLoaderTimer = null;
      // Editor torn down or load already finished while we were waiting.
      if (!_this.element || !_this.element.isConnected) return;
      if (!_this.isPickerLoading) return;
      mountPickerLoader.call(_this);
    }, LOADER_DELAY_MS);
  }
  function mountPickerLoader() {
    var _this2 = this;
    if (this._flamojiLoader) return;
    var loader = document.createElement('div');
    loader.className = 'flamoji-picker-loader';
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-live', 'polite');
    var spinner = document.createElement('div');
    spinner.className = 'flamoji-picker-loader__spinner';
    spinner.setAttribute('aria-hidden', 'true');
    var label = document.createElement('div');
    label.className = 'flamoji-picker-loader__label';
    label.textContent = flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans(t + 'composer.picker_loading');
    loader.appendChild(spinner);
    loader.appendChild(label);
    document.body.appendChild(loader);
    this._flamojiLoader = loader;
    this._flamojiLoaderReposition = function () {
      return positionElement.call(_this2, loader);
    };
    window.addEventListener('resize', this._flamojiLoaderReposition);
    window.addEventListener('scroll', this._flamojiLoaderReposition, true);
    positionElement.call(this, loader);
  }
  function unmountPickerLoader() {
    if (this._flamojiLoaderReposition) {
      window.removeEventListener('resize', this._flamojiLoaderReposition);
      window.removeEventListener('scroll', this._flamojiLoaderReposition, true);
      this._flamojiLoaderReposition = null;
    }
    if (this._flamojiLoader) {
      try {
        this._flamojiLoader.remove();
      } catch (e) {/* already detached */}
      this._flamojiLoader = null;
    }
  }

  /**
   * Replace the loader's spinner with an inline error card + Retry button.
   * Complements the existing top-of-page Alert (which can be missed if the
   * user is focused on the composer). Retry re-runs the same load path.
   */
  function showLoaderError(retryCb) {
    var _this3 = this;
    // If the loader hasn't materialized yet (load failed faster than
    // LOADER_DELAY_MS), mount it now so the error has a surface to live on.
    if (this._flamojiLoaderTimer) {
      clearTimeout(this._flamojiLoaderTimer);
      this._flamojiLoaderTimer = null;
    }
    if (!this._flamojiLoader) mountPickerLoader.call(this);
    var loader = this._flamojiLoader;
    loader.classList.add('flamoji-picker-loader--error');
    loader.replaceChildren();
    var label = document.createElement('div');
    label.className = 'flamoji-picker-loader__label';
    label.textContent = flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans(t + 'composer.picker_load_error');
    var retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'Button Button--primary flamoji-picker-loader__retry';
    retry.textContent = flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans(t + 'composer.picker_load_retry');
    retry.addEventListener('click', function () {
      unmountPickerLoader.call(_this3);
      retryCb();
    });
    loader.appendChild(label);
    loader.appendChild(retry);
    positionElement.call(this, loader);
  }

  /**
   * emoji-mart's picker lives entirely behind a Shadow DOM, so external
   * stylesheets can't reach the category headers, search input, etc.
   * The picker exposes a few CSS custom properties (handled in our LESS
   * file), but the rest needs CSS injected into the shadow root after
   * mount. Adopting a sheet is idempotent — re-runs are no-ops because
   * we tag the element.
   */
  function injectShadowStyles(picker) {
    var root = picker.shadowRoot;
    if (!root || root.querySelector('style[data-flamoji]')) return;

    // Category headers (`.sticky`) and the search input live behind
    // emoji-mart's Shadow DOM. Bring them closer to Flarum's form/section
    // aesthetic via an injected sheet:
    //
    // - Headers: slightly larger, semi-bold, with a subtle bottom border
    //   so categories read as real sections (not just floating labels).
    //   Use the picker's own background color so they blend when sticky.
    // - Search: 1px border + a real focus ring using Flarum's primary
    //   accent. The default emoji-mart input is borderless; with our
    //   tighter --em-rgb-input matching Flarum's @control-bg, that made
    //   the field disappear into the chrome.
    var css = "\n        /* Match the original emoji-button look: medium-weight, ~13px,\n           secondary text color (Flarum's @muted-color piped in via the\n           --flamoji-category-header-color custom prop in less/forum.less).\n           Subtle bottom border + background so the sticky header reads\n           cleanly when categories scroll behind it. */\n        .sticky {\n          font-weight: 700;\n          font-size: 15px;\n          text-transform: none;\n          color: var(--flamoji-category-header-color, rgba(var(--em-rgb-color), 0.75));\n          background: rgb(var(--em-rgb-background));\n          padding: 14px 12px 8px !important;\n          border-bottom: 1px solid var(--em-color-border);\n          margin-bottom: 4px;\n        }\n        .search input[type=\"search\"] {\n          font-size: 14px;\n          border: 1px solid var(--em-color-border);\n          padding-top: 9px;\n          padding-bottom: 9px;\n          transition: border-color 120ms ease, box-shadow 120ms ease;\n        }\n        .search input[type=\"search\"]:focus {\n          border-color: rgb(var(--em-rgb-accent));\n          box-shadow: 0 0 0 2px rgba(var(--em-rgb-accent), 0.25);\n          outline: none;\n        }\n        .search .icon {\n          opacity: 0.5;\n        }\n        nav button {\n          padding: 6px 0;\n        }\n      ";
    var style = document.createElement('style');
    style.setAttribute('data-flamoji', '');
    style.textContent = css;
    root.appendChild(style);
  }

  /**
   * Construct the emoji-mart Picker for this TextEditor instance, append
   * it to flamojiContainer, and show it. Called only on the first picker
   * open per editor instance; subsequent opens just toggle visibility.
   */
  function buildPicker(emojiMartModule, dataModule, emojisResponse, typesResponse) {
    var _this4 = this;
    var baseUrl = flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl');
    var Picker = emojiMartModule.Picker;
    var data = dataModule["default"] || dataModule;
    var specifiedCategories = JSON.parse(flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.specify_categories'));
    var sortingArr = (0,_common_utils_getEmojiCategories__WEBPACK_IMPORTED_MODULE_4__["default"])();
    // Order of `categories` in the picker prop drives nav-tab order.
    specifiedCategories.sort(function (a, b) {
      return sortingArr.indexOf(a) - sortingArr.indexOf(b);
    });

    // Build a lookup keyed by the id we set on each custom emoji entry,
    // so the onEmojiSelect handler can find the configured replacement
    // text without round-tripping through paths or URLs.
    var customEmojiReplacers = {};
    var customEmojis = [];
    var customCategories = (typesResponse.data || []).map(function (category) {
      var _category$attributes, _category$attributes2, _category$attributes3, _category$attributes4;
      return {
        id: String(category.id || ''),
        title: ((_category$attributes = category.attributes) == null ? void 0 : _category$attributes.title) || '',
        path: ((_category$attributes2 = category.attributes) == null ? void 0 : _category$attributes2.path) || '',
        sort: Number((_category$attributes3 = category.attributes) == null ? void 0 : _category$attributes3.sort) || 0,
        isHidden: !!((_category$attributes4 = category.attributes) != null && _category$attributes4.isHidden)
      };
    }).filter(function (category) {
      return category.id && !category.isHidden;
    }).sort(function (a, b) {
      return a.sort === b.sort ? a.id.localeCompare(b.id, undefined, {
        numeric: true
      }) : a.sort - b.sort;
    });
    var entriesByType = new Map(customCategories.map(function (category) {
      return [category.id, []];
    }));
    (emojisResponse.data || []).forEach(function (customEmoji) {
      var _customEmoji$attribut, _customEmoji$attribut2, _customEmoji$attribut3, _customEmoji$attribut4, _customEmoji$attribut5;
      var typeId = String(((_customEmoji$attribut = customEmoji.attributes) == null ? void 0 : _customEmoji$attribut.type_id) || '');
      if (!entriesByType.has(typeId)) {
        return;
      }
      var path = ((_customEmoji$attribut2 = customEmoji.attributes) == null ? void 0 : _customEmoji$attribut2.path) || '';
      var title = ((_customEmoji$attribut3 = customEmoji.attributes) == null ? void 0 : _customEmoji$attribut3.title) || '';
      var replacer = ((_customEmoji$attribut4 = customEmoji.attributes) == null ? void 0 : _customEmoji$attribut4.text_to_replace) || '';
      var sort = Number((_customEmoji$attribut5 = customEmoji.attributes) == null ? void 0 : _customEmoji$attribut5.sort) || 0;
      // Use the path as a stable id; paths are unique in the custom-emoji table.
      var id = 'flamoji-' + path;

      // emoji-mart's SearchIndex tokenizes name + each keyword and does
      // prefix matching per token. Build a comprehensive keyword set
      // from both the title and the shortcode so users can find the
      // emoji by typing any word in either, regardless of separator
      // (space, dash, underscore) or surrounding colons.
      var stripped = replacer.replace(/^:|:$/g, '');
      var keywords = new Set();
      [title, stripped].forEach(function (src) {
        if (!src) return;
        keywords.add(src.toLowerCase());
        src.toLowerCase().split(/[\s\-_]+/).filter(Boolean).forEach(function (tok) {
          return keywords.add(tok);
        });
      });
      customEmojiReplacers[id] = replacer;
      entriesByType.get(typeId).push({
        id: id,
        name: title,
        sort: sort,
        keywords: Array.from(keywords),
        skins: [{
          src: (0,_common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_7__["default"])(path) ? path : baseUrl + path
        }]
      });
    });
    customCategories.forEach(function (category) {
      var categoryId = 'flamoji_custom_' + category.id;
      var emojis = entriesByType.get(category.id).sort(function (a, b) {
        return a.sort === b.sort ? a.id.localeCompare(b.id, undefined, {
          numeric: true
        }) : a.sort - b.sort;
      });
      var icon = category.path ? {
        src: (0,_common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_7__["default"])(category.path) ? category.path : baseUrl + category.path
      } : {};
      if (!emojis.length) {
        return;
      }
      customEmojis.push({
        id: categoryId,
        name: category.title,
        icon: icon,
        emojis: emojis
      });

      // emoji-mart's `categories` prop is an explicit allow-list. If we
      // pass `custom` items but don't include their category ids here,
      // the picker silently hides those tabs.
      if (specifiedCategories.indexOf(categoryId) === -1) {
        specifiedCategories.push(categoryId);
      }
    });
    var autoHide = !!flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.auto_hide');
    var showRecents = !!flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.show_recents');
    var prepopulateRecents = !!flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.prepopulate_recents');
    var showPreview = !!flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.show_preview');
    var showSearch = !!flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.show_search');
    var showVariants = !!flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.show_variants');
    var showCategoryButtons = !!flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.show_category_buttons');

    // emoji-mart's `categories` prop is an explicit allow-list. When
    // showRecents is enabled, we still need 'frequent' on the list or
    // the Frequently Used category is silently filtered out — even
    // though maxFrequentRows > 0 would otherwise enable it. Prepend so
    // it appears first as emoji-mart expects.
    if (showRecents && specifiedCategories.indexOf('frequent') === -1) {
      specifiedCategories.unshift('frequent');
    }

    // Match the picker's emoji rendering to what posts will actually
    // display: the core flarum/emoji extension rewrites unicode to
    // Twemoji <img>; without it, posts render OS-native glyphs. The
    // `picker_set` admin setting can force one or the other; default
    // `auto` follows whatever the core extension is doing.
    var pickerSet = flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.picker_set') || 'auto';
    var hasEmojiExt = !!flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.has_emoji_extension');
    var useTwemoji = pickerSet === 'twemoji' || pickerSet === 'auto' && hasEmojiExt;

    // When prepopulate is OFF, seed emoji-mart's localStorage with an
    // empty frequently-used index so it doesn't fall back to its
    // hardcoded popular-emoji defaults. Once the user picks an emoji,
    // emoji-mart overwrites this with real data that persists normally.
    if (showRecents && !prepopulateRecents) {
      var key = 'emoji-mart.frequently';
      if (!window.localStorage.getItem(key)) {
        window.localStorage.setItem(key, JSON.stringify({}));
      }
    }
    var picker = new Picker((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      data: data,
      custom: customEmojis,
      categories: specifiedCategories,
      i18n: buildI18n(),
      // 'auto' tracks the user's OS color-scheme preference. Better than
      // hardcoding 'light' on forums with dark themes — the picker would
      // otherwise pop up bright-white against dark chrome.
      theme: 'auto',
      autoFocus: false,
      set: useTwemoji ? 'twitter' : 'native'
    }, useTwemoji ? {
      getSpritesheetURL: function getSpritesheetURL() {
        return TWEMOJI_SPRITESHEET_URL;
      }
    } : {}, {
      // Tile sizing — use emoji-mart defaults (perLine: 9,
      // emojiSize: 24, emojiButtonSize: 36). We previously bumped
      // these for a chunkier grid, but at larger sizes WebKit's
      // sub-pixel-rounded IntersectionObserver in emoji-mart's
      // NavBar reliably mis-picks the previous category when
      // clicking Travel & Places / Flags (the indicator highlights
      // the wrong icon). Defaults stay clean across all category
      // configurations.
      previewPosition: showPreview ? 'bottom' : 'none',
      searchPosition: showSearch ? 'sticky' : 'none',
      skinTonePosition: showVariants ? 'preview' : 'none',
      navPosition: showCategoryButtons ? 'top' : 'none',
      maxFrequentRows: showRecents ? parseInt(flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('flamoji.frequent_rows'), 10) || 4 : 0,
      onEmojiSelect: function onEmojiSelect(emoji) {
        // Built-in emoji: insert the native Unicode character. Custom emoji
        // (those we registered above) carry our own id; insert the
        // configured shortcode (e.g. `:partyparrot:`) which Flarum's text
        // formatter then expands at render time.
        var insert = customEmojiReplacers[emoji.id] || emoji["native"] || '';
        if (!insert) return;
        _this4.attrs.composer.editor.insertAtCursor(insert);
        if (autoHide) {
          _this4.isPickerVisible = false;
          _this4.picker.style.display = 'none';
        }
      },
      onClickOutside: function onClickOutside(event) {
        // emoji-mart fires this for any click outside its DOM, including
        // while we have it hidden. Gate on our own visibility flag, and
        // ignore the click that opened us.
        if (!_this4.isPickerVisible) return;
        if (_this4.flamojiButton && _this4.flamojiButton.contains(event.target)) return;
        _this4.isPickerVisible = false;
        _this4.picker.style.display = 'none';
      }
    }));

    // emoji-mart returns a custom element. Mount it on document.body so
    // it escapes the composer footer's `overflow: auto` clipping. We
    // position it ourselves via positionPicker() relative to the
    // composer on every open / window resize / scroll. emoji-mart
    // populates its Shadow DOM asynchronously, so the picker's first
    // measurement after appendChild is 0 — a ResizeObserver re-runs
    // positionPicker() once it has real dimensions, and on later size
    // changes (e.g. category navigation expanding rows).
    this.picker = picker;
    picker.classList.add('flamoji-picker-popup');
    // Tear down the loading placeholder right before the real picker is
    // attached so positioning math (which is shared) sees the correct
    // mount target.
    unmountPickerLoader.call(this);
    document.body.appendChild(picker);
    injectShadowStyles(picker);
    this._flamojiReposition = positionPicker.bind(this);
    window.addEventListener('resize', this._flamojiReposition);
    window.addEventListener('scroll', this._flamojiReposition, true);
    this._flamojiResizeObserver = new ResizeObserver(this._flamojiReposition);
    this._flamojiResizeObserver.observe(picker);
    this._flamojiReposition();

    // Esc closes the picker — standard popup/dialog behavior. Listener
    // is attached at document level in capture phase so we intercept the
    // key before Flarum's own Escape handler closes the entire composer
    // (which would otherwise tear down the editor while the user was
    // only trying to dismiss the picker).
    this._flamojiKeydown = function (event) {
      if (event.key !== 'Escape' || !_this4.isPickerVisible) return;
      event.stopPropagation();
      _this4.isPickerVisible = false;
      _this4.picker.style.display = 'none';
      if (_this4.flamojiButton) _this4.flamojiButton.focus();
    };
    document.addEventListener('keydown', this._flamojiKeydown, true);
    this.isPickerLoaded = true;
    this.isPickerLoading = false;
    this.isPickerVisible = true;
    m.redraw();
  }

  /**
   * Click handler for the flamoji toolbar button. On the first click,
   * lazy-loads emoji-mart + its data and builds the picker. On subsequent
   * clicks, just toggles visibility.
   */
  function onPickerButtonClick() {
    var _this5 = this;
    if (this.isPickerLoading) return;
    if (this.isPickerLoaded) {
      this.isPickerVisible = !this.isPickerVisible;
      this.picker.style.display = this.isPickerVisible ? '' : 'none';
      if (this.isPickerVisible) this._flamojiReposition();
      return;
    }
    this.isPickerLoading = true;
    m.redraw();
    scheduleLoaderMount.call(this);

    // Re-assert __webpack_public_path__ and append a cache-busting
    // query string derived from the Flarum forum.js revision hash.
    // This ensures chunk URLs bust the browser cache after upgrades.
    var baseUrl = (flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl') || '').replace(/\/+$/, '');
    __webpack_require__.p = baseUrl + '/assets/extensions/pianotell-flamoji/dist/';
    if (!onPickerButtonClick._versioned) {
      var scripts = document.querySelectorAll('script[src*="forum.js"]');
      for (var _iterator = _createForOfIteratorHelperLoose(scripts), _step; !(_step = _iterator()).done;) {
        var s = _step.value;
        var _m = s.src.match(/[?&]v=([a-f0-9]+)/);
        if (_m) {
          var _ret = function () {
            var ver = _m[1];
            var origU = __webpack_require__.u;
            __webpack_require__.u = function (id) {
              return origU(id) + '?v=' + ver;
            };
            return "break";
          }();
          if (_ret === "break") break;
        }
      }
      onPickerButtonClick._versioned = true;
    }
    var loadAndBuild = function loadAndBuild() {
      return Promise.all([__webpack_require__.e(/*! import() | emoji-mart */ "emoji-mart").then(__webpack_require__.bind(__webpack_require__, /*! emoji-mart */ "./node_modules/emoji-mart/dist/module.js")), __webpack_require__.e(/*! import() | emoji-mart-data */ "emoji-mart-data").then(__webpack_require__.t.bind(__webpack_require__, /*! @emoji-mart/data/sets/15/twitter.json */ "./node_modules/@emoji-mart/data/sets/15/twitter.json", 19)), flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().request({
        method: 'GET',
        url: flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + '/pianotell/emojis',
        params: {
          filter: {
            all: 1,
            visible: 1
          }
        }
      }), flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().request({
        method: 'GET',
        url: flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + '/pianotell/emoji-types',
        params: {
          filter: {
            visible: 1
          }
        }
      })]).then(function (_ref) {
        var emojiMartModule = _ref[0],
          dataModule = _ref[1],
          emojisResponse = _ref[2],
          typesResponse = _ref[3];
        // Guard against the editor being torn down (composer closed,
        // navigated away) while chunks were downloading. Without this
        // we'd append a picker to document.body that nothing references
        // and leak listeners on a detached editor element.
        if (!_this5.element || !_this5.element.isConnected) {
          _this5.isPickerLoading = false;
          unmountPickerLoader.call(_this5);
          return;
        }
        // Defensive: a corrupt or proxied API response could leave us
        // without the expected JSON:API shape. Coerce to an empty list
        // rather than crashing inside the forEach loop.
        var safeEmojisResponse = emojisResponse && Array.isArray(emojisResponse.data) ? emojisResponse : {
          data: []
        };
        var safeTypesResponse = typesResponse && Array.isArray(typesResponse.data) ? typesResponse : {
          data: []
        };
        buildPicker.call(_this5, emojiMartModule, dataModule, safeEmojisResponse, safeTypesResponse);
      })["catch"](function (err) {
        console.error('[pianotell-flamoji] failed to load picker:', err);
        _this5.isPickerLoading = false;
        // Inline error card with Retry button on the loader surface,
        // plus a top-of-page Alert (some users keep focus inside the
        // composer and miss page-level alerts).
        showLoaderError.call(_this5, function () {
          _this5.isPickerLoading = true;
          m.redraw();
          scheduleLoaderMount.call(_this5);
          loadAndBuild();
        });
        if ((flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().alerts)) {
          flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default()), {
            type: 'error',
            dismissible: true
          }, flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('pianotell-flamoji.forum.composer.picker_load_error'));
        }
        m.redraw();
      });
    };
    loadAndBuild();
  }
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'toolbarItems', function (items) {
    items.add('flamoji', _components_TextEditorButton__WEBPACK_IMPORTED_MODULE_5__["default"].component({
      onclick: onPickerButtonClick.bind(this),
      icon: this.isPickerLoading ? 'fas fa-spinner fa-pulse' : 'far fa-smile-wink',
      title: flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans(t + 'composer.emoji_tooltip')
    }));

    // Drop the stock flarum/emoji toolbar button if present; we replace it.
    if (items.has('emoji')) items.remove('emoji');
  });
}, -150 // initialize before flarum/emoji
);

// Forward-compat: Flarum 2.x's Export Registry discovers extension internals
// through a namespaced default export on the entry module. Other extensions
// can then `import { components } from 'ext:pianotell/flamoji/forum'`.
// Harmless under 1.x — just a re-exported object.



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze({
  components: {
    TextEditorButton: _components_TextEditorButton__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  utils: {
    urlChecker: _common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_7__["default"],
    getEmojiCategories: _common_utils_getEmojiCategories__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
}));

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "pianotell-flamoji:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"forum": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkPianotellFlamoji"] = self["webpackChunkPianotellFlamoji"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
// Side-effect: registers the initializer.


// Re-export named exports from the entry module so other extensions
// can import them via Flarum's own re-export pipeline.

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map