/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }
  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof __webpack_require__.g && __webpack_require__.g.global === __webpack_require__.g ? __webpack_require__.g : void 0,
    a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
    g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
      var i = f.URL || f.webkitURL,
        j = document.createElement("a");
      g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href);
      }, 4E4), setTimeout(function () {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
      if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
          e(i);
        });
      }
    } : function (b, d, e, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
      var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function () {
          var a = k.result;
          a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
        }, k.readAsDataURL(b);
      } else {
        var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
        g ? g.location = m : location.href = m, g = null, setTimeout(function () {
          l.revokeObjectURL(m);
        }, 4E4);
      }
    });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

/***/ }),

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDrag: () => (/* binding */ MultiDragPlugin),
/* harmony export */   Sortable: () => (/* binding */ Sortable),
/* harmony export */   Swap: () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) {
    n[e] = r[e];
  }
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) {
        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) {
      o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) {
    if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
  }
  return t;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
var version = "1.15.7";
function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches( /**HTMLElement*/el, /**String*/selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType && el.host !== el ? el.host : el.parentNode;
}
function closest( /**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }
      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = '';
  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');
      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
      i = 0,
      n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}

/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode;

    // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect();

          // Set relative to edges of padding box of container
          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
      scaleX = elMatrix && elMatrix.a,
      scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}

/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
    elSideVal = getRect(el)[elSide];

  /* jshint boss:true */
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
      visible = void 0;
    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}

/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
    i = 0,
    children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}

/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}

/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */
function index(el, selector) {
  var index = 0;
  if (!el || !el.parentNode) {
    return -1;
  }

  /* jshint boss:true */
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }
  return index;
}

/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */
function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
    offsetTop = 0,
    winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el),
        scaleX = elMatrix.a,
        scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}

/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
        _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}
function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}
function getChildContainingRectFromElement(container, options, ghostEl) {
  var rect = {};
  Array.from(container.children).forEach(function (child) {
    var _rect$left, _rect$top, _rect$right, _rect$bottom;
    if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl) return;
    var childRect = getRect(child);
    rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
    rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
    rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
    rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
var expando = 'Sortable' + new Date().getTime();
function AnimationStateManager() {
  var animationStates = [],
    animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);

        // If animating: compensate for current animation
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }
      var animating = false,
        animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
          target = state.target,
          fromRect = target.fromRect,
          toRect = getRect(target),
          prevFromRect = target.prevFromRect,
          prevToRect = target.prevToRect,
          animatingRect = state.rect,
          targetMatrix = matrix(target, true);
        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) &&
          // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }

        // if fromRect != toRect: animate
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
          scaleX = elMatrix && elMatrix.a,
          scaleY = elMatrix && elMatrix.d,
          translateX = (currentRect.left - toRect.left) / (scaleX || 1),
          translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }
    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function () {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return;
      // Fire global events if it exists in this sortable
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      }

      // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;

      // Add default options from plugin
      _extends(defaults, initialized.defaults);
    });
    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);
      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return;

      // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
    rootEl = _ref.rootEl,
    name = _ref.name,
    targetEl = _ref.targetEl,
    cloneEl = _ref.cloneEl,
    toEl = _ref.toEl,
    fromEl = _ref.fromEl,
    oldIndex = _ref.oldIndex,
    newIndex = _ref.newIndex,
    oldDraggableIndex = _ref.oldDraggableIndex,
    newDraggableIndex = _ref.newDraggableIndex,
    originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
    options = sortable.options,
    onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }
  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    originalEvent = _ref.evt,
    data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}
var dragEl,
  parentEl,
  ghostEl,
  rootEl,
  nextEl,
  lastDownEl,
  cloneEl,
  cloneHidden,
  oldIndex,
  newIndex,
  oldDraggableIndex,
  newDraggableIndex,
  activeGroup,
  putSortable,
  awaitingDragStarted = false,
  ignoreNextClick = false,
  sortables = [],
  tapEvt,
  touchEvt,
  lastDx,
  lastDy,
  tapDistanceLeft,
  tapDistanceTop,
  moved,
  lastTarget,
  lastDirection,
  pastFirstInvertThresh = false,
  isCircumstantialInvert = false,
  targetMoveDistance,
  // For positioning ghost absolutely
  ghostRelativeParent,
  ghostRelativeParentInitialScroll = [],
  // (left, top)

  _silent = false,
  savedInputChecked = [];

/** @const */
var documentExists = typeof document !== 'undefined',
  PositionGhostAbsolutely = IOS,
  CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
  // This will not pass for IE9, because IE9 DnD only works on anchors
  supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
  supportCssPointerEvents = function () {
    if (!documentExists) return;
    // false when <= IE11
    if (IE11OrLess) {
      return false;
    }
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
  }(),
  _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === 'flex') {
      return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    }
    if (elCSS.display === 'grid') {
      return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    }
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
      var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
      return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
  },
  _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
  },
  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function (sortable) {
      var threshold = sortable[expando].options.emptyInsertThreshold;
      if (!threshold || lastChild(sortable)) return;
      var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
      if (insideHorizontally && insideVertically) {
        return ret = sortable;
      }
    });
    return ret;
  },
  _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
      return function (to, from, dragEl, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
        if (value == null && (pull || sameGroup)) {
          // Default pull value
          // Default pull and put value if same group
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === 'clone') {
          return value;
        } else if (typeof value === 'function') {
          return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != 'object') {
      originalGroup = {
        name: originalGroup
      };
    }
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  },
  _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', 'none');
    }
  },
  _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', '');
    }
  };

// #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      // Create imitation event
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};

/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el; // root element
  this.options = options = _extends({}, options);

  // Export instance
  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && (!Safari || IOS),
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults);

  // Set default options
  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }
  _prepareGroup(options);

  // Bind all private methods
  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  }

  // Setup drag mode
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  }

  // Bind events
  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }
  sortables.push(this.el);

  // Restore sorting
  options.store && options.store.get && this.sort(options.store.get(this) || []);

  // Add animation state manager
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart( /** Event|TouchEvent */evt) {
    if (!evt.cancelable) return;
    var _this = this,
      el = this.el,
      options = this.options,
      preventOnFilter = options.preventOnFilter,
      type = evt.type,
      touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
      target = (touch || evt).target,
      originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
      filter = options.filter;
    _saveInputCheckedState(el);

    // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    }

    // cancel dnd if original target is content editable
    if (originalTarget.isContentEditable) {
      return;
    }

    // Safari ignores further event handling after mousedown
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    }

    // Get the index of the dragged element within its parent
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);

    // Check filter
    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.preventDefault();
        return; // cancel dnd
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }

    // Prepare `dragstart`
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart( /** Event */evt, /** Touch */touch, /** HTMLElement */target) {
    var _this = this,
      el = _this.el,
      options = _this.options,
      ownerDocument = el.ownerDocument,
      dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';
      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }

        // Bind the events: dragstart/dragend
        _this._triggerDragStart(evt, touch);

        // Drag start event
        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        });

        // Chosen item
        toggleClass(dragEl, options.chosenClass, true);
      };

      // Disable "draggable"
      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      if (options.supportPointer) {
        on(ownerDocument, 'pointerup', _this._onDrop);
        // Native D&D triggers pointercancel
        !this.nativeDraggable && on(ownerDocument, 'pointercancel', _this._onDrop);
      } else {
        on(ownerDocument, 'mouseup', _this._onDrop);
        on(ownerDocument, 'touchend', _this._onDrop);
        on(ownerDocument, 'touchcancel', _this._onDrop);
      }

      // Make dragEl draggable (must be before delay for FireFox)
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent('delayStart', this, {
        evt: evt
      });

      // Delay is impossible for native DnD in Edge or IE
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag
        if (options.supportPointer) {
          on(ownerDocument, 'pointerup', _this._disableDelayedDrag);
          on(ownerDocument, 'pointercancel', _this._disableDelayedDrag);
        } else {
          on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
          on(ownerDocument, 'touchend', _this._disableDelayedDrag);
          on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        }
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler( /** TouchEvent|PointerEvent **/e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'pointerup', this._disableDelayedDrag);
    off(ownerDocument, 'pointercancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart( /** Event */evt, /** Touch */touch) {
    touch = touch || evt.pointerType == 'touch' && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });
      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }
      var options = this.options;

      // Apply effect
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();

      // Drag start event
      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent; // store last element
        }
        /* jshint boss:true */ while (parent = getParentOrHost(parent));
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove( /**TouchEvent*/evt) {
    if (tapEvt) {
      var options = this.options,
        fallbackTolerance = options.fallbackTolerance,
        fallbackOffset = options.fallbackOffset,
        touch = evt.touches ? evt.touches[0] : evt,
        ghostMatrix = ghostEl && matrix(ghostEl, true),
        scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
        scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
        relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
        dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
        dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);

      // only set the status to dragging, when we are actually dragging
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
        rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
        options = this.options;

      // Position absolutely
      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);

      // Set transform-origin
      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart( /**Event*/evt, /**boolean*/fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent('setupClone', this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }

    // #1143: IFrame support workaround
    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);

    // Set proper drop events
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, 'drop', _this);

      // #1276 fix:
      css(dragEl, 'transform', 'translateZ(0)');
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;
    window.getSelection().removeAllRanges();
    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver( /**Event*/evt) {
    var el = this.el,
      target = evt.target,
      dragRect,
      targetRect,
      revert,
      options = this.options,
      group = options.group,
      activeSortable = Sortable.active,
      isOwner = activeGroup === group,
      canSort = options.sort,
      fromSortable = putSortable || activeSortable,
      vertical,
      _this = this,
      completedFired = false;
    if (_silent) return;
    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    }

    // Capture animation state
    function capture() {
      dragOverEvent('dragOverAnimationCapture');
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }

    // Return invocation when dragEl is inserted (or completed)
    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }

        // Animation
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }

      // Null lastTarget if it is not inside a previously swapped element
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }

      // no bubbling and not fallback
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);

        // Do not detect for empty insert if already inserted
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }

    // Call when dragEl has been inserted
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;
      if (revert) {
        parentEl = rootEl; // actualization
        capture();
        this._hideClone();
        dragOverEvent('revert');
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list

        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        }

        // if there is a last element, it is the target
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
          targetBeforeFirstSwap,
          differentLevel = dragEl.parentNode !== el,
          differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
          side1 = vertical ? 'top' : 'left',
          scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
          scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        }
        // If dragEl is already beside target: Do not insert
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
          after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }

          // Undo chrome's scroll adjustment (has no effect on other browsers)
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode; // actualization

          // must be done before animation
          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'pointercancel', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop( /**Event*/evt) {
    var el = this.el,
      options = this.options;

    // Get the index of the dragged element within its parent
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode;

    // Get again after plugin event
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);

    // Unbind events
    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, 'user-select', '');
    }
    css(dragEl, 'transform', '');
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }
        _disableDraggable(dragEl);
        dragEl.style['will-change'] = '';

        // Remove classes
        // ghostClass is added in dragStarted
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);

        // Drag stop event
        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            // Remove event
            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            });

            // drag from one list and drop into another
            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          });

          // Save sorting
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    var el = this.el;
    savedInputChecked.forEach(function (checkEl) {
      if (el.contains(checkEl)) {
        checkEl.checked = true;
      }
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent( /**Event*/evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);
        break;
      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
      el,
      children = this.el.children,
      i = 0,
      n = children.length,
      options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
      rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];
      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);
    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    }
    // Remove draggable attributes
    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return;

      // show clone at dragEl or original position
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};
function _globalDragOver( /**Event*/evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
    sortable = fromEl[expando],
    onMoveFn = sortable.options.onMove,
    retVal;
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
    targetLength = vertical ? targetRect.height : targetRect.width,
    targetS1 = vertical ? targetRect.top : targetRect.left,
    targetS2 = vertical ? targetRect.bottom : targetRect.right,
    invert = false;
  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}

/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}

/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
    i = str.length,
    sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}

// Fixed #973:
if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}

// Export utils
Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild,
  expando: expando
};

/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */
Sortable.get = function (element) {
  return element[expando];
};

/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */
Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }
  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};

/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */
Sortable.create = function (el, options) {
  return new Sortable(el, options);
};

// Export
Sortable.version = version;
var autoScrolls = [],
  scrollEl,
  scrollRootEl,
  scrolling = false,
  lastAutoScrollX,
  lastAutoScrollY,
  touchEvt$1,
  pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };

    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX,
        y = (evt.touches ? evt.touches[0] : evt).clientY,
        elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;

      // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);

        // Listener for pointer element change
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          // Detect for pointer elem change, emulating native DnD behaviour
          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
    y = (evt.touches ? evt.touches[0] : evt).clientY,
    sens = options.scrollSensitivity,
    speed = options.scrollSpeed,
    winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
    scrollCustomFn;

  // New scroll root, set scrollEl
  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent,
      rect = getRect(el),
      top = rect.top,
      bottom = rect.bottom,
      left = rect.left,
      right = rect.right,
      width = rect.width,
      height = rect.height,
      canScrollX = void 0,
      canScrollY = void 0,
      scrollWidth = el.scrollWidth,
      scrollHeight = el.scrollHeight,
      elCSS = css(el),
      scrollPosX = el.scrollLeft,
      scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */
        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    dragEl = _ref.dragEl,
    activeSortable = _ref.activeSortable,
    dispatchSortableEvent = _ref.dispatchSortableEvent,
    hideGhostForTarget = _ref.hideGhostForTarget,
    unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};
function Revert() {}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
      putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable) {
      putSortable.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }
    this.sortable.animateAll();
    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};
_extends(Revert, {
  pluginName: 'revertOnSpill'
});
function Remove() {}
Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
      putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};
_extends(Remove, {
  pluginName: 'removeOnSpill'
});
var lastSwapEl;
function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }
  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
        target = _ref2.target,
        onMove = _ref2.onMove,
        activeSortable = _ref2.activeSortable,
        changed = _ref2.changed,
        cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
        options = this.options;
      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;
        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }
        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }
      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
        putSortable = _ref3.putSortable,
        dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}
function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
    p2 = n2.parentNode,
    i1,
    i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);
  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }
  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}
var multiDragElements = [],
  multiDragClones = [],
  lastMultiDragSelect,
  // for selection with modifier key down (SHIFT)
  multiDragSortable,
  initialFolding = false,
  // Initial multi-drag fold when drag started
  folding = false,
  // Folding any other time
  dragStarted = false,
  dragEl$1,
  clonesFromRect,
  clonesHidden;
function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
    if (!sortable.options.avoidImplicitDeselect) {
      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }
    }
    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      avoidImplicitDeselect: false,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';
        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }
        dataTransfer.setData('Text', data);
      }
    };
  }
  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
        cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;
      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }
      sortable._hideClone();
      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
        rootEl = _ref3.rootEl,
        dispatchSortableEvent = _ref3.dispatchSortableEvent,
        cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;
      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
        rootEl = _ref4.rootEl,
        cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;
      var sortable = _ref5.sortable,
        cloneNowHidden = _ref5.cloneNowHidden,
        cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');
        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;
      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      });

      // Sort multi-drag elements
      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;
      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;
      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM

        sortable.captureAnimationState();
        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }
      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;
        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        }

        // Remove all auxiliary multidrag items from el, if sorting enabled
        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
        completed = _ref8.completed,
        cancel = _ref8.cancel;
      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
        rootEl = _ref9.rootEl,
        sortable = _ref9.sortable,
        dragRect = _ref9.dragRect;
      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
        isOwner = _ref10.isOwner,
        insertion = _ref10.insertion,
        activeSortable = _ref10.activeSortable,
        parentEl = _ref10.parentEl,
        putSortable = _ref10.putSortable;
      var options = this.options;
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }
        initialFolding = false;
        // If leaving sort:false root, or already folding - Fold to new location
        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute);

            // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        }

        // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }
          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;
            activeSortable._showClone(sortable);

            // Unfold animation for clones if showing from hidden
            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
        isOwner = _ref11.isOwner,
        activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });
      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
        rootEl = _ref12.rootEl,
        parentEl = _ref12.parentEl,
        sortable = _ref12.sortable,
        dispatchSortableEvent = _ref12.dispatchSortableEvent,
        oldIndex = _ref12.oldIndex,
        putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
        children = parentEl.children;

      // Multi-drag selection
      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }
        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvent: evt
          });

          // Modifier activated, select from last to dragEl
          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
              currentIndex = index(dragEl$1);
            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              (function () {
                // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                // (but previous selection existed)
                var n, i;
                if (currentIndex > lastIndex) {
                  i = lastIndex;
                  n = currentIndex;
                } else {
                  i = currentIndex;
                  n = lastIndex + 1;
                }
                var filter = options.filter;
                for (; i < n; i++) {
                  if (~multiDragElements.indexOf(children[i])) continue;
                  // Check if element is draggable
                  if (!closest(children[i], options.draggable, parentEl, false)) continue;
                  // Check if element is filtered
                  var filtered = filter && (typeof filter === 'function' ? filter.call(sortable, evt, children[i], sortable) : filter.split(',').some(function (criteria) {
                    return closest(children[i], criteria.trim(), parentEl, false);
                  }));
                  if (filtered) continue;
                  toggleClass(children[i], options.selectedClass, true);
                  multiDragElements.push(children[i]);
                  dispatchEvent({
                    sortable: sortable,
                    rootEl: rootEl,
                    name: 'select',
                    targetEl: children[i],
                    originalEvent: evt
                  });
                }
              })();
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }
          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvent: evt
          });
        }
      }

      // Multi-drag drop
      if (dragStarted && this.isMultiDrag) {
        folding = false;
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
            multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();
          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect;

                  // Prepare unfold animation
                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            }

            // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed
            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }
              multiDragIndex++;
            });

            // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.
            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });
              if (update) {
                dispatchSortableEvent('update');
                dispatchSortableEvent('sort');
              }
            }
          }

          // Must be done after capturing individual rects (scroll bar)
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }
        multiDragSortable = toSortable;
      }

      // Remove clones if necessary
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();
      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return;

      // Only deselect if selection is in this sortable
      if (multiDragSortable !== this.sortable) return;

      // Only deselect if target is not item in this sortable
      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return;

      // Only deselect if left click
      if (evt && evt.button !== 0) return;
      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvent: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
          multiDragSortable = sortable;
        }
        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
          index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;
      var oldIndicies = [],
        newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        });

        // multiDragElements will already be sorted if folding
        var newIndex;
        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }
        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();
        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }
        return key;
      }
    }
  });
}
function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}

/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */
function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}
function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);


/***/ }),

/***/ "./src/admin/components/CustomEmojiList.js":
/*!*************************************************!*\
  !*** ./src/admin/components/CustomEmojiList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomEmojiList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EditEmojiModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditEmojiModal */ "./src/admin/components/EditEmojiModal.js");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/utils/urlChecker */ "./src/common/utils/urlChecker.js");

/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */









var multiDragMounted = false;
var CustomEmojiList = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomEmojiList, _Component);
  function CustomEmojiList() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = CustomEmojiList.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.listElement = null;
    this.emojiListElement = null;
    this.emojiSortable = null;
    this.sortContext = null;
    this.drag = null;
    this.selectionBox = null;
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onScroll = this.onScroll.bind(this);
  };
  _proto.onremove = function onremove() {
    this.clearPointerListeners();
    this.destroyEmojiSortable();
  };
  _proto.view = function view() {
    var _this$drag,
      _this = this;
    var state = (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState);
    return m("div", {
      className: 'customEmoji-list' + ((_this$drag = this.drag) != null && _this$drag.active ? ' is-boxSelecting' : ''),
      oncreate: function oncreate(vnode) {
        return _this.onListContainerCreateOrUpdate(vnode);
      },
      onupdate: function onupdate(vnode) {
        return _this.onListContainerCreateOrUpdate(vnode);
      },
      onpointerdown: function onpointerdown(event) {
        return _this.onPointerDown(event);
      },
      onscroll: this.onScroll
    }, state.isLoading() && state.emojis.length === 0 ? m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default()), {
      display: "unset",
      size: "large"
    }) : '', m("ul", {
      oncreate: function oncreate(vnode) {
        return _this.onEmojiGridCreateOrUpdate(vnode);
      },
      onupdate: function onupdate(vnode) {
        return _this.onEmojiGridCreateOrUpdate(vnode);
      }
    }, state.emojis.map(function (emoji) {
      var url = (0,_common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_8__["default"])(emoji.path()) ? emoji.path() : flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + emoji.path();
      var emojiId = state.emojiId(emoji);
      var selected = state.isEmojiSelected(emoji);
      var editLabel = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.edit_button');
      return m("li", {
        key: emojiId,
        "data-emoji-id": emojiId,
        className: selected ? 'is-selected' : ''
      }, m("div", {
        className: 'customEmoji' + (selected ? ' is-selected' : ''),
        "data-emoji-id": emojiId,
        role: "button",
        "aria-pressed": selected ? 'true' : 'false',
        tabindex: "0",
        onkeydown: function onkeydown(event) {
          return _this.onEmojiKeydown(event, emoji);
        }
      }, m("button", {
        type: "button",
        className: "Button Button--icon customEmoji-dragHandle",
        title: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.drag_handle_hint'),
        "aria-label": flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.drag_handle_hint')
      }, m("i", {
        className: "fas fa-bars",
        "aria-hidden": "true"
      })), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "Button Button--icon customEmoji-editButton",
        icon: "fas fa-pencil-alt",
        title: editLabel,
        "aria-label": editLabel,
        onclick: function onclick() {
          return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_EditEmojiModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
            model: emoji
          });
        }
      }), m("div", {
        className: "customEmoji-imageWrapper"
      }, m("img", {
        src: url,
        className: "customEmoji-image",
        alt: emoji.title(),
        title: emoji.textToReplace()
      })), m("div", {
        className: "customEmoji-title"
      }, m("h4", null, emoji.title()))));
    })), this.selectionBox ? m("div", {
      className: "customEmoji-selectionBox",
      style: this.selectionBoxStyle(),
      "aria-hidden": "true"
    }) : '', state.empty() ? m("div", {
      className: "customEmoji-empty"
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.empty_text')) : '');
  };
  _proto.onEmojiKeydown = function onEmojiKeydown(event, emoji) {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }
    event.preventDefault();
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.toggleEmojiSelection(emoji);
    this.syncSortableSelection();
  };
  _proto.draggingEmojiIdsById = function draggingEmojiIdsById(emojiId) {
    var state = (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState);
    if (!emojiId || !state.currentEmojiIds().includes(emojiId)) {
      return [];
    }
    if (state.selectedCount() > 1 && state.selectedEmojiIds.has(emojiId)) {
      var selected = new Set(state.selectedEmojiIds);
      return state.currentEmojiIds().filter(function (id) {
        return selected.has(id);
      });
    }
    return [emojiId];
  };
  _proto.onListContainerCreateOrUpdate = function onListContainerCreateOrUpdate(vnode) {
    this.listElement = vnode.dom;
    this.updateEmojiSortableState();
  };
  _proto.onEmojiGridCreateOrUpdate = function onEmojiGridCreateOrUpdate(vnode) {
    this.emojiListElement = vnode.dom;
    this.ensureEmojiSortable();
    this.updateEmojiSortableState();
    this.syncSortableSelection();
  };
  _proto.ensureEmojiSortable = function ensureEmojiSortable() {
    var _this2 = this;
    if (!this.emojiListElement) {
      return;
    }
    if (this.emojiSortable) {
      return;
    }
    if (!multiDragMounted) {
      sortablejs__WEBPACK_IMPORTED_MODULE_7__["default"].mount(new sortablejs__WEBPACK_IMPORTED_MODULE_7__.MultiDrag());
      multiDragMounted = true;
    }
    this.emojiSortable = sortablejs__WEBPACK_IMPORTED_MODULE_7__["default"].create(this.emojiListElement, {
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
      onStart: function onStart(event) {
        return _this2.onEmojiSortStart(event);
      },
      onEnd: function onEnd(event) {
        return _this2.onEmojiSortEnd(event);
      }
    });
  };
  _proto.destroyEmojiSortable = function destroyEmojiSortable() {
    if (!this.emojiSortable) {
      return;
    }
    this.emojiSortable.destroy();
    this.emojiSortable = null;
    this.sortContext = null;
  };
  _proto.updateEmojiSortableState = function updateEmojiSortableState() {
    if (!this.emojiSortable) {
      return;
    }
    this.emojiSortable.option('disabled', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.isLoading());
    this.emojiSortable.option('scroll', this.listElement || true);
  };
  _proto.onEmojiSortStart = function onEmojiSortStart(event) {
    var _event$item, _event$item$dataset;
    this.syncSortableSelection();
    var state = (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState);
    var draggedId = String(((_event$item = event.item) == null ? void 0 : (_event$item$dataset = _event$item.dataset) == null ? void 0 : _event$item$dataset.emojiId) || '');
    if (!draggedId) {
      this.sortContext = null;
      return;
    }
    this.sortContext = {
      draggedId: draggedId,
      movingIds: this.draggingEmojiIdsById(draggedId),
      orderBefore: state.currentEmojiIds()
    };
  };
  _proto.onEmojiSortEnd = function onEmojiSortEnd() {
    var _this3 = this;
    var state = (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState);
    var context = this.sortContext;
    this.sortContext = null;
    if (!context || !this.emojiListElement) {
      return;
    }
    var finalOrder = this.readEmojiOrderFromDom();
    if (!finalOrder.length) {
      return;
    }
    var nextOrder = this.composeEmojiOrder(context, finalOrder);
    state.persistEmojiSortByIds(nextOrder)["catch"](function (error) {
      return _this3.showErrorAlert(error);
    });
  };
  _proto.syncSortableSelection = function syncSortableSelection() {
    var _Sortable$utils, _Sortable$utils2;
    if (!this.emojiListElement || !this.emojiSortable || typeof ((_Sortable$utils = sortablejs__WEBPACK_IMPORTED_MODULE_7__["default"].utils) == null ? void 0 : _Sortable$utils.select) !== 'function' || typeof ((_Sortable$utils2 = sortablejs__WEBPACK_IMPORTED_MODULE_7__["default"].utils) == null ? void 0 : _Sortable$utils2.deselect) !== 'function') {
      return;
    }
    var selectedIds = new Set((flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState).selectedEmojiIds);
    var items = Array.from(this.emojiListElement.querySelectorAll('li[data-emoji-id]'));
    items.forEach(function (item) {
      sortablejs__WEBPACK_IMPORTED_MODULE_7__["default"].utils.deselect(item);
    });
    items.forEach(function (item) {
      var emojiId = String(item.dataset.emojiId || '');
      var shouldSelect = selectedIds.has(emojiId);
      if (shouldSelect) {
        sortablejs__WEBPACK_IMPORTED_MODULE_7__["default"].utils.select(item);
      }
    });
  };
  _proto.readEmojiOrderFromDom = function readEmojiOrderFromDom() {
    if (!this.emojiListElement) {
      return [];
    }
    return Array.from(this.emojiListElement.querySelectorAll('li[data-emoji-id]')).map(function (item) {
      return String(item.dataset.emojiId || '');
    }).filter(Boolean);
  };
  _proto.composeEmojiOrder = function composeEmojiOrder(context, finalOrder) {
    var movingIds = context.movingIds || [];
    if (movingIds.length <= 1) {
      return finalOrder;
    }
    var movingIdSet = new Set(movingIds);
    var draggedIndex = finalOrder.indexOf(context.draggedId);
    if (draggedIndex < 0) {
      return context.orderBefore;
    }
    var previousStableId = null;
    for (var i = draggedIndex - 1; i >= 0; i--) {
      var id = finalOrder[i];
      if (!movingIdSet.has(id)) {
        previousStableId = id;
        break;
      }
    }
    var nextStableId = null;
    for (var _i = draggedIndex + 1; _i < finalOrder.length; _i++) {
      var _id = finalOrder[_i];
      if (!movingIdSet.has(_id)) {
        nextStableId = _id;
        break;
      }
    }
    var baseOrder = context.orderBefore.filter(function (id) {
      return !movingIdSet.has(id);
    });
    var insertIndex = baseOrder.length;
    if (previousStableId) {
      insertIndex = baseOrder.indexOf(previousStableId) + 1;
    } else if (nextStableId) {
      insertIndex = baseOrder.indexOf(nextStableId);
    }
    if (insertIndex < 0) {
      insertIndex = baseOrder.length;
    }
    return [].concat(baseOrder.slice(0, insertIndex), movingIds, baseOrder.slice(insertIndex));
  };
  _proto.onPointerDown = function onPointerDown(event) {
    var _this$listElement,
      _this4 = this;
    if (event.button !== 0 || this.isInteractiveTarget(event.target)) {
      return;
    }
    var card = event.target.closest('.customEmoji[data-emoji-id]');
    if (card && !((_this$listElement = this.listElement) != null && _this$listElement.contains(card))) {
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
      card: card,
      selectionBeforeDrag: new Set((flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState).selectedEmojiIds),
      longPressTimer: setTimeout(function () {
        _this4.beginBoxSelection();
        m.redraw();
      }, 350)
    };
    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
    document.addEventListener('pointercancel', this.onPointerUp);
  };
  _proto.onPointerMove = function onPointerMove(event) {
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
  };
  _proto.onPointerUp = function onPointerUp(event) {
    if (!this.drag || event.pointerId !== this.drag.pointerId) {
      return;
    }
    if (this.drag.longPressTimer) {
      clearTimeout(this.drag.longPressTimer);
    }
    if (this.drag.active) {
      this.updateBoxSelection();
    } else if (this.drag.card) {
      var emojiId = this.drag.card.dataset.emojiId;
      var emoji = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.emojis.find(function (item) {
        return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.emojiId(item) === emojiId;
      });
      if (emoji) {
        flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.toggleEmojiSelection(emoji);
        this.syncSortableSelection();
      }
    }
    this.drag = null;
    this.selectionBox = null;
    this.clearPointerListeners();
    m.redraw();
  };
  _proto.onScroll = function onScroll() {
    var _this$drag2;
    if (!((_this$drag2 = this.drag) != null && _this$drag2.active)) {
      return;
    }
    this.updateBoxSelection();
    m.redraw();
  };
  _proto.beginBoxSelection = function beginBoxSelection() {
    if (!this.drag || this.drag.active) {
      return;
    }
    if (this.drag.longPressTimer) {
      clearTimeout(this.drag.longPressTimer);
      this.drag.longPressTimer = null;
    }
    this.drag.active = true;
    this.updateBoxSelection();
  };
  _proto.updateBoxSelection = function updateBoxSelection() {
    var _this5 = this;
    if (!this.drag || !this.listElement) {
      return;
    }
    var box = this.currentSelectionBox();
    var selectedIds = new Set(this.drag.selectionBeforeDrag);
    this.listElement.querySelectorAll('.customEmoji[data-emoji-id]').forEach(function (card) {
      if (_this5.rectsIntersect(box.content, _this5.cardContentRect(card))) {
        selectedIds.add(card.dataset.emojiId);
      }
    });
    this.selectionBox = box.content;
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.replaceSelection(selectedIds);
    this.syncSortableSelection();
  };
  _proto.currentSelectionBox = function currentSelectionBox() {
    var currentContentX = this.contentX(this.drag.currentX);
    var currentContentY = this.contentY(this.drag.currentY);
    var left = Math.min(this.drag.startContentX, currentContentX);
    var top = Math.min(this.drag.startContentY, currentContentY);
    var right = Math.max(this.drag.startContentX, currentContentX);
    var bottom = Math.max(this.drag.startContentY, currentContentY);
    return {
      content: {
        left: left,
        top: top,
        right: right,
        bottom: bottom,
        width: right - left,
        height: bottom - top
      }
    };
  };
  _proto.selectionBoxStyle = function selectionBoxStyle() {
    return {
      left: this.selectionBox.left + "px",
      top: this.selectionBox.top + "px",
      width: this.selectionBox.width + "px",
      height: this.selectionBox.height + "px"
    };
  };
  _proto.rectsIntersect = function rectsIntersect(a, b) {
    return a.left <= b.right && a.right >= b.left && a.top <= b.bottom && a.bottom >= b.top;
  };
  _proto.cardContentRect = function cardContentRect(card) {
    var listRect = this.listElement.getBoundingClientRect();
    var cardRect = card.getBoundingClientRect();
    var left = cardRect.left - listRect.left + this.listElement.scrollLeft;
    var top = cardRect.top - listRect.top + this.listElement.scrollTop;
    return {
      left: left,
      top: top,
      right: left + cardRect.width,
      bottom: top + cardRect.height
    };
  };
  _proto.contentX = function contentX(clientX) {
    return clientX - this.listElement.getBoundingClientRect().left + this.listElement.scrollLeft;
  };
  _proto.contentY = function contentY(clientY) {
    return clientY - this.listElement.getBoundingClientRect().top + this.listElement.scrollTop;
  };
  _proto.dragDistance = function dragDistance() {
    return Math.max(Math.abs(this.drag.currentX - this.drag.startX), Math.abs(this.drag.currentY - this.drag.startY));
  };
  _proto.clearPointerListeners = function clearPointerListeners() {
    var _this$drag3;
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);
    document.removeEventListener('pointercancel', this.onPointerUp);
    if ((_this$drag3 = this.drag) != null && _this$drag3.longPressTimer) {
      clearTimeout(this.drag.longPressTimer);
    }
  };
  _proto.isInteractiveTarget = function isInteractiveTarget(target) {
    return !!target.closest('button, a, input, select, textarea, label');
  };
  _proto.showErrorAlert = function showErrorAlert(error) {
    var _error$response, _error$response$error, _error$response$error2;
    var fallback = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.request_failed');
    var detail = (error == null ? void 0 : (_error$response = error.response) == null ? void 0 : (_error$response$error = _error$response.errors) == null ? void 0 : (_error$response$error2 = _error$response$error[0]) == null ? void 0 : _error$response$error2.detail) || fallback;
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: 'error'
    }, detail);
  };
  return CustomEmojiList;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/admin/components/CustomEmojiSection.js":
/*!****************************************************!*\
  !*** ./src/admin/components/CustomEmojiSection.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomEmojiSection)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CustomEmojiList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomEmojiList */ "./src/admin/components/CustomEmojiList.js");
/* harmony import */ var _EditEmojiModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditEmojiModal */ "./src/admin/components/EditEmojiModal.js");
/* harmony import */ var _EditEmojiTypeModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EditEmojiTypeModal */ "./src/admin/components/EditEmojiTypeModal.js");
/* harmony import */ var _MoveEmojiSelectionModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MoveEmojiSelectionModal */ "./src/admin/components/MoveEmojiSelectionModal.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/utils/urlChecker */ "./src/common/utils/urlChecker.js");


/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */













var CustomEmojiSection = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomEmojiSection, _Component);
  function CustomEmojiSection() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = CustomEmojiSection.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.categoryListElement = null;
    this.categoryScrollElement = null;
    this.categorySortable = null;
    flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState.loadInitialData();
  };
  _proto.onremove = function onremove() {
    this.destroyCategorySortable();
  };
  _proto.selectedTypeIdForImportExport = function selectedTypeIdForImportExport() {
    return (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState).selectedTypeId;
  };
  _proto.selectedCategoryFilter = function selectedCategoryFilter() {
    var selectedTypeId = (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState).selectedTypeId;
    return {
      all: 1,
      type_id: selectedTypeId
    };
  };
  _proto.exportEmojiList = function exportEmojiList() {
    var targetTypeId = this.selectedTypeIdForImportExport();
    var selectedCategory = this.selectedCategory();
    if (!targetTypeId || !selectedCategory) {
      return;
    }
    var exportName = (selectedCategory == null ? void 0 : selectedCategory.path) || (selectedCategory == null ? void 0 : selectedCategory.title) || 'category';
    var safeExportName = String(exportName).trim().replace(/[^a-z0-9-_]+/gi, '_').replace(/^_+|_+$/g, '');
    flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().store.find('pianotell/emojis', {
      filter: this.selectedCategoryFilter()
    }).then(function (results) {
      var customEmojiList = results.map(function (emoji) {
        var _emoji$sort;
        return {
          type_id: targetTypeId,
          sort: (_emoji$sort = emoji.sort == null ? void 0 : emoji.sort()) != null ? _emoji$sort : null,
          title: emoji.title(),
          text_to_replace: emoji.textToReplace(),
          path: emoji.path()
        };
      });
      var blob = new Blob([JSON.stringify(customEmojiList)], {
        type: 'application/json;charset=utf-8'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(blob, "flamoji-" + (safeExportName || 'category') + ".json");
    });
  };
  _proto.importEmojiList = function importEmojiList() {
    var _this = this;
    if (!this.selectedTypeIdForImportExport()) {
      return;
    }
    if (!confirm(flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.import_emojis_message'))) return;
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json';
    input.onchange = function (e) {
      var _e$target$files;
      (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState).loading = true;
      var file = (_e$target$files = e.target.files) == null ? void 0 : _e$target$files[0];
      if (!file) {
        (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState).loading = false;
        m.redraw();
        return;
      }
      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = function (readerEvent) {
        var parsedRows = [];
        var targetTypeId = _this.selectedTypeIdForImportExport();
        try {
          var payload = JSON.parse(readerEvent.target.result);
          var rows = Array.isArray(payload) ? payload : Object.values(payload || {});
          parsedRows = rows.map(function (row) {
            return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row || {}, {
              type_id: targetTypeId
            });
          });
        } catch (error) {
          (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState).loading = false;
          _this.showErrorAlert(error);
          return;
        }
        flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().request({
          method: 'POST',
          url: flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().forum.attribute('apiUrl') + "/pianotell/import-emojis",
          body: {
            data: parsedRows
          }
        }).then(function () {
          _EditEmojiModal__WEBPACK_IMPORTED_MODULE_8__["default"].prototype.clearCache().then(function () {
            return window.location.reload();
          });
        })["catch"](function (error) {
          (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState).loading = false;
          _this.showErrorAlert(error);
        });
      };
    };
    input.click();
  };
  _proto.categoryItems = function categoryItems() {
    return (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState).categories;
  };
  _proto.selectedCategory = function selectedCategory() {
    var selectedTypeId = (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState).selectedTypeId;
    return this.categoryItems().find(function (category) {
      return category.id === selectedTypeId;
    }) || null;
  };
  _proto.categoryIconSrc = function categoryIconSrc(category) {
    var path = (category == null ? void 0 : category.path) || '';
    if (!path) {
      return null;
    }
    return (0,_common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_13__["default"])(path) ? path : flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().forum.attribute('baseUrl') + path;
  };
  _proto.showErrorAlert = function showErrorAlert(error) {
    var _error$response, _error$response$error, _error$response$error2;
    var fallback = flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.request_failed');
    var detail = (error == null ? void 0 : (_error$response = error.response) == null ? void 0 : (_error$response$error = _error$response.errors) == null ? void 0 : (_error$response$error2 = _error$response$error[0]) == null ? void 0 : _error$response$error2.detail) || fallback;
    flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default()), {
      type: 'error'
    }, detail);
  };
  _proto.showSuccessMessage = function showSuccessMessage() {
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default()), {
      type: 'success'
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.saved_message'));
  };
  _proto.showCacheClearWarning = function showCacheClearWarning(err) {
    // eslint-disable-next-line no-console
    console.warn('Flamoji: failed to clear formatter cache after emoji delete', err);
    flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default()), {
      type: 'warning'
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.cache_clear_warning'));
  };
  _proto.createCategory = function createCategory() {
    flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().modal.show(_EditEmojiTypeModal__WEBPACK_IMPORTED_MODULE_9__["default"]);
  };
  _proto.editCategory = function editCategory() {
    var selected = this.selectedCategory();
    if (!selected) {
      return;
    }
    flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().modal.show(_EditEmojiTypeModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      category: selected
    });
  };
  _proto.deleteCategory = function deleteCategory() {
    var _this2 = this;
    var selected = this.selectedCategory();
    if (!selected) {
      return;
    }
    if (!confirm(flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.delete_confirmation', {
      title: selected.title
    }))) {
      return;
    }
    flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState.deleteCategory(selected.id).then(function () {
      return flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState.clearFormatterCache()["catch"](function (err) {
        return _this2.showCacheClearWarning(err);
      });
    }).then(function () {
      return _this2.showSuccessMessage();
    })["catch"](function (error) {
      return _this2.showErrorAlert(error);
    });
  };
  _proto.toggleCategoryVisibility = function toggleCategoryVisibility(category, isVisible) {
    var _this3 = this;
    if (!category) {
      return;
    }
    flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState.updateCategoryVisibility(category.id, isVisible)["catch"](function (error) {
      return _this3.showErrorAlert(error);
    });
  };
  _proto.deleteSelectedEmojis = function deleteSelectedEmojis() {
    var _this4 = this;
    var state = (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState);
    var count = state.selectedCount();
    if (!count) {
      return;
    }
    if (!confirm(flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.delete_confirmation', {
      count: count
    }))) {
      return;
    }
    state.bulkDeleteSelected().then(function () {
      return state.clearFormatterCache()["catch"](function (err) {
        return _this4.showCacheClearWarning(err);
      });
    }).then(function () {
      return _this4.showSuccessMessage();
    })["catch"](function (error) {
      return _this4.showErrorAlert(error);
    });
  };
  _proto.moveSelectedEmojis = function moveSelectedEmojis() {
    if (!flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState.selectedCount()) {
      return;
    }
    flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().modal.show(_MoveEmojiSelectionModal__WEBPACK_IMPORTED_MODULE_10__["default"]);
  };
  _proto.onCategoryListCreateOrUpdate = function onCategoryListCreateOrUpdate(vnode) {
    this.categoryListElement = vnode.dom;
    this.categoryScrollElement = vnode.dom.closest('.CustomEmojiWorkspace-categoryDirectory') || vnode.dom;
    this.ensureCategorySortable();
    this.updateCategorySortableState();
  };
  _proto.ensureCategorySortable = function ensureCategorySortable() {
    var _this5 = this;
    if (!this.categoryListElement || this.categorySortable) {
      return;
    }
    this.categorySortable = sortablejs__WEBPACK_IMPORTED_MODULE_11__["default"].create(this.categoryListElement, {
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
      onEnd: function onEnd() {
        return _this5.onCategorySortEnd();
      }
    });
  };
  _proto.updateCategorySortableState = function updateCategorySortableState() {
    if (!this.categorySortable) {
      return;
    }
    this.categorySortable.option('disabled', (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState).categoriesLoading);
    this.categorySortable.option('scroll', this.categoryScrollElement || true);
  };
  _proto.destroyCategorySortable = function destroyCategorySortable() {
    if (!this.categorySortable) {
      return;
    }
    this.categorySortable.destroy();
    this.categorySortable = null;
    this.categoryScrollElement = null;
  };
  _proto.onCategorySortEnd = function onCategorySortEnd() {
    var _this6 = this;
    if (!this.categoryListElement) {
      return;
    }
    var orderedIds = Array.from(this.categoryListElement.querySelectorAll('li[data-category-id]')).map(function (item) {
      return String(item.dataset.categoryId || '');
    }).filter(Boolean);
    flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState.persistCategorySortByIds(orderedIds)["catch"](function (error) {
      return _this6.showErrorAlert(error);
    });
  };
  _proto.view = function view() {
    var _this7 = this;
    var state = (flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().customEmojiListState);
    var selectedCategory = this.selectedCategory();
    var categoryLocked = !selectedCategory || state.categoriesLoading;
    return m("div", {
      className: "ExtensionPage-customFlamoji"
    }, m("div", {
      className: "ExtensionPage-customFlamoji-header"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "ExtensionTitle"
    }, m("div", {
      className: "ExtensionName"
    }, m("h2", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.heading_title')))))), m("div", {
      className: "container"
    }, m("div", {
      className: "CustomEmojiWorkspace"
    }, m("div", {
      className: "CustomEmojiWorkspace-categories"
    }, m("div", {
      className: "CustomEmojiWorkspace-title"
    }, m("h3", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.heading'))), m("div", {
      className: "CustomEmojiWorkspace-categoryActions"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--small",
      icon: "fas fa-plus",
      onclick: function onclick() {
        return _this7.createCategory();
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.add_button')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--small",
      icon: "fas fa-pencil-alt",
      disabled: categoryLocked,
      onclick: function onclick() {
        return _this7.editCategory();
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.edit_button')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--small",
      icon: "fas fa-trash",
      disabled: categoryLocked,
      onclick: function onclick() {
        return _this7.deleteCategory();
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.delete_button'))), m("div", {
      className: "CustomEmojiWorkspace-categoryIO"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--small",
      icon: "fas fa-file-import",
      disabled: !selectedCategory,
      onclick: function onclick() {
        return _this7.importEmojiList();
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.import_json_button')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--small",
      icon: "fas fa-file-export",
      disabled: !selectedCategory,
      onclick: function onclick() {
        return _this7.exportEmojiList();
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.export_json_button'))), m("div", {
      className: "CustomEmojiWorkspace-categoryDirectory"
    }, m("ul", {
      className: "CustomEmojiWorkspace-categoryList",
      oncreate: function oncreate(vnode) {
        return _this7.onCategoryListCreateOrUpdate(vnode);
      },
      onupdate: function onupdate(vnode) {
        return _this7.onCategoryListCreateOrUpdate(vnode);
      }
    }, this.categoryItems().map(function (category) {
      return m("li", {
        key: category.id,
        "data-category-id": category.id,
        className: "CustomEmojiWorkspace-categoryListItem"
      }, m("button", {
        type: "button",
        className: 'CustomEmojiWorkspace-categoryItem' + (state.selectedTypeId === category.id ? ' is-active' : ''),
        onclick: function onclick() {
          return state.setSelectedType(category.id);
        }
      }, m("span", {
        className: "CustomEmojiWorkspace-categoryDragHandle",
        title: flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.drag_handle_hint'),
        "aria-label": flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.drag_handle_hint')
      }, m("i", {
        className: "fas fa-bars",
        "aria-hidden": "true"
      })), _this7.categoryIconSrc(category) ? m("img", {
        className: "CustomEmojiWorkspace-categoryIcon",
        src: _this7.categoryIconSrc(category),
        alt: "",
        "aria-hidden": "true"
      }) : '', m("span", {
        className: "CustomEmojiWorkspace-categoryName",
        title: category.title
      }, category.title)), m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_12___default()), {
        className: "CustomEmojiWorkspace-categoryVisibilitySwitch",
        state: !category.isHidden,
        disabled: state.categoriesLoading,
        onchange: function onchange(isVisible) {
          return _this7.toggleCategoryVisibility(category, isVisible);
        }
      }, m("span", {
        className: "visually-hidden"
      }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.category.visibility_toggle_label', {
        title: category.title
      }))));
    })))), m("div", {
      className: "CustomEmojiWorkspace-list"
    }, m("div", {
      className: "CustomEmojiWorkspace-listHeader"
    }, m("div", {
      className: "CustomEmojiWorkspace-title"
    }, m("h3", {
      title: (selectedCategory == null ? void 0 : selectedCategory.title) || ''
    }, (selectedCategory == null ? void 0 : selectedCategory.title) || '')), m("div", {
      className: "CustomEmojiWorkspace-listActions"
    }, m("div", {
      className: "CustomEmojiWorkspace-listBulkActions"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--small",
      icon: state.allSelected() ? 'fas fa-times' : 'fas fa-check-square',
      disabled: !state.hasEmojis() || state.isLoading(),
      onclick: function onclick() {
        return state.toggleAllSelection();
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans(state.allSelected() ? 'pianotell-flamoji.admin.custom_emojis_section.emoji_list.clear_selection_button' : 'pianotell-flamoji.admin.custom_emojis_section.emoji_list.select_all_button')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--small",
      icon: "fas fa-exchange-alt",
      disabled: !state.selectedCount() || state.isLoading(),
      onclick: function onclick() {
        return _this7.moveSelectedEmojis();
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.move_button')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--small Button--danger",
      icon: "fas fa-trash",
      disabled: !state.selectedCount() || state.isLoading(),
      onclick: function onclick() {
        return _this7.deleteSelectedEmojis();
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.delete_button'))), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--primary Button--small",
      icon: "fas fa-plus",
      disabled: state.isLoading() || !selectedCategory,
      onclick: function onclick() {
        return flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().modal.show(_EditEmojiModal__WEBPACK_IMPORTED_MODULE_8__["default"]);
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.modal_title')))), m(_CustomEmojiList__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
  };
  return CustomEmojiSection;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_6___default()));


/***/ }),

/***/ "./src/admin/components/EditEmojiModal.js":
/*!************************************************!*\
  !*** ./src/admin/components/EditEmojiModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditEmojiModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/utils/urlChecker */ "./src/common/utils/urlChecker.js");

/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */










/**
 * The `EditEmojiModal` component shows a modal dialog which allows the user
 * to add or edit a emoji.
 */
var EditEmojiModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditEmojiModal, _Modal);
  function EditEmojiModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = EditEmojiModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.emoji = this.attrs.model || flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().store.createRecord('emojis');
    this.emojiTitle = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.emoji.title() || '');
    this.textToReplace = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.emoji.textToReplace() || '');
    this.path = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.emoji.path() || '');
    this.typeId = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.resolveInitialTypeId());
  };
  _proto.className = function className() {
    return 'EditEmojiModal Modal--small';
  };
  _proto.title = function title() {
    var url = '';
    if (this.path()) url = (0,_common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_8__["default"])(this.path()) ? this.path() : flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + this.path();
    return this.emojiTitle() ? this.path() ? [m('img', {
      className: 'EditEmojiModal-titleEmoji',
      src: url,
      alt: this.emojiTitle()
    }), this.emojiTitle()] : this.emojiTitle() : flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.modal_title');
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };
  _proto.fields = function fields() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    var categoryOptions = this.categoryOptions();
    items.add('title', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.emoji_title_label')), m("input", {
      className: "FormControl",
      bidi: this.emojiTitle
    })), 50);
    items.add('textToReplace', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.text_to_replace_label')), m("input", {
      className: "FormControl",
      bidi: this.textToReplace
    })), 40);
    items.add('path', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.path_or_url_label')), m("input", {
      className: "FormControl",
      placeholder: "/assets/emojis/batman.png",
      bidi: this.path
    })), 30);
    items.add('typeId', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.category_label')), m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default()), {
      value: this.typeId(),
      options: categoryOptions,
      title: categoryOptions[this.typeId()] || '',
      wrapperAttrs: {
        className: 'Flamoji-categorySelect'
      },
      onchange: this.typeId
    })), 20);
    items.add('submit', m("div", {
      className: "Form-group"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
      type: 'submit',
      className: 'Button Button--primary EditEmojiModal-save',
      loading: this.loading,
      disabled: !this.typeId()
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.submit_button')), this.emoji.exists ? m("button", {
      type: "button",
      className: "Button EditEmojiModal-delete",
      onclick: this["delete"].bind(this)
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.delete_emoji_button')) : ''), -10);
    return items;
  };
  _proto.submitData = function submitData() {
    return {
      typeId: this.typeId(),
      title: this.emojiTitle(),
      textToReplace: this.textToReplace(),
      path: this.path()
    };
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();
    this.loading = true;
    this.emoji.save(this.submitData()).then(function () {
      return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.loadResults();
    }).then(function () {
      // Cache clearing is best-effort: the formatter cache is keyed
      // and will be regenerated on next request, so a failure here
      // (e.g. transient permission issue on storage/cache) shouldn't
      // block the user. Surface it as a non-fatal warning.
      return _this.clearCache()["catch"](function (err) {
        return _this.showCacheClearWarning(err);
      });
    }).then(function () {
      _this.hide();
      _this.showSuccessMessage();
    })["catch"](this.onerror.bind(this)).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };
  _proto["delete"] = function _delete() {
    var _this2 = this;
    if (!confirm(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.delete_emoji_confirmation'))) {
      return;
    }
    this.loading = true;
    this.emoji["delete"]().then(function () {
      return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.loadResults().then(function () {
        return _this2.clearCache();
      })["catch"](function (err) {
        return _this2.showCacheClearWarning(err);
      });
    }).then(function () {
      _this2.hide();
      _this2.showSuccessMessage();
    })["catch"](this.onerror.bind(this)).then(function () {
      _this2.loading = false;
      m.redraw();
    });
  };
  _proto.showSuccessMessage = function showSuccessMessage() {
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: 'success'
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.saved_message'));
  };
  _proto.showCacheClearWarning = function showCacheClearWarning(err) {
    // eslint-disable-next-line no-console
    console.warn('Flamoji: failed to clear formatter cache after emoji change', err);
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: 'warning'
    }, 'Saved, but the formatter cache could not be cleared automatically. New emoji may take a moment to render in existing posts.');
  }

  // Seems like we need to clear cache
  // to tell TextFormatter that some changes
  // have been made on the configurator.
  ;
  _proto.clearCache = function clearCache() {
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'DELETE',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/cache'
    });
  };
  _proto.resolveInitialTypeId = function resolveInitialTypeId() {
    var _app$customEmojiListS, _app$customEmojiListS2, _app$customEmojiListS3;
    var emojiTypeId = this.emoji.typeId();
    if (emojiTypeId !== undefined && emojiTypeId !== null) {
      return String(emojiTypeId);
    }
    var selectedTypeId = (_app$customEmojiListS = (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState)) == null ? void 0 : _app$customEmojiListS.selectedTypeId;
    if (selectedTypeId) {
      return selectedTypeId;
    }
    return ((_app$customEmojiListS2 = (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState)) == null ? void 0 : (_app$customEmojiListS3 = _app$customEmojiListS2.categories[0]) == null ? void 0 : _app$customEmojiListS3.id) || '';
  };
  _proto.categoryOptions = function categoryOptions() {
    var _app$customEmojiListS4;
    var options = {};
    (_app$customEmojiListS4 = (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState)) == null ? void 0 : _app$customEmojiListS4.categories.forEach(function (category) {
      options[category.id] = category.title;
    });
    return options;
  };
  return EditEmojiModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/admin/components/EditEmojiTypeModal.js":
/*!****************************************************!*\
  !*** ./src/admin/components/EditEmojiTypeModal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditEmojiTypeModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils/urlChecker */ "./src/common/utils/urlChecker.js");

/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */








var EditEmojiTypeModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditEmojiTypeModal, _Modal);
  function EditEmojiTypeModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = EditEmojiTypeModal.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this$category, _this$category2;
    _Modal.prototype.oninit.call(this, vnode);
    this.category = this.attrs.category || null;
    this.categoryTitle = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()(((_this$category = this.category) == null ? void 0 : _this$category.title) || '');
    this.categoryPath = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()(((_this$category2 = this.category) == null ? void 0 : _this$category2.path) || '');
  };
  _proto.className = function className() {
    return 'EditEmojiTypeModal Modal--small';
  };
  _proto.title = function title() {
    var defaultTitle = this.category ? flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.edit_modal_title') : flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.add_modal_title');
    var titleText = this.categoryTitle().trim() || defaultTitle;
    var titlePrefix = this.titlePrefix(titleText);
    var title = m("span", {
      className: "EditEmojiTypeModal-titleText",
      title: typeof titleText === 'string' ? titleText : undefined
    }, titleText);
    if (titlePrefix) {
      return [titlePrefix, title];
    }
    return title;
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };
  _proto.fields = function fields() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    items.add('title', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.title_label')), m("input", {
      className: "FormControl",
      bidi: this.categoryTitle
    })), 20);
    items.add('path', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.path_or_url_label')), m("input", {
      className: "FormControl",
      placeholder: "/assets/emojis/category.png",
      bidi: this.categoryPath
    })), 10);
    items.add('submit', m("div", {
      className: "Form-group"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
      type: 'submit',
      className: 'Button Button--primary',
      loading: this.loading
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.submit_button'))), -10);
    return items;
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();
    this.loading = true;
    var state = (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState);
    var title = this.categoryTitle().trim();
    var path = this.categoryPath().trim();
    var request = this.category ? state.updateCategory(this.category.id, title, path) : state.createCategory(title, path);
    request.then(function () {
      _this.hide();
      _this.showSuccessMessage();
    })["catch"](this.onerror.bind(this)).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };
  _proto.showSuccessMessage = function showSuccessMessage() {
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: 'success'
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_category.saved_message'));
  };
  _proto.titlePrefix = function titlePrefix(titleText) {
    var path = this.categoryPath().trim();
    if (!path) {
      return null;
    }
    if (this.isFaIconPath(path)) {
      return m("i", {
        className: "EditEmojiTypeModal-titleIcon " + path,
        "aria-hidden": "true"
      });
    }
    var url = (0,_common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_7__["default"])(path) ? path : flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + path;
    return m("img", {
      className: "EditEmojiTypeModal-titleImage",
      src: url,
      alt: titleText
    });
  };
  _proto.isFaIconPath = function isFaIconPath(path) {
    var tokens = path.trim().split(/\s+/).filter(Boolean);
    if (tokens.length < 2) {
      return false;
    }
    var hasStyleToken = tokens.some(function (token) {
      return token === 'fa' || /^fa[a-z]+$/i.test(token) || /^fa-[a-z-]+$/i.test(token);
    });
    var hasIconToken = tokens.some(function (token) {
      return /^fa-[a-z0-9-]+$/i.test(token);
    });
    return hasStyleToken && hasIconToken;
  };
  return EditEmojiTypeModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/admin/components/MoveEmojiSelectionModal.js":
/*!*********************************************************!*\
  !*** ./src/admin/components/MoveEmojiSelectionModal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoveEmojiSelectionModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__);

/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */







var MoveEmojiSelectionModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MoveEmojiSelectionModal, _Modal);
  function MoveEmojiSelectionModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = MoveEmojiSelectionModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.typeId = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()(this.initialTypeId());
  };
  _proto.className = function className() {
    return 'MoveEmojiSelectionModal Modal--small';
  };
  _proto.title = function title() {
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.move_modal_title');
  };
  _proto.content = function content() {
    var categoryOptions = this.categoryOptions();
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.category_label')), m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default()), {
      value: this.typeId(),
      options: categoryOptions,
      title: categoryOptions[this.typeId()] || '',
      wrapperAttrs: {
        className: 'Flamoji-categorySelect'
      },
      onchange: this.typeId
    })), m("div", {
      className: "Form-group"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
      type: 'submit',
      className: 'Button Button--primary',
      loading: this.loading,
      disabled: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.selectedCount() === 0
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.move_submit_button')))));
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();
    this.loading = true;
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.bulkMoveSelected(this.typeId()).then(function () {
      return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState.clearFormatterCache()["catch"](function (err) {
        return _this.showCacheClearWarning(err);
      });
    }).then(function () {
      _this.hide();
      _this.showSuccessMessage();
    })["catch"](this.onerror.bind(this)).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };
  _proto.showSuccessMessage = function showSuccessMessage() {
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: 'success'
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.edit_emoji.saved_message'));
  };
  _proto.showCacheClearWarning = function showCacheClearWarning(err) {
    // eslint-disable-next-line no-console
    console.warn('Flamoji: failed to clear formatter cache after bulk emoji move', err);
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: 'warning'
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('pianotell-flamoji.admin.custom_emojis_section.emoji_list.cache_clear_warning'));
  };
  _proto.initialTypeId = function initialTypeId() {
    var _this$categoryItems$;
    var selectedTypeId = (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState).selectedTypeId;
    var firstDifferentCategory = this.categoryItems().find(function (category) {
      return category.id !== selectedTypeId;
    });
    return (firstDifferentCategory == null ? void 0 : firstDifferentCategory.id) || ((_this$categoryItems$ = this.categoryItems()[0]) == null ? void 0 : _this$categoryItems$.id) || '';
  };
  _proto.categoryOptions = function categoryOptions() {
    return this.categoryItems().reduce(function (options, category) {
      options[category.id] = category.title;
      return options;
    }, {});
  };
  _proto.categoryItems = function categoryItems() {
    return (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().customEmojiListState).categories;
  };
  return MoveEmojiSelectionModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/AdminPage */ "flarum/admin/components/AdminPage");
/* harmony import */ var flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _states_CustomEmojiListState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/CustomEmojiListState */ "./src/admin/states/CustomEmojiListState.js");
/* harmony import */ var _components_CustomEmojiSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CustomEmojiSection */ "./src/admin/components/CustomEmojiSection.js");
/* harmony import */ var _common_models_Emoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/models/Emoji */ "./src/common/models/Emoji.js");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils_getEmojiCategories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/utils/getEmojiCategories */ "./src/common/utils/getEmojiCategories.js");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_CustomEmojiList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/CustomEmojiList */ "./src/admin/components/CustomEmojiList.js");
/* harmony import */ var _components_EditEmojiModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/EditEmojiModal */ "./src/admin/components/EditEmojiModal.js");
/* harmony import */ var _components_EditEmojiTypeModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/EditEmojiTypeModal */ "./src/admin/components/EditEmojiTypeModal.js");
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */












flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('pianotell-flamoji', function (app) {
  app.store.models.emojis = _common_models_Emoji__WEBPACK_IMPORTED_MODULE_5__["default"];
  app.customEmojiListState = new _states_CustomEmojiListState__WEBPACK_IMPORTED_MODULE_3__["default"]();
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'oninit', function () {
    if (this.extension.id != 'pianotell-flamoji') return;
    this.specifiedCategories = JSON.parse(app.data.settings['pianotell-flamoji.specify_categories'] || '[]');
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'sections', function (items) {
    if (this.extension.id != 'pianotell-flamoji') return;
    items.has('permissions') ? items.remove('permissions') : '';
    items.add('customFlamoji', m(_components_CustomEmojiSection__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'dirty', function (original) {
    var _this = this;
    if (!this.extension || this.extension.id != 'pianotell-flamoji') return original();
    var dirty = {};
    var specifiedCategories = JSON.stringify(this.specifiedCategories);
    if (specifiedCategories !== app.data.settings['pianotell-flamoji.specify_categories']) {
      dirty['pianotell-flamoji.specify_categories'] = specifiedCategories;
    }
    Object.keys(this.settings).forEach(function (key) {
      var value = _this.settings[key]();
      if (value !== app.data.settings[key]) {
        dirty[key] = value;
      }
    });
    return dirty;
  });
  app.extensionData["for"]('pianotell-flamoji').registerSetting(function () {
    var _this2 = this;
    return m("div", {
      className: "Flamoji--settingsContainer"
    }, m("div", {
      className: "Flamoji--generalUISettingsContainer"
    }, m("h3", null, app.translator.trans('pianotell-flamoji.admin.settings.general_ui_settings_heading')), m("hr", null), m("div", {
      className: "Flamoji--generalUISetting"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_10___default()), {
      state: !!this.setting(['pianotell-flamoji.auto_hide'])() && this.setting(['pianotell-flamoji.auto_hide'])() !== '0',
      onchange: this.settings['pianotell-flamoji.auto_hide']
    }, app.translator.trans('pianotell-flamoji.admin.settings.auto_hide_label'))), m("div", {
      className: "helpText"
    }, app.translator.trans('pianotell-flamoji.admin.settings.auto_hide_text'))), m("div", {
      className: "Flamoji--generalUISetting"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_10___default()), {
      state: !!this.setting(['pianotell-flamoji.show_preview'])() && this.setting(['pianotell-flamoji.show_preview'])() !== '0',
      onchange: this.settings['pianotell-flamoji.show_preview']
    }, app.translator.trans('pianotell-flamoji.admin.settings.show_preview_label'))), m("div", {
      className: "helpText"
    }, app.translator.trans('pianotell-flamoji.admin.settings.show_preview_text'))), m("div", {
      className: "Flamoji--generalUISetting"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_10___default()), {
      state: !!this.setting(['pianotell-flamoji.show_search'])() && this.setting(['pianotell-flamoji.show_search'])() !== '0',
      onchange: this.settings['pianotell-flamoji.show_search']
    }, app.translator.trans('pianotell-flamoji.admin.settings.show_search_label'))), m("div", {
      className: "helpText"
    }, app.translator.trans('pianotell-flamoji.admin.settings.show_search_text')))), m("div", {
      className: "Flamoji--emojiSettingsContainer"
    }, m("h3", null, app.translator.trans('pianotell-flamoji.admin.settings.emoji_settings_heading')), m("hr", null), m("div", {
      className: "Flamoji--emojiSetting"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_10___default()), {
      state: !!this.setting(['pianotell-flamoji.show_variants'])() && this.setting(['pianotell-flamoji.show_variants'])() !== '0',
      onchange: this.settings['pianotell-flamoji.show_variants']
    }, app.translator.trans('pianotell-flamoji.admin.settings.show_variants_label'))), m("div", {
      className: "helpText"
    }, app.translator.trans('pianotell-flamoji.admin.settings.show_variants_text'))), m("div", {
      className: "Flamoji--emojiSetting"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('pianotell-flamoji.admin.settings.picker_set_label')), m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8___default()), {
      value: this.setting(['pianotell-flamoji.picker_set'])() || 'auto',
      options: {
        auto: app.translator.trans('pianotell-flamoji.admin.settings.picker_set_auto'),
        twemoji: app.translator.trans('pianotell-flamoji.admin.settings.picker_set_twemoji'),
        "native": app.translator.trans('pianotell-flamoji.admin.settings.picker_set_native')
      },
      buttonClassName: "Button",
      onchange: this.settings['pianotell-flamoji.picker_set']
    })), m("div", {
      className: "helpText"
    }, app.translator.trans('pianotell-flamoji.admin.settings.picker_set_text')))), m("div", {
      className: "Flamoji--categorySettingsContainer"
    }, m("h3", null, app.translator.trans('pianotell-flamoji.admin.settings.category_settings_heading')), m("hr", null), m("div", {
      className: "Flamoji--categorySetting"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_10___default()), {
      state: !!this.setting(['pianotell-flamoji.show_category_buttons'])() && this.setting(['pianotell-flamoji.show_category_buttons'])() !== '0',
      onchange: this.settings['pianotell-flamoji.show_category_buttons']
    }, app.translator.trans('pianotell-flamoji.admin.settings.show_category_buttons_label'))), m("div", {
      className: "helpText"
    }, app.translator.trans('pianotell-flamoji.admin.settings.show_category_buttons_text'))), m("div", {
      className: "Flamoji--categorySetting"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_10___default()), {
      state: !!this.setting(['pianotell-flamoji.show_recents'])() && this.setting(['pianotell-flamoji.show_recents'])() !== '0',
      onchange: this.settings['pianotell-flamoji.show_recents']
    }, app.translator.trans('pianotell-flamoji.admin.settings.show_recents_label'))), m("div", {
      className: "helpText"
    }, app.translator.trans('pianotell-flamoji.admin.settings.show_recents_text'))), !!this.setting(['pianotell-flamoji.show_recents'])() && this.setting(['pianotell-flamoji.show_recents'])() !== '0' && m("div", {
      className: "Flamoji--categorySetting prepopulateRecentsSetting"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_10___default()), {
      state: !!this.setting(['pianotell-flamoji.prepopulate_recents'])() && this.setting(['pianotell-flamoji.prepopulate_recents'])() !== '0',
      onchange: this.settings['pianotell-flamoji.prepopulate_recents']
    }, app.translator.trans('pianotell-flamoji.admin.settings.prepopulate_recents_label'))), m("div", {
      className: "helpText"
    }, app.translator.trans('pianotell-flamoji.admin.settings.prepopulate_recents_text'))), !!this.setting(['pianotell-flamoji.show_recents'])() && this.setting(['pianotell-flamoji.show_recents'])() !== '0' && m("div", {
      className: "Flamoji--categorySetting recentsCountSetting"
    }, m("div", {
      className: "Form-group recentsCountGroup"
    }, m("label", null, app.translator.trans('pianotell-flamoji.admin.settings.frequent_rows_label')), m("input", {
      className: "FormControl",
      type: "number",
      min: "1",
      max: "10",
      bidi: this.setting('pianotell-flamoji.frequent_rows')
    })), m("div", {
      className: "helpText"
    }, app.translator.trans('pianotell-flamoji.admin.settings.frequent_rows_text'))), m("div", {
      className: "Flamoji--categorySetting specifyCategoriesSetting"
    }, m("div", {
      className: "Form-group specifyCategoriesGroup"
    }, m("label", null, app.translator.trans('pianotell-flamoji.admin.settings.specify_categories_label')), m("div", {
      className: "helpText"
    }, app.translator.trans('pianotell-flamoji.admin.settings.specify_categories_text')), m("div", {
      className: "options"
    }, (0,_common_utils_getEmojiCategories__WEBPACK_IMPORTED_MODULE_7__["default"])().map(function (category) {
      return m("div", {
        className: "cat-checkbox"
      }, m("input", {
        type: "checkbox",
        name: "specifyCats[]",
        checked: _this2.specifiedCategories.indexOf(category) > -1,
        onchange: function onchange(change) {
          if (change.target.checked) {
            _this2.specifiedCategories.push(category);
          } else {
            var index = _this2.specifiedCategories.indexOf(category);
            if (index > -1) {
              _this2.specifiedCategories.splice(index, 1);
            }
          }
        }
      }), m("label", {
        "for": category
      }, app.translator.trans('pianotell-flamoji.admin.settings.emoji_categories.' + category)));
    }))))));
  });
});

// Forward-compat: see js/src/forum/index.js for the same pattern. Exposes
// our admin extension surface so 2.x's Export Registry (and any future
// extension that wants to extend our admin UI) can reach it.






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze({
  components: {
    CustomEmojiList: _components_CustomEmojiList__WEBPACK_IMPORTED_MODULE_11__["default"],
    CustomEmojiSection: _components_CustomEmojiSection__WEBPACK_IMPORTED_MODULE_4__["default"],
    EditEmojiModal: _components_EditEmojiModal__WEBPACK_IMPORTED_MODULE_12__["default"],
    EditEmojiTypeModal: _components_EditEmojiTypeModal__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  states: {
    CustomEmojiListState: _states_CustomEmojiListState__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  models: {
    Emoji: _common_models_Emoji__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
}));

/***/ }),

/***/ "./src/admin/states/CustomEmojiListState.js":
/*!**************************************************!*\
  !*** ./src/admin/states/CustomEmojiListState.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomEmojiListState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);

/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */


var CustomEmojiListState = /*#__PURE__*/function () {
  function CustomEmojiListState() {
    this.emojis = [];
    this.categories = [];
    this.selectedTypeId = null;
    this.selectedEmojiIds = new Set();
    this.loading = false;
    this.categoriesLoading = false;
  }
  var _proto = CustomEmojiListState.prototype;
  _proto.loadInitialData = function loadInitialData() {
    var _this = this;
    return this.loadCategories().then(function () {
      return _this.loadResults();
    });
  };
  _proto.loadCategories = function loadCategories() {
    var _this2 = this;
    this.categoriesLoading = true;
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'GET',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/pianotell/emoji-types"
    }).then(function (payload) {
      var rows = Array.isArray(payload == null ? void 0 : payload.data) ? payload.data : [];
      _this2.categories = rows.map(function (row) {
        return _this2.normalizeCategory(row);
      }).filter(Boolean).sort(function (a, b) {
        return _this2.sortByPosition(a.sort, b.sort, a.id, b.id);
      });
      if (!_this2.selectedTypeId || !_this2.categories.some(function (category) {
        return category.id === _this2.selectedTypeId;
      })) {
        var _this2$categories$;
        _this2.selectedTypeId = ((_this2$categories$ = _this2.categories[0]) == null ? void 0 : _this2$categories$.id) || null;
      }
    })["finally"](function () {
      _this2.categoriesLoading = false;
      m.redraw();
    });
  };
  _proto.normalizeCategory = function normalizeCategory(row) {
    var _row$attributes, _row$attributes2, _row$attributes3, _row$attributes4;
    if (!row) {
      return null;
    }
    return {
      id: String(row.id),
      sort: this.normalizeSortValue((_row$attributes = row.attributes) == null ? void 0 : _row$attributes.sort),
      title: ((_row$attributes2 = row.attributes) == null ? void 0 : _row$attributes2.title) || '',
      path: ((_row$attributes3 = row.attributes) == null ? void 0 : _row$attributes3.path) || '',
      isHidden: !!((_row$attributes4 = row.attributes) != null && _row$attributes4.isHidden)
    };
  };
  _proto.setSelectedType = function setSelectedType(typeId) {
    var nextTypeId = typeId ? String(typeId) : null;
    if (this.selectedTypeId === nextTypeId) {
      return Promise.resolve();
    }
    this.selectedTypeId = nextTypeId;
    this.clearSelection();
    return this.loadResults();
  };
  _proto.loadResults = function loadResults() {
    var _this3 = this;
    this.loading = true;
    if (!this.selectedTypeId) {
      this.emojis = [];
      this.clearSelection();
      this.loading = false;
      m.redraw();
      return Promise.resolve([]);
    }
    var filter = {
      all: 1,
      type_id: this.selectedTypeId
    };
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().store.find('pianotell/emojis', {
      filter: filter
    }).then(this.parseResults.bind(this))["catch"](function (error) {
      _this3.loading = false;
      m.redraw();
      throw error;
    });
  };
  _proto.parseResults = function parseResults(results) {
    var _this4 = this;
    this.emojis = [].concat(results).sort(function (a, b) {
      return _this4.sortByPosition(_this4.normalizeSortValue(a.sort == null ? void 0 : a.sort()), _this4.normalizeSortValue(b.sort == null ? void 0 : b.sort()), _this4.emojiId(a), _this4.emojiId(b));
    });
    this.pruneSelection();
    this.loading = false;
    m.redraw();
    return results;
  };
  _proto.createCategory = function createCategory(title, path) {
    var _this5 = this;
    if (path === void 0) {
      path = '';
    }
    this.categoriesLoading = true;
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'POST',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/pianotell/emoji-types",
      body: {
        data: {
          attributes: {
            title: title,
            path: path
          }
        }
      }
    }).then(function (payload) {
      var category = _this5.normalizeCategory(payload == null ? void 0 : payload.data);
      if (category) {
        _this5.categories.push(category);
        _this5.categories.sort(function (a, b) {
          return _this5.sortByPosition(a.sort, b.sort, a.id, b.id);
        });
        _this5.selectedTypeId = category.id;
      }
      return _this5.loadResults().then(function () {
        return category;
      });
    })["finally"](function () {
      _this5.categoriesLoading = false;
      m.redraw();
    });
  };
  _proto.updateCategory = function updateCategory(categoryId, title, path, sort) {
    var _this6 = this;
    if (path === void 0) {
      path = '';
    }
    if (sort === void 0) {
      sort = null;
    }
    this.categoriesLoading = true;
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'PATCH',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/pianotell/emoji-types/" + categoryId,
      body: {
        data: {
          attributes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            title: title,
            path: path
          }, sort === null || sort === undefined ? {} : {
            sort: sort
          })
        }
      }
    }).then(function (payload) {
      var nextCategory = _this6.normalizeCategory(payload == null ? void 0 : payload.data);
      var index = _this6.categories.findIndex(function (category) {
        return category.id === String(categoryId);
      });
      if (nextCategory && index > -1) {
        _this6.categories.splice(index, 1, nextCategory);
        _this6.categories.sort(function (a, b) {
          return _this6.sortByPosition(a.sort, b.sort, a.id, b.id);
        });
      }
      m.redraw();
      return nextCategory;
    })["finally"](function () {
      _this6.categoriesLoading = false;
      m.redraw();
    });
  };
  _proto.updateCategoryVisibility = function updateCategoryVisibility(categoryId, isVisible) {
    var _this7 = this;
    var previousCategories = this.categories.map(function (item) {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item);
    });
    var category = this.categories.find(function (item) {
      return item.id === String(categoryId);
    });
    if (!category) {
      return Promise.resolve(null);
    }
    category.isHidden = !isVisible;
    this.categoriesLoading = true;
    m.redraw();
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'PATCH',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/pianotell/emoji-types/" + categoryId,
      body: {
        data: {
          attributes: {
            isHidden: !isVisible
          }
        }
      }
    }).then(function (payload) {
      var nextCategory = _this7.normalizeCategory(payload == null ? void 0 : payload.data);
      var index = _this7.categories.findIndex(function (item) {
        return item.id === String(categoryId);
      });
      if (nextCategory && index > -1) {
        _this7.categories.splice(index, 1, nextCategory);
      }
      return nextCategory;
    })["catch"](function (error) {
      _this7.categories = previousCategories;
      throw error;
    })["finally"](function () {
      _this7.categoriesLoading = false;
      m.redraw();
    });
  };
  _proto.deleteCategory = function deleteCategory(categoryId) {
    var _this8 = this;
    this.categoriesLoading = true;
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'DELETE',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/pianotell/emoji-types/" + categoryId
    }).then(function () {
      var index = _this8.categories.findIndex(function (category) {
        return category.id === String(categoryId);
      });
      if (index > -1) {
        _this8.categories.splice(index, 1);
      }
      if (_this8.selectedTypeId === String(categoryId)) {
        var _this8$categories$;
        _this8.selectedTypeId = ((_this8$categories$ = _this8.categories[0]) == null ? void 0 : _this8$categories$.id) || null;
      }
      _this8.clearSelection();
      return _this8.loadResults();
    })["finally"](function () {
      _this8.categoriesLoading = false;
      m.redraw();
    });
  };
  _proto.persistCategorySort = function persistCategorySort(nextCategories) {
    var _this9 = this;
    var previousCategories = this.categories.slice();
    var withSort = nextCategories.map(function (category, index) {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, category, {
        sort: index + 1
      });
    });
    var previousSort = new Map(previousCategories.map(function (category) {
      return [category.id, _this9.normalizeSortValue(category.sort)];
    }));
    var changed = withSort.filter(function (category) {
      return previousSort.get(category.id) !== category.sort;
    });
    this.categories = withSort;
    if (!changed.length) {
      m.redraw();
      return Promise.resolve();
    }
    this.categoriesLoading = true;
    m.redraw();
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'POST',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/pianotell/emoji-types/reorder",
      body: {
        data: {
          attributes: {
            ids: withSort.map(function (category) {
              return category.id;
            })
          }
        }
      }
    })["catch"](function (error) {
      _this9.categories = previousCategories;
      throw error;
    })["finally"](function () {
      _this9.categoriesLoading = false;
      m.redraw();
    });
  };
  _proto.persistCategorySortByIds = function persistCategorySortByIds(orderedIds) {
    var nextCategories = this.itemsByOrderedIds(this.categories, orderedIds, function (category) {
      return category.id;
    });
    if (!nextCategories.length) {
      return Promise.resolve();
    }
    return this.persistCategorySort(nextCategories);
  };
  _proto.hasEmojis = function hasEmojis() {
    return this.emojis.length > 0;
  };
  _proto.isLoading = function isLoading() {
    return this.loading;
  };
  _proto.empty = function empty() {
    return !this.hasEmojis() && !this.isLoading();
  };
  _proto.emojiId = function emojiId(emoji) {
    var _emoji$data;
    return String((emoji == null ? void 0 : emoji.id == null ? void 0 : emoji.id()) || (emoji == null ? void 0 : (_emoji$data = emoji.data) == null ? void 0 : _emoji$data.id) || '');
  };
  _proto.currentEmojiIds = function currentEmojiIds() {
    var _this10 = this;
    return this.emojis.map(function (emoji) {
      return _this10.emojiId(emoji);
    }).filter(Boolean);
  };
  _proto.pruneSelection = function pruneSelection() {
    var _this11 = this;
    var currentIds = new Set(this.currentEmojiIds());
    this.selectedEmojiIds.forEach(function (id) {
      if (!currentIds.has(id)) {
        _this11.selectedEmojiIds["delete"](id);
      }
    });
  };
  _proto.isEmojiSelected = function isEmojiSelected(emoji) {
    var id = this.emojiId(emoji);
    return id ? this.selectedEmojiIds.has(id) : false;
  };
  _proto.toggleEmojiSelection = function toggleEmojiSelection(emoji) {
    var id = this.emojiId(emoji);
    if (!id) {
      return;
    }
    if (this.selectedEmojiIds.has(id)) {
      this.selectedEmojiIds["delete"](id);
    } else {
      this.selectedEmojiIds.add(id);
    }
    m.redraw();
  };
  _proto.replaceSelection = function replaceSelection(ids) {
    this.selectedEmojiIds = new Set(ids);
    this.pruneSelection();
  };
  _proto.clearSelection = function clearSelection() {
    this.selectedEmojiIds.clear();
    m.redraw();
  };
  _proto.selectAll = function selectAll() {
    this.selectedEmojiIds = new Set(this.currentEmojiIds());
    m.redraw();
  };
  _proto.toggleAllSelection = function toggleAllSelection() {
    if (this.allSelected()) {
      this.clearSelection();
    } else {
      this.selectAll();
    }
  };
  _proto.selectedCount = function selectedCount() {
    return this.selectedEmojiIds.size;
  };
  _proto.allSelected = function allSelected() {
    return this.hasEmojis() && this.selectedCount() === this.currentEmojiIds().length;
  };
  _proto.bulkDeleteSelected = function bulkDeleteSelected() {
    var _this12 = this;
    var ids = Array.from(this.selectedEmojiIds);
    if (!ids.length) {
      return Promise.resolve();
    }
    this.loading = true;
    m.redraw();
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'POST',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/pianotell/emojis/bulk-delete",
      body: {
        data: {
          attributes: {
            ids: ids
          }
        }
      }
    }).then(function () {
      _this12.clearSelection();
      return _this12.loadResults();
    })["finally"](function () {
      _this12.loading = false;
      m.redraw();
    });
  };
  _proto.bulkMoveSelected = function bulkMoveSelected(typeId) {
    var _this13 = this;
    var ids = Array.from(this.selectedEmojiIds);
    var nextTypeId = typeId ? String(typeId) : null;
    if (!ids.length || !nextTypeId) {
      return Promise.resolve();
    }
    this.loading = true;
    m.redraw();
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'POST',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/pianotell/emojis/bulk-move",
      body: {
        data: {
          attributes: {
            ids: ids,
            typeId: nextTypeId
          }
        }
      }
    }).then(function () {
      _this13.clearSelection();
      return _this13.loadResults();
    })["finally"](function () {
      _this13.loading = false;
      m.redraw();
    });
  };
  _proto.persistEmojiSort = function persistEmojiSort(nextEmojis) {
    var _this14 = this;
    var previousEmojis = this.emojis.slice();
    var currentSort = new Map(previousEmojis.map(function (emoji) {
      return [_this14.emojiId(emoji), _this14.normalizeSortValue(emoji.sort == null ? void 0 : emoji.sort())];
    }));
    var changed = nextEmojis.map(function (emoji, index) {
      return {
        emoji: emoji,
        sort: index + 1
      };
    }).filter(function (_ref) {
      var emoji = _ref.emoji,
        sort = _ref.sort;
      return currentSort.get(_this14.emojiId(emoji)) !== sort;
    });
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
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'POST',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/pianotell/emojis/reorder",
      body: {
        data: {
          attributes: {
            ids: nextEmojis.map(function (emoji) {
              return _this14.emojiId(emoji);
            }).filter(Boolean),
            typeId: this.selectedTypeId
          }
        }
      }
    })["catch"](function (error) {
      _this14.emojis = previousEmojis;
      _this14.restoreEmojiSortValues(previousEmojis, currentSort);
      throw error;
    })["finally"](function () {
      _this14.loading = false;
      m.redraw();
    });
  };
  _proto.persistEmojiSortByIds = function persistEmojiSortByIds(orderedIds) {
    var _this15 = this;
    var nextEmojis = this.itemsByOrderedIds(this.emojis, orderedIds, function (emoji) {
      return _this15.emojiId(emoji);
    });
    if (!nextEmojis.length) {
      return Promise.resolve();
    }
    return this.persistEmojiSort(nextEmojis);
  };
  _proto.syncEmojiSortValues = function syncEmojiSortValues(rows) {
    rows.forEach(function (_ref2) {
      var _emoji$data2;
      var emoji = _ref2.emoji,
        sort = _ref2.sort;
      if (emoji != null && (_emoji$data2 = emoji.data) != null && _emoji$data2.attributes) {
        emoji.data.attributes.sort = sort;
      }
    });
  };
  _proto.restoreEmojiSortValues = function restoreEmojiSortValues(emojis, sortById) {
    var _this16 = this;
    emojis.forEach(function (emoji) {
      var _emoji$data3;
      var id = _this16.emojiId(emoji);
      if (id && sortById.has(id) && emoji != null && (_emoji$data3 = emoji.data) != null && _emoji$data3.attributes) {
        emoji.data.attributes.sort = sortById.get(id);
      }
    });
  };
  _proto.clearFormatterCache = function clearFormatterCache() {
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'DELETE',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/cache"
    });
  };
  _proto.itemsByOrderedIds = function itemsByOrderedIds(items, orderedIds, idResolver) {
    var itemMap = new Map(items.map(function (item) {
      return [idResolver(item), item];
    }));
    var usedIds = new Set();
    var nextItems = [];
    orderedIds.forEach(function (id) {
      var key = String(id || '');
      if (!key || usedIds.has(key) || !itemMap.has(key)) {
        return;
      }
      nextItems.push(itemMap.get(key));
      usedIds.add(key);
    });
    items.forEach(function (item) {
      var id = idResolver(item);
      if (usedIds.has(id)) {
        return;
      }
      nextItems.push(item);
      usedIds.add(id);
    });
    return nextItems;
  };
  _proto.normalizeSortValue = function normalizeSortValue(value) {
    var parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  };
  _proto.sortByPosition = function sortByPosition(leftSort, rightSort, leftId, rightId) {
    if (leftSort !== rightSort) {
      return leftSort - rightSort;
    }
    return String(leftId).localeCompare(String(rightId), undefined, {
      numeric: true
    });
  };
  return CustomEmojiListState;
}();


/***/ }),

/***/ "./src/common/models/Emoji.js":
/*!************************************!*\
  !*** ./src/common/models/Emoji.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Emoji)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/mixin */ "flarum/common/utils/mixin");
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);

/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */



var Emoji = /*#__PURE__*/function (_mixin) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Emoji, _mixin);
  function Emoji() {
    return _mixin.apply(this, arguments) || this;
  }
  var _proto = Emoji.prototype;
  _proto.apiEndpoint = function apiEndpoint() {
    return '/pianotell/emojis' + (this.exists ? '/' + this.data.id : '');
  };
  return Emoji;
}(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  typeId: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('type_id'),
  sort: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('sort'),
  title: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('title'),
  textToReplace: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('text_to_replace'),
  path: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('path')
}));


/***/ }),

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

/***/ "flarum/admin/components/AdminPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['admin/components/AdminPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/AdminPage'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

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

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/mixin":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/utils/mixin']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/mixin'];

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
// Side-effect: registers the initializer.


// Re-export named exports from the entry module so other extensions
// can import them via Flarum's own re-export pipeline.

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map