/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bootstrap-navbar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bootstrap-navbar.js":
/*!************************************!*\
  !*** ./src/js/bootstrap-navbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n/*-----------------------------------------------\n|   Top navigation opacity on scroll\n-----------------------------------------------*/\nconst navbarInit = () =>{\n  const Selector = {\n    NAVBAR: '[data-navbar-on-scroll]',\n    NAVBAR_COLLAPSE: '.navbar-collapse',\n    NAVBAR_TOGGLER: '.navbar-toggler',\n    \n  };\n\n  const ClassNames = {\n    COLLAPSED: 'collapsed',\n  };\n\n  \n  const Events = {\n    SCROLL: 'scroll',\n    SHOW_BS_COLLAPSE: 'show.bs.collapse',\n    HIDE_BS_COLLAPSE: 'hide.bs.collapse',\n    HIDDEN_BS_COLLAPSE: 'hidden.bs.collapse',\n  };\n\n  const DataKey = {\n    NAVBAR_ON_SCROLL: 'navbar-light-on-scroll'\n  };\n  const navbar = document.querySelector(Selector.NAVBAR);\n  // responsive nav collapsed\n  navbar.addEventListener('click',(e)=>{\n    if(e.target.classList.contains('nav-link') && window.innerWidth < _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBreakpoint(navbar)){\n      navbar.querySelector(Selector.NAVBAR_TOGGLER).click()\n    }\n  })\n\n  document.addEventListener('click',(e)=>{\n    if (navbar !== e.target && !navbar.contains(e.target)) {\n      if (\n        !_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasClass(\n          navbar.querySelector(Selector.NAVBAR_TOGGLER),\n          ClassNames.COLLAPSED\n         )) {\n          navbar.querySelector(Selector.NAVBAR_TOGGLER).click()\n        }\n    }\n  })\n\n  if (navbar){\n    const windowHeight = window.innerHeight;\n    const html = document.documentElement;\n    const navbarCollapse = navbar.querySelector(Selector.NAVBAR_COLLAPSE);\n    const allColors = { ..._utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors, ..._utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].grays };\n\n    const name = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(navbar, DataKey.NAVBAR_ON_SCROLL);\n    const colorName = Object.keys(allColors).includes(name) ? name : 'white';\n    const color = allColors[colorName];\n    const bgClassName = `bg-${colorName}`;\n    const shadowName = 'shadow-transition'\n    const colorRgb = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hexToRgb(color);\n    const { backgroundImage } = window.getComputedStyle(navbar);\n    const transition = 'background-color 0.35s ease';\n    navbar.style.backgroundImage = 'none';\n\n     // Change navbar background color on scroll\n     window.addEventListener(Events.SCROLL, () => {\n      const { scrollTop } = html;\n      let alpha = (scrollTop / windowHeight) * .15;\n      // Add class on scroll\n      navbar.classList.add('backdrop');\n      if(alpha === 0){\n        navbar.classList.remove('backdrop');\n      }\n      alpha >= 1 && (alpha = 1);\n      navbar.style.backgroundColor = `rgba(${colorRgb[0]}, ${colorRgb[1]}, ${colorRgb[2]}, ${alpha})`;\n      navbar.style.backgroundImage = (alpha > 0 || _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasClass(navbarCollapse, 'show')) ? backgroundImage : 'none';\n      (alpha > 0 || _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasClass(navbarCollapse, 'show')) ? navbar.classList.add(shadowName):navbar.classList.remove(shadowName);\n    });\n\n     // Toggle bg class on window resize\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resize(() => {\n      const breakPoint = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBreakpoint(navbar);\n      if (window.innerWidth > breakPoint) {\n        navbar.style.backgroundImage = html.scrollTop ? backgroundImage : 'none';\n        navbar.style.transition = 'none';\n      } \n      else if (\n        !_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasClass(\n          navbar.querySelector(Selector.NAVBAR_TOGGLER),\n          ClassNames.COLLAPSED\n         \n        )\n      )\n\n      { \n        navbar.classList.add(bgClassName);\n        navbar.classList.add(shadowName);\n        navbar.style.backgroundImage = backgroundImage;\n      }\n     \n      if (window.innerWidth <= breakPoint) {\n        navbar.style.transition = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasClass(navbarCollapse, 'show') ? transition : 'none';\n      } \n\n    });\n\n    navbarCollapse.addEventListener(Events.SHOW_BS_COLLAPSE, () => {\n      navbar.classList.add(bgClassName);\n      navbar.classList.add(shadowName);\n      navbar.style.backgroundImage = backgroundImage;\n      navbar.style.transition = transition;\n    });\n\n    navbarCollapse.addEventListener(Events.HIDE_BS_COLLAPSE, () => {\n      navbar.classList.remove(bgClassName);\n      navbar.classList.remove(shadowName);\n      !html.scrollTop && (navbar.style.backgroundImage = 'none');\n    });\n\n    navbarCollapse.addEventListener(Events.HIDDEN_BS_COLLAPSE, () => {\n      navbar.style.transition = 'none';\n    });\n\n  }\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarInit);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/bootstrap-navbar.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* -------------------------------------------------------------------------- */\n/*                                    Utils                                   */\n/* -------------------------------------------------------------------------- */\nconst docReady = (fn) => {\n  // see if DOM is already available\n  if (document.readyState === \"loading\") {\n    document.addEventListener(\"DOMContentLoaded\", fn);\n  } else {\n    setTimeout(fn, 1);\n  }\n};\n\nconst resize = (fn) => window.addEventListener(\"resize\", fn);\n\nconst isIterableArray = (array) => Array.isArray(array) && !!array.length;\n\nconst camelize = (str) => {\n  const text = str.replace(/[-_\\s.]+(.)?/g, (_, c) =>\n    c ? c.toUpperCase() : \"\"\n  );\n  return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`;\n};\n\nconst getData = (el, data) => {\n  try {\n    return JSON.parse(el.dataset[camelize(data)]);\n  } catch (e) {\n    return el.dataset[camelize(data)];\n  }\n};\n\n/* ----------------------------- Colors function ---------------------------- */\n\nconst hexToRgb = (hexValue) => {\n  let hex;\n  hexValue.indexOf(\"#\") === 0\n    ? (hex = hexValue.substring(1))\n    : (hex = hexValue);\n  // Expand shorthand form (e.g. \"03F\") to full form (e.g. \"0033FF\")\n  const shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\n  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(\n    hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)\n  );\n  return result\n    ? [\n        parseInt(result[1], 16),\n        parseInt(result[2], 16),\n        parseInt(result[3], 16),\n      ]\n    : null;\n};\n\nconst rgbaColor = (color = \"#fff\", alpha = 0.5) =>\n  `rgba(${hexToRgb(color)}, ${alpha})`;\n\n/* --------------------------------- Colors --------------------------------- */\n\nconst colors = {\n  primary: \"#2c7be5\",\n  secondary: \"#748194\",\n  success: \"#00d27a\",\n  info: \"#27bcfd\",\n  warning: \"#f5803e\",\n  danger: \"#e63757\",\n  light: \"#f9fafd\",\n  dark: \"#000\",\n};\n\nconst grays = {\n  white: \"#fff\",\n  100: \"#f9fafd\",\n  200: \"#edf2f9\",\n  300: \"#d8e2ef\",\n  400: \"#b6c1d2\",\n  500: \"#9da9bb\",\n  600: \"#748194\",\n  700: \"#5e6e82\",\n  800: \"#4d5969\",\n  900: \"#344050\",\n  1000: \"#232e3c\",\n  1100: \"#0b1727\",\n  black: \"#000\",\n};\n\nconst hasClass = (el, className) => {\n  !el && false;\n  return el.classList.value.includes(className);\n};\n\nconst addClass = (el, className) => {\n  el.classList.add(className);\n};\n\nconst getOffset = (el) => {\n  const rect = el.getBoundingClientRect();\n  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;\n  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };\n};\n\nconst isScrolledIntoView = (el) => {\n  let top = el.offsetTop;\n  let left = el.offsetLeft;\n  const width = el.offsetWidth;\n  const height = el.offsetHeight;\n\n  while (el.offsetParent) {\n    // eslint-disable-next-line no-param-reassign\n    el = el.offsetParent;\n    top += el.offsetTop;\n    left += el.offsetLeft;\n  }\n\n  return {\n    all:\n      top >= window.pageYOffset &&\n      left >= window.pageXOffset &&\n      top + height <= window.pageYOffset + window.innerHeight &&\n      left + width <= window.pageXOffset + window.innerWidth,\n    partial:\n      top < window.pageYOffset + window.innerHeight &&\n      left < window.pageXOffset + window.innerWidth &&\n      top + height > window.pageYOffset &&\n      left + width > window.pageXOffset,\n  };\n};\n\nconst breakpoints = {\n  xs: 0,\n  sm: 576,\n  md: 768,\n  lg: 992,\n  xl: 1200,\n  xxl: 1540,\n};\n\nconst getBreakpoint = (el) => {\n  const classes = el && el.classList.value;\n  let breakpoint;\n  if (classes) {\n    breakpoint =\n      breakpoints[\n        classes\n          .split(\" \")\n          .filter((cls) => cls.includes(\"navbar-expand-\"))\n          .pop()\n          .split(\"-\")\n          .pop()\n      ];\n  }\n  return breakpoint;\n};\n\n/* --------------------------------- Cookie --------------------------------- */\n\nconst setCookie = (name, value, expire) => {\n  const expires = new Date();\n  expires.setTime(expires.getTime() + expire);\n  document.cookie = name + \"=\" + value + \";expires=\" + expires.toUTCString();\n};\n\nconst getCookie = (name) => {\n  var keyValue = document.cookie.match(\"(^|;) ?\" + name + \"=([^;]*)(;|$)\");\n  return keyValue ? keyValue[2] : keyValue;\n};\n\nconst settings = {\n  tinymce: {\n    theme: \"oxide\",\n  },\n  chart: {\n    borderColor: \"rgba(255, 255, 255, 0.8)\",\n  },\n};\n\n/* -------------------------- Chart Initialization -------------------------- */\n\nconst newChart = (chart, config) => {\n  const ctx = chart.getContext(\"2d\");\n  return new window.Chart(ctx, config);\n};\n\n/* ---------------------------------- Store --------------------------------- */\n\nconst getItemFromStore = (key, defaultValue, store = localStorage) => {\n  try {\n    return JSON.parse(store.getItem(key)) || defaultValue;\n  } catch {\n    return store.getItem(key) || defaultValue;\n  }\n};\n\nconst setItemToStore = (key, payload, store = localStorage) =>\n  store.setItem(key, payload);\nconst getStoreSpace = (store = localStorage) =>\n  parseFloat(\n    (\n      escape(encodeURIComponent(JSON.stringify(store))).length /\n      (1024 * 1024)\n    ).toFixed(2)\n  );\n\nconst utils = {\n  docReady,\n  resize,\n  isIterableArray,\n  camelize,\n  getData,\n  hasClass,\n  addClass,\n  hexToRgb,\n  rgbaColor,\n  colors,\n  grays,\n  getOffset,\n  isScrolledIntoView,\n  getBreakpoint,\n  setCookie,\n  getCookie,\n  newChart,\n  settings,\n  getItemFromStore,\n  setItemToStore,\n  getStoreSpace,\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });