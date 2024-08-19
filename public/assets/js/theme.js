"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* -------------------------------------------------------------------------- */
/*                                    Utils                                   */
/* -------------------------------------------------------------------------- */
var docReady = function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    setTimeout(fn, 1);
  }
};
var resize = function resize(fn) {
  return window.addEventListener("resize", fn);
};
var isIterableArray = function isIterableArray(array) {
  return Array.isArray(array) && !!array.length;
};
var camelize = function camelize(str) {
  var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
  return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
};
var getData = function getData(el, data) {
  try {
    return JSON.parse(el.dataset[camelize(data)]);
  } catch (e) {
    return el.dataset[camelize(data)];
  }
};

/* ----------------------------- Colors function ---------------------------- */

var hexToRgb = function hexToRgb(hexValue) {
  var hex;
  hexValue.indexOf("#") === 0 ? hex = hexValue.substring(1) : hex = hexValue;
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  }));
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};
var rgbaColor = function rgbaColor() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#fff";
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return "rgba(".concat(hexToRgb(color), ", ").concat(alpha, ")");
};

/* --------------------------------- Colors --------------------------------- */

var colors = {
  primary: "#2c7be5",
  secondary: "#748194",
  success: "#00d27a",
  info: "#27bcfd",
  warning: "#f5803e",
  danger: "#e63757",
  light: "#f9fafd",
  dark: "#000"
};
var grays = {
  white: "#fff",
  100: "#f9fafd",
  200: "#edf2f9",
  300: "#d8e2ef",
  400: "#b6c1d2",
  500: "#9da9bb",
  600: "#748194",
  700: "#5e6e82",
  800: "#4d5969",
  900: "#344050",
  1000: "#232e3c",
  1100: "#0b1727",
  black: "#000"
};
var hasClass = function hasClass(el, className) {
  !el && false;
  return el.classList.value.includes(className);
};
var addClass = function addClass(el, className) {
  el.classList.add(className);
};
var getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
};
var isScrolledIntoView = function isScrolledIntoView(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  while (el.offsetParent) {
    // eslint-disable-next-line no-param-reassign
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return {
    all: top >= window.pageYOffset && left >= window.pageXOffset && top + height <= window.pageYOffset + window.innerHeight && left + width <= window.pageXOffset + window.innerWidth,
    partial: top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset
  };
};
var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540
};
var getBreakpoint = function getBreakpoint(el) {
  var classes = el && el.classList.value;
  var breakpoint;
  if (classes) {
    breakpoint = breakpoints[classes.split(" ").filter(function (cls) {
      return cls.includes("navbar-expand-");
    }).pop().split("-").pop()];
  }
  return breakpoint;
};

/* --------------------------------- Cookie --------------------------------- */

var setCookie = function setCookie(name, value, expire) {
  var expires = new Date();
  expires.setTime(expires.getTime() + expire);
  document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(expires.toUTCString());
};
var getCookie = function getCookie(name) {
  var keyValue = document.cookie.match("(^|;) ?".concat(name, "=([^;]*)(;|$)"));
  return keyValue ? keyValue[2] : keyValue;
};
var settings = {
  tinymce: {
    theme: "oxide"
  },
  chart: {
    borderColor: "rgba(255, 255, 255, 0.8)"
  }
};

/* -------------------------- Chart Initialization -------------------------- */

var newChart = function newChart(chart, config) {
  var ctx = chart.getContext("2d");
  return new window.Chart(ctx, config);
};

/* ---------------------------------- Store --------------------------------- */

var getItemFromStore = function getItemFromStore(key, defaultValue) {
  var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  try {
    return JSON.parse(store.getItem(key)) || defaultValue;
  } catch (_unused) {
    return store.getItem(key) || defaultValue;
  }
};
var setItemToStore = function setItemToStore(key, payload) {
  var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  return store.setItem(key, payload);
};
var getStoreSpace = function getStoreSpace() {
  var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage;
  return parseFloat((escape(encodeURIComponent(JSON.stringify(store))).length / (1024 * 1024)).toFixed(2));
};
var utils = {
  docReady: docReady,
  resize: resize,
  isIterableArray: isIterableArray,
  camelize: camelize,
  getData: getData,
  hasClass: hasClass,
  addClass: addClass,
  hexToRgb: hexToRgb,
  rgbaColor: rgbaColor,
  colors: colors,
  grays: grays,
  getOffset: getOffset,
  isScrolledIntoView: isScrolledIntoView,
  getBreakpoint: getBreakpoint,
  setCookie: setCookie,
  getCookie: getCookie,
  newChart: newChart,
  settings: settings,
  getItemFromStore: getItemFromStore,
  setItemToStore: setItemToStore,
  getStoreSpace: getStoreSpace
};

/* -------------------------------------------------------------------------- */
/*                                  Detector                                  */
/* -------------------------------------------------------------------------- */

var detectorInit = function detectorInit() {
  var _window = window,
    is = _window.is;
  var html = document.querySelector("html");
  is.opera() && addClass(html, "opera");
  is.mobile() && addClass(html, "mobile");
  is.firefox() && addClass(html, "firefox");
  is.safari() && addClass(html, "safari");
  is.ios() && addClass(html, "ios");
  is.iphone() && addClass(html, "iphone");
  is.ipad() && addClass(html, "ipad");
  is.ie() && addClass(html, "ie");
  is.edge() && addClass(html, "edge");
  is.chrome() && addClass(html, "chrome");
  is.mac() && addClass(html, "osx");
  is.windows() && addClass(html, "windows");
  navigator.userAgent.match("CriOS") && addClass(html, "chrome");
};
var angels = [{
  name: "Stani Kulechov",
  title: "Aave & Lens Founder",
  image: "assets/img/angels/stani-kulechov.png",
  url: "https://twitter.com/StaniKulechov"
}, {
  name: "Sandeep Nailwal",
  title: "Polygon Co-Founder",
  image: "assets/img/angels/sandeep-nailwal.png",
  url: "https://twitter.com/sandeepnailwal"
}, {
  name: "Alex Gluchovski",
  title: "zkSync Co-Founder",
  image: "assets/img/angels/alex-gluchovski.png",
  url: "https://twitter.com/gluk64"
}, {
  name: "Emin Gün Sirer",
  title: "Ava Labs Founder",
  image: "assets/img/angels/emin-gun-sirer.png",
  url: "https://twitter.com/el33th4xor"
}, {
  name: "Smokey",
  title: "Berachain Co-Founder",
  image: "assets/img/angels/smokey.jpg",
  url: "https://x.com/SmokeyTheBera"
}, {
  name: "Richard Ma",
  title: "Quantstamp CEO",
  image: "assets/img/angels/richard-ma.png",
  url: "https://www.linkedin.com/in/rtmtd/"
}, {
  name: "Jeff Yin",
  title: "Merlin Chain Founder",
  image: "assets/img/angels/jeff-yin.jpg",
  url: "https://x.com/BitmapTech"
}, {
  name: "Daniel Dizon",
  title: "Swell Founder",
  image: "assets/img/angels/daniel-dizon.jpg",
  url: "https://x.com/daniel_swell_"
}, {
  name: "Mike Silagadze",
  title: "Etherfi CEO",
  image: "assets/img/angels/mike-silagadze.jpg",
  url: "https://x.com/MikeSilagadze"
}, {
  name: "Amir Forouzani",
  title: "Puffer CEO",
  image: "assets/img/angels/amir-forouzani.jpg",
  url: "https://x.com/amironchain"
}, {
  name: "Coinflipcanada",
  title: "GMX Contributor",
  image: "assets/img/angels/coinflipcanada.png",
  url: "https://twitter.com/coinflipcanada"
}, {
  name: "Patrick Dai",
  title: "Qtum Founder",
  image: "assets/img/angels/patrick-dai.png",
  url: "https://twitter.com/PatrickXDai"
}];
var angelsSection = document.getElementById("cross-chain");
if (angelsSection) {
  var element = document.getElementById("angels");
  if (element.childNodes.length === 0) {
    angels.forEach(function (angel) {
      var angelItem = document.createElement("div");
      angelItem.classList.add("partner-item");
      angelItem.classList.add("mt-4");
      angelItem.innerHTML += "\n        <a\n          href=\"".concat(angel.url, "\"\n          role=\"button\"\n          target=\"_blank\"\n          rel=\"noreferrer noopener\"\n          class=\"link-like-text-button-flex\"\n        >\n          <img\n            class=\"testimonial-image\"\n            loading=\"lazy\"\n            src=\"").concat(angel.image, "\"\n            alt=\"").concat(angel.name, " Logo\"\n          />\n          <p class=\"mb-0 mt-2\">").concat(angel.name, "</p>\n          <p class=\"mb-0 mt-0\" style=\"height: 75px;\">").concat(angel.title, "</p>\n        </a>\n      ");
      element.appendChild(angelItem);
    });
  }
}
function animateDataPoints(displayInterval, pointsPerDisplayInterval) {
  var referenceDataPoints = 269400336;
  var referenceTimestamp = 1630398567000;
  var fromReferenceToNow = Date.now() - referenceTimestamp;
  var pointsOnPageOpen = referenceDataPoints + fromReferenceToNow * (pointsPerDisplayInterval / displayInterval);
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function animateValue(htmlElement, startPoint, interval, pointsPerInterval) {
    var startTimestamp = null;
    var previousPoint = startPoint;
    var previousTimestamp = 0;
    var _step = function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      if (timestamp - previousTimestamp > interval) {
        var progress = (timestamp - previousTimestamp) / interval * pointsPerInterval;
        var currentPoint = Math.floor(previousPoint + progress);
        htmlElement.innerHTML = numberWithSpaces(currentPoint);
        previousTimestamp = timestamp;
        previousPoint = currentPoint;
      }
      window.requestAnimationFrame(_step);
    };
    window.requestAnimationFrame(_step);
  }
  var obj = document.getElementById("data-points-number");
  animateValue(obj, pointsOnPageOpen, displayInterval, pointsPerDisplayInterval);
}
var auditorsPartners = [{
  name: "ABDK",
  image: "assets/img/auditors-partners/abdk.png"
}, {
  name: "Peckshield",
  image: "assets/img/auditors-partners/peckshield.png"
}, {
  name: "Piotr Szlachciak",
  image: "assets/img/auditors-partners/l2beat.png",
  title: "L2Beat Co-Founder"
}, {
  name: "AuditOne",
  image: "assets/img/auditors-partners/auditone.png"
}, {
  name: "Gelato",
  image: "assets/img/auditors-partners/gelato.png"
}, {
  name: "Quantstamp",
  image: "assets/img/auditors-partners/quantstamp.png"
}, {
  name: "Sygnum",
  image: "assets/img/auditors-partners/sygnum.png"
}, {
  name: "Caldera",
  image: "assets/img/auditors-partners/caldera.png"
}, {
  name: "AltLayer",
  image: "assets/img/auditors-partners/altlayer.png"
}, {
  name: "Conduit",
  image: "assets/img/auditors-partners/conduit.png"
}, {
  name: "Lumoz",
  image: "assets/img/auditors-partners/lumoz.png"
}, {
  name: "Chaos Labs",
  image: "assets/img/auditors-partners/chaos-labs.png"
}, {
  name: "Gauntlet",
  image: "assets/img/auditors-partners/gauntlet.png"
}, {
  name: "Alterscope",
  image: "assets/img/auditors-partners/alterscope.png"
}, {
  name: "TokenLogic",
  image: "assets/img/auditors-partners/tokenlogic.png"
}, {
  name: "Sei",
  image: "assets/img/auditors-partners/sei.png"
}, {
  name: "Monad",
  image: "assets/img/auditors-partners/monad.png"
}, {
  name: "EigenLayer",
  image: "assets/img/auditors-partners/eigenlayer.png"
}, {
  name: "Staking Rewards",
  image: "assets/img/auditors-partners/staking-rewards.png"
}, {
  name: "Klin",
  image: "assets/img/auditors-partners/klin.png"
}, {
  name: "Hashnote",
  image: "assets/img/auditors-partners/hashnote.png"
}, {
  name: "Astria",
  image: "assets/img/auditors-partners/astria.png"
}, {
  name: "Espresso Systems",
  image: "assets/img/auditors-partners/espresso-systems.png"
}, {
  name: "Safary",
  image: "assets/img/auditors-partners/safary.png"
}];
var auditorsPartnersChainsCrossChainSection = document.getElementById("cross-chain");
if (auditorsPartnersChainsCrossChainSection) {
  var _element = document.getElementById("auditors-partners");
  if (_element.childNodes.length === 0) {
    auditorsPartners.forEach(function (auditorsPartnersElement) {
      var _auditorsPartnersElem;
      var auditorsPartnersItem = document.createElement("div");
      auditorsPartnersItem.classList.add("tab-item");
      auditorsPartnersItem.innerHTML += "\n        <img\n          loading=\"lazy\"\n          src=\"".concat(auditorsPartnersElement.image, "\"\n          alt=\"").concat(auditorsPartnersElement.name, " Logo\"\n          height=\"60\"\n        />\n        <p class=\"mb-0 mt-2\">").concat(auditorsPartnersElement.name, "</p>\n        <p class=\"mb-0 mt-0\">").concat((_auditorsPartnersElem = auditorsPartnersElement === null || auditorsPartnersElement === void 0 ? void 0 : auditorsPartnersElement.title) !== null && _auditorsPartnersElem !== void 0 ? _auditorsPartnersElem : "", "</p>\n      ");
      _element.appendChild(auditorsPartnersItem);
    });
  }
}

/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/
var navbarInit = function navbarInit() {
  var Selector = {
    NAVBAR: "[data-navbar-on-scroll]",
    NAVBAR_COLLAPSE: ".navbar-collapse",
    NAVBAR_TOGGLER: ".navbar-toggler"
  };
  var ClassNames = {
    COLLAPSED: "collapsed"
  };
  var Events = {
    SCROLL: "scroll",
    SHOW_BS_COLLAPSE: "show.bs.collapse",
    HIDE_BS_COLLAPSE: "hide.bs.collapse",
    HIDDEN_BS_COLLAPSE: "hidden.bs.collapse"
  };
  var DataKey = {
    NAVBAR_ON_SCROLL: "navbar-light-on-scroll"
  };
  var navbar = document.querySelector(Selector.NAVBAR);
  // responsive nav collapsed
  navbar.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-link") && window.innerWidth < utils.getBreakpoint(navbar)) {
      navbar.querySelector(Selector.NAVBAR_TOGGLER).click();
    }
  });
  document.addEventListener("click", function (e) {
    if (navbar !== e.target && !navbar.contains(e.target)) {
      if (!utils.hasClass(navbar.querySelector(Selector.NAVBAR_TOGGLER), ClassNames.COLLAPSED)) {
        navbar.querySelector(Selector.NAVBAR_TOGGLER).click();
      }
    }
  });
  if (navbar) {
    var windowHeight = window.innerHeight;
    var html = document.documentElement;
    var navbarCollapse = navbar.querySelector(Selector.NAVBAR_COLLAPSE);
    var allColors = _objectSpread(_objectSpread({}, utils.colors), utils.grays);
    var name = utils.getData(navbar, DataKey.NAVBAR_ON_SCROLL);
    var colorName = Object.keys(allColors).includes(name) ? name : "white";
    var color = allColors[colorName];
    var bgClassName = "bg-".concat(colorName);
    var shadowName = "shadow-transition";
    var colorRgb = utils.hexToRgb(color);
    var _window$getComputedSt = window.getComputedStyle(navbar),
      backgroundImage = _window$getComputedSt.backgroundImage;
    var transition = "background-color 0.35s ease";
    navbar.style.backgroundImage = "none";

    // Change navbar background color on scroll
    window.addEventListener(Events.SCROLL, function () {
      var scrollTop = html.scrollTop;
      var alpha = scrollTop / windowHeight * 0.15;
      // Add class on scroll
      navbar.classList.add("backdrop");
      if (alpha === 0) {
        navbar.classList.remove("backdrop");
      }
      alpha >= 1 && (alpha = 1);
      navbar.style.backgroundColor = "rgba(".concat(colorRgb[0], ", ").concat(colorRgb[1], ", ").concat(colorRgb[2], ", ").concat(alpha, ")");
      navbar.style.backgroundImage = alpha > 0 || utils.hasClass(navbarCollapse, "show") ? backgroundImage : "none";
      alpha > 0 || utils.hasClass(navbarCollapse, "show") ? navbar.classList.add(shadowName) : navbar.classList.remove(shadowName);
    });

    // Toggle bg class on window resize
    utils.resize(function () {
      var breakPoint = utils.getBreakpoint(navbar);
      if (window.innerWidth > breakPoint) {
        navbar.style.backgroundImage = html.scrollTop ? backgroundImage : "none";
        navbar.style.transition = "none";
      } else if (!utils.hasClass(navbar.querySelector(Selector.NAVBAR_TOGGLER), ClassNames.COLLAPSED)) {
        navbar.classList.add(bgClassName);
        navbar.classList.add(shadowName);
        navbar.style.backgroundImage = backgroundImage;
      }
      if (window.innerWidth <= breakPoint) {
        navbar.style.transition = utils.hasClass(navbarCollapse, "show") ? transition : "none";
      }
    });
    navbarCollapse.addEventListener(Events.SHOW_BS_COLLAPSE, function () {
      navbar.classList.add(bgClassName);
      navbar.classList.add(shadowName);
      navbar.style.backgroundImage = backgroundImage;
      navbar.style.transition = transition;
    });
    navbarCollapse.addEventListener(Events.HIDE_BS_COLLAPSE, function () {
      navbar.classList.remove(bgClassName);
      navbar.classList.remove(shadowName);
      !html.scrollTop && (navbar.style.backgroundImage = "none");
    });
    navbarCollapse.addEventListener(Events.HIDDEN_BS_COLLAPSE, function () {
      navbar.style.transition = "none";
    });
  }
};
var chains = [{
  name: "Ethereum",
  image: "assets/img/chains/eth.png"
}, {
  name: "Avalanche",
  image: "assets/img/chains/avax.png"
}, {
  name: "Polygon zkEVM & PoS",
  image: "assets/img/chains/polygon.png"
}, {
  name: "Celo",
  image: "assets/img/chains/celo.png"
}, {
  name: "BNB",
  image: "assets/img/chains/bnb.png"
}, {
  name: "Optimism",
  image: "assets/img/chains/optimism.png"
}, {
  name: "Arbitrum",
  image: "assets/img/chains/arbitrum.png"
}, {
  name: "zkSync Era",
  image: "assets/img/chains/zk-sync.png"
}, {
  name: "Base",
  image: "assets/img/chains/base.png"
}, {
  name: "Scroll",
  image: "assets/img/chains/scroll.png"
}, {
  name: "Starknet",
  image: "assets/img/chains/starknet.png"
}, {
  name: "Canto",
  image: "assets/img/chains/canto.png"
}, {
  name: "Fuel Network",
  image: "assets/img/chains/fuel-network.png"
}, {
  name: "TON",
  image: "assets/img/chains/ton.png"
}, {
  name: "Fantom",
  image: "assets/img/chains/fantom.png"
}, {
  name: "Mode",
  image: "assets/img/chains/mode.png"
}, {
  name: "Kava",
  image: "assets/img/chains/kava.png"
}, {
  name: "Gnosis",
  image: "assets/img/chains/gnosis.png"
}, {
  name: "Manta",
  image: "assets/img/chains/manta.png"
}, {
  name: "Blast",
  image: "assets/img/chains/blast.png"
}, {
  name: "Cronos",
  image: "assets/img/chains/cronos.png"
}, {
  name: "Mantle",
  image: "assets/img/chains/mantle.png"
}, {
  name: "Linea",
  image: "assets/img/chains/linea.png"
}, {
  name: "Fraxtal",
  image: "assets/img/chains/fraxtal.png"
}, {
  name: "Reya",
  image: "assets/img/chains/reya.png"
}, {
  name: "zkLink Nova",
  image: "assets/img/chains/zklink-nova.png"
}, {
  name: "Etherlink",
  image: "assets/img/chains/etherlink.png"
}, {
  name: "B² Network",
  image: "assets/img/chains/b2network.png"
}, {
  name: "X Layer",
  image: "assets/img/chains/xlayer.png"
}, {
  name: "Parallel",
  image: "assets/img/chains/parallel.png"
}, {
  name: "BOB",
  image: "assets/img/chains/bob.png"
}, {
  name: "Story Protocol",
  image: "assets/img/chains/story-protocol.png"
}, {
  name: "Berachain",
  image: "assets/img/chains/berachain.png"
}, {
  name: "CyberConnect",
  image: "assets/img/chains/cyberconnect.png"
}, {
  name: "Merlin",
  image: "assets/img/chains/merlin.png"
}, {
  name: "re.al",
  image: "assets/img/chains/real.png"
}, {
  name: "Sei",
  image: "assets/img/chains/sei.png"
}];
var chainsCrossChainSection = document.getElementById("cross-chain");
if (chainsCrossChainSection) {
  var _element2 = document.getElementById("chains");
  if (_element2.childNodes.length === 0) {
    chains.forEach(function (chain) {
      var chainItem = document.createElement("div");
      chainItem.classList.add("tab-item");
      chainItem.innerHTML += "\n        <img\n          loading=\"lazy\"\n          src=\"".concat(chain.image, "\"\n          alt=\"").concat(chain.name, " Logo\"\n          height=\"60\"\n          width=\"60\"\n        />\n        <p class=\"mb-0 mt-2\">").concat(chain.name, "</p>\n      ");
      _element2.appendChild(chainItem);
    });
    var manyMoreItem = document.createElement("div");
    manyMoreItem.classList.add("d-flex", "col-lg-12", "justify-content-center", "mt-lg-0", "mt-n5");
    manyMoreItem.innerHTML += "\n      <a\n        class=\"mb-0 mt-2 fw-bold\"\n        href=\"https://docs.redstone.finance/docs/smart-contract-devs/supported-chains\"\n        target=\"_blank\"\n        role=\"button\"\n        referrerpolicy=\"no-referrer\"\n      >\n        Full list in Docs!\n      </a>\n    ";
    _element2.appendChild(manyMoreItem);
  }
}
var lstLrtClients = [{
  name: "EtherFi",
  logo: "/assets/img/clients/etherfi.png",
  url: "https://www.ether.fi/",
  announcement: "https://twitter.com/redstone_defi/status/1737503311941812232",
  tvlUrl: "https://api.llama.fi/tvl/ether.fi"
}, {
  name: "KelpDAO",
  logo: "/assets/img/clients/kelp-dao.png",
  url: "https://www.kelpdao.xyz/",
  announcement: "https://x.com/redstone_defi/status/1760998051194573109",
  tvlUrl: "https://api.llama.fi/tvl/kelp-dao"
}, {
  name: "Renzo",
  logo: "/assets/img/clients/renzo.png",
  url: "https://www.renzoprotocol.com/",
  announcement: "https://x.com/redstone_defi/status/1760741284111896625",
  tvlUrl: "https://api.llama.fi/tvl/renzo"
}, {
  name: "Swell",
  logo: "/assets/img/clients/swell.png",
  url: "https://www.swellnetwork.io/",
  announcement: "https://blog.redstone.finance/2023/06/22/case-study-redstone-oracles-provides-sweth-feed-for-swell-network",
  tvlUrl: "https://api.llama.fi/tvl/swell"
}, {
  name: "StakeWise",
  logo: "/assets/img/clients/stakewise.png",
  url: "https://www.stakewise.io/",
  announcement: "https://blog.redstone.finance/2024/01/05/case-study-stakewise-integrates-redstone-oracles-to-bring-oseth-to-defi",
  tvlUrl: "https://api.llama.fi/tvl/stakewise"
}, {
  name: "Stader",
  logo: "/assets/img/clients/stader.png",
  url: "https://www.staderlabs.com/",
  announcement: "https://x.com/redstone_defi/status/1702698921984962623",
  tvlUrl: "https://api.llama.fi/tvl/stader"
}, {
  name: "Redacted Cartel",
  logo: "/assets/img/clients/redacted.png",
  url: "https://redacted.finance/",
  announcement: "https://twitter.com/redstone_defi/status/1759608928189727042",
  tvlUrl: "https://api.llama.fi/tvl/redacted-protocol"
}, {
  name: "Lido",
  logo: "/assets/img/clients/lido.png",
  url: "https://lido.fi/",
  announcement: "https://blog.redstone.finance/2023/07/06/case-study-redstone-oracles-propelling-defi-with-lidos-steth-price-feed/",
  tvlUrl: "https://api.llama.fi/tvl/lido"
}];
var clientsLstLrtSection = document.getElementById("lst-lrt-clients");
if (clientsLstLrtSection) {
  var clientsLstLrtElement = document.getElementById("clients");
  lstLrtClients.forEach(function (client, index) {
    var card = document.createElement("div");
    card.classList.add("col-5", "col-md-4", "col-lg-3", "text-center");
    card.innerHTML = generateClientCard(client.name, client.logo, client.url, client.announcement);
    card.id = client.name;
    if (clientsLstLrtElement.childNodes.length !== lstLrtClients.length) {
      clientsLstLrtElement.appendChild(card);
    }
    fetch(client.tvlUrl).then(function (response) {
      response.json().then(function (tvl) {
        var clientCard = document.getElementById(lstLrtClients[index].name);
        clientCard.innerHTML = generateClientCard(client.name, client.logo, client.url, client.announcement, tvl);
      });
    });
  });
}
var clientsServicesPage = [{
  name: "Pendle",
  logo: "/assets/img/clients/pendle.png",
  url: "https://www.pendle.finance/",
  announcement: "https://x.com/redstone_defi/status/1760260799833182642",
  tvlUrl: "https://api.llama.fi/tvl/pendle"
}, {
  name: "Morpho Blue",
  logo: "/assets/img/clients/morpho.png",
  url: "https://app.morpho.org/",
  announcement: "https://twitter.com/redstone_defi/status/1753335171020136620",
  tvlUrl: "https://api.llama.fi/tvl/morpho-blue"
}, {
  name: "Venus",
  logo: "/assets/img/clients/venus.png",
  url: "https://venus.io/",
  announcement: "https://twitter.com/redstone_defi/status/1679188915218173952",
  tvlUrl: "https://api.llama.fi/tvl/venus"
}, {
  name: "Fraxlend",
  logo: "/assets/img/clients/frax.png",
  url: "https://app.frax.finance/fraxlend",
  announcement: "https://x.com/redstone_defi/status/1804529795310682267",
  tvlUrl: "https://api.llama.fi/tvl/fraxlend"
}, {
  name: "Ethena",
  logo: "/assets/img/clients/ethena.png",
  url: "https://www.ethena.fi/",
  announcement: "https://twitter.com/redstone_defi/status/1764682387127226633",
  tvlUrl: "https://api.llama.fi/tvl/ethena"
}, {
  name: "EtherFi",
  logo: "/assets/img/clients/etherfi.png",
  url: "https://www.ether.fi/",
  announcement: "https://twitter.com/redstone_defi/status/1737503311941812232",
  tvlUrl: "https://api.llama.fi/tvl/ether.fi"
}, {
  name: "Renzo",
  logo: "/assets/img/clients/renzo.png",
  url: "https://www.renzoprotocol.com/",
  announcement: "https://x.com/redstone_defi/status/1760741284111896625",
  tvlUrl: "https://api.llama.fi/tvl/renzo"
}, {
  name: "Puffer",
  logo: "/assets/img/clients/puffer.png",
  url: "https://www.puffer.fi/",
  announcement: "https://x.com/redstone_defi/status/1777383319640113558",
  tvlUrl: "https://api.llama.fi/tvl/puffer-finance"
}];
var clientsServicesPageSection = document.getElementById("services-page-clients");
if (clientsServicesPageSection) {
  var clientsServicesPageElement = document.getElementById("clients");
  clientsServicesPage.forEach(function (client, index) {
    var card = document.createElement("div");
    card.classList.add("col-5", "col-md-4", "col-lg-3", "text-center");
    card.innerHTML = generateClientCard(client.name, client.logo, client.url, client.announcement);
    card.id = client.name;
    if (clientsServicesPageElement.childNodes.length !== clientsServicesPageSection.length) {
      clientsServicesPageElement.appendChild(card);
    }
    fetch(client.tvlUrl).then(function (response) {
      response.json().then(function (tvl) {
        var clientCard = document.getElementById(clientsServicesPage[index].name);
        clientCard.innerHTML = generateClientCard(client.name, client.logo, client.url, client.announcement, tvl);
      });
    });
  });
}
var featuredClients = [{
  name: "Pendle",
  logo: "/assets/img/clients/pendle.png",
  url: "https://www.pendle.finance/",
  announcement: "https://x.com/redstone_defi/status/1760260799833182642",
  tvlUrl: "https://api.llama.fi/tvl/pendle"
}, {
  name: "Morpho Blue",
  logo: "/assets/img/clients/morpho.png",
  url: "https://app.morpho.org/",
  announcement: "https://twitter.com/redstone_defi/status/1753335171020136620",
  tvlUrl: "https://api.llama.fi/tvl/morpho-blue"
}, {
  name: "Venus",
  logo: "/assets/img/clients/venus.png",
  url: "https://venus.io/",
  announcement: "https://twitter.com/redstone_defi/status/1679188915218173952",
  tvlUrl: "https://api.llama.fi/tvl/venus"
}, {
  name: "Fraxlend",
  logo: "/assets/img/clients/frax.png",
  url: "https://app.frax.finance/fraxlend",
  announcement: "https://x.com/redstone_defi/status/1804529795310682267",
  tvlUrl: "https://api.llama.fi/tvl/fraxlend"
}, {
  name: "Ethena",
  logo: "/assets/img/clients/ethena.png",
  url: "https://www.ethena.fi/",
  announcement: "https://twitter.com/redstone_defi/status/1764682387127226633",
  tvlUrl: "https://api.llama.fi/tvl/ethena"
}, {
  name: "EtherFi",
  logo: "/assets/img/clients/etherfi.png",
  url: "https://www.ether.fi/",
  announcement: "https://twitter.com/redstone_defi/status/1737503311941812232",
  tvlUrl: "https://api.llama.fi/tvl/ether.fi"
}, {
  name: "Renzo",
  logo: "/assets/img/clients/renzo.png",
  url: "https://www.renzoprotocol.com/",
  announcement: "https://x.com/redstone_defi/status/1760741284111896625",
  tvlUrl: "https://api.llama.fi/tvl/renzo"
}, {
  name: "Puffer",
  logo: "/assets/img/clients/puffer.png",
  url: "https://www.puffer.fi/",
  announcement: "https://x.com/redstone_defi/status/1777383319640113558",
  tvlUrl: "https://api.llama.fi/tvl/puffer-finance"
}, {
  name: "ZeroLend",
  logo: "/assets/img/clients/zerolend.png",
  url: "https://zerolend.xyz/",
  announcement: "https://twitter.com/redstone_defi/status/1762855479670407290",
  tvlUrl: "https://api.llama.fi/tvl/zerolend"
}, {
  name: "DeltaPrime",
  logo: "/assets/img/clients/deltaprime.png",
  url: "https://deltaprime.io/",
  announcement: "https://twitter.com/redstone_defi/status/1750519070758436929",
  tvlUrl: "https://api.llama.fi/tvl/deltaprime"
}, {
  name: "LayerBank",
  logo: "/assets/img/clients/layerbank.png",
  url: "https://layerbank.finance/",
  announcement: "https://twitter.com/redstone_defi/status/1762492831288246514",
  tvlUrl: "https://api.llama.fi/tvl/layerbank"
}, {
  name: "Gearbox",
  logo: "/assets/img/clients/gearbox.png",
  url: "https://gearbox.fi/",
  announcement: "https://twitter.com/redstone_defi/status/1755626055640211900",
  tvlUrl: "https://api.llama.fi/tvl/gearbox"
}, {
  name: "Balancer",
  logo: "/assets/img/clients/balancer.png",
  url: "https://balancer.fi/",
  announcement: "",
  tvlUrl: "https://api.llama.fi/tvl/balancer"
}, {
  name: "Swell",
  logo: "/assets/img/clients/swell.png",
  url: "https://www.swellnetwork.io/",
  announcement: "https://blog.redstone.finance/2023/06/22/case-study-redstone-oracles-provides-sweth-feed-for-swell-network",
  tvlUrl: "https://api.llama.fi/tvl/swell"
}, {
  name: "KelpDAO",
  logo: "/assets/img/clients/kelp-dao.png",
  url: "https://www.kelpdao.xyz/",
  announcement: "https://x.com/redstone_defi/status/1760998051194573109",
  tvlUrl: "https://api.llama.fi/tvl/kelp-dao"
}, {
  name: "StakeStone",
  logo: "/assets/img/clients/stake-stone.png",
  url: "https://stakestone.io/",
  announcement: "https://twitter.com/redstone_defi/status/1750184210432930055",
  tvlUrl: "https://api.llama.fi/tvl/stakestone"
}, {
  name: "Symbiotic",
  logo: "/assets/img/clients/symbiotic.webp",
  url: "https://symbiotic.fi/",
  announcement: "https://x.com/redstone_defi/status/1824456969962525145",
  tvlUrl: "https://api.llama.fi/tvl/symbiotic"
}, {
  name: "Sommelier",
  logo: "/assets/img/clients/sommelier.png",
  url: "https://www.sommelier.finance/",
  announcement: "https://x.com/redstone_defi/status/1692574274605793339",
  tvlUrl: "https://api.llama.fi/tvl/sommelier"
}, {
  name: "Enzyme",
  logo: "/assets/img/clients/enzyme.png",
  url: "https://enzyme.finance/",
  announcement: " https://x.com/redstone_defi/status/1715012465929723989",
  tvlUrl: "https://api.llama.fi/tvl/enzyme-finance"
}, {
  name: "Redacted Cartel",
  logo: "/assets/img/clients/redacted.png",
  url: "https://redacted.finance/",
  announcement: "https://twitter.com/redstone_defi/status/1759608928189727042",
  tvlUrl: "https://api.llama.fi/tvl/redacted"
}, {
  name: "Euler V2",
  logo: "/assets/img/clients/euler.png",
  url: "https://www.euler.finance/#/",
  announcement: "https://twitter.com/redstone_defi/status/1786425647528874308",
  tvlUrl: "https://api.llama.fi/tvl/euler"
}];
var otherClients = [{
  name: "Mento",
  logo: "/assets/img/clients/mento.png",
  url: "https://www.silo.finance/",
  announcement: "https://blog.redstone.finance/2023/05/18/mento-labs-chooses-redstone-from-multiple-oracle-providers",
  tvlUrl: "https://api.llama.fi/tvl/mento"
}, {
  name: "CIAN",
  logo: "/assets/img/clients/cian.png",
  url: "https://cian.app/",
  announcement: "https://blog.redstone.finance/2023/07/12/case-study-cian-integrates-redstone-oracles-to-revolutionize-algorithmic-strategic-vaults-and-decentralized-automation-tools",
  tvlUrl: "https://api.llama.fi/tvl/cian-protocol"
}, {
  name: "Gravita",
  logo: "/assets/img/clients/gravita.png",
  url: "https://www.gravitaprotocol.com/",
  announcement: "https://twitter.com/redstone_defi/status/1701913686921941128",
  tvlUrl: "https://api.llama.fi/tvl/gravita-protocol"
}, {
  name: "Stader",
  logo: "/assets/img/clients/stader.png",
  url: "https://www.staderlabs.com/",
  announcement: "https://x.com/redstone_defi/status/1702698921984962623",
  tvlUrl: "https://api.llama.fi/tvl/stader"
}, {
  name: "Lido",
  logo: "/assets/img/clients/lido.png",
  url: "https://lido.fi/",
  announcement: "https://blog.redstone.finance/2023/07/06/case-study-redstone-oracles-propelling-defi-with-lidos-steth-price-feed",
  tvlUrl: "https://api.llama.fi/tvl/lido"
}, {
  name: "Angle",
  logo: "/assets/img/clients/angle.png",
  url: "https://www.angle.money/",
  announcement: "https://blog.redstone.finance/2023/08/10/redstones-seamless-integration-with-angle-the-rise-of-real-world-assets-rwas-in-defi",
  tvlUrl: "https://api.llama.fi/tvl/angle"
}, {
  name: "Abracadabra",
  logo: "/assets/img/clients/abracadabra.png",
  url: "https://abracadabra.money/",
  announcement: "https://twitter.com/redstone_defi/status/1722277568769134705",
  tvlUrl: "https://api.llama.fi/tvl/abracadabra"
}, {
  name: "Premia",
  logo: "/assets/img/clients/premia.png",
  url: "https://premia.blue/",
  announcement: "https://blog.redstone.finance/2023/09/18/addressing-options-protocols-needs-premia-blue-integrates-redstone-oracles",
  tvlUrl: "https://api.llama.fi/tvl/premia"
}, {
  name: "Sturdy V2",
  logo: "/assets/img/clients/sturdy.png",
  url: "https://v2.sturdy.finance/overview/ethereum",
  announcement: "https://twitter.com/redstone_defi/status/1754893704480137270",
  tvlUrl: "https://api.llama.fi/tvl/sturdy"
}, {
  name: "Term Finance",
  logo: "/assets/img/clients/term.png",
  url: "https://www.term.finance/",
  announcement: "https://twitter.com/redstone_defi/status/1748012557095620702",
  tvlUrl: "https://api.llama.fi/tvl/termfinance"
}, {
  name: "StakeWise",
  logo: "/assets/img/clients/stakewise.png",
  url: "https://www.stakewise.io/",
  announcement: "https://blog.redstone.finance/2024/01/05/case-study-stakewise-integrates-redstone-oracles-to-bring-oseth-to-defi",
  tvlUrl: "https://api.llama.fi/tvl/stakewise"
}, {
  name: "Curvance",
  logo: "/assets/img/clients/curvance.png",
  url: "https://www.curvance.com/",
  announcement: "https://twitter.com/redstone_defi/status/1752735923060801699",
  tvlUrl: ""
}, {
  name: "ZKX",
  logo: "/assets/img/clients/zkx.png",
  url: "https://zkx.fi/",
  announcement: "https://blog.redstone.finance/2022/11/18/redstonepowered-ep-4-zkx",
  tvlUrl: ""
}, {
  name: "Moola Market",
  logo: "/assets/img/clients/moola.png",
  url: "https://moola.market/",
  announcement: "https://blog.redstone.finance/2022/01/21/redstone-in-2021-creating-oracles-architecture-and-contracts-sdk-out-of-the-real-need",
  tvlUrl: "https://api.llama.fi/tvl/moola-market"
}, {
  name: "Y2K",
  logo: "/assets/img/clients/y2k.png",
  url: "https://www.y2k.finance/",
  announcement: "https://x.com/redstone_defi/status/1679551310990024704",
  tvlUrl: "https://api.llama.fi/tvl/y2k-finance"
}, {
  name: "Float",
  logo: "/assets/img/clients/float.png",
  url: "https://float.capital/",
  announcement: "https://blog.redstone.finance/2023/03/15/float-x-gelato-x-redstone-the-fastest-price-data-for-the-best-user-experience",
  tvlUrl: "https://api.llama.fi/tvl/float"
}, {
  name: "Yield Yak",
  logo: "/assets/img/clients/yield-yak.png",
  url: "https://yieldyak.com/",
  announcement: "https://blog.redstone.finance/2023/05/12/redstone-x-yield-yak-a-new-era-of-defi-with-real-time-token-valuations",
  tvlUrl: "https://api.llama.fi/tvl/yield-yak"
}, {
  name: "Cadence",
  logo: "/assets/img/clients/cadence.png",
  url: "https://www.cadenceprotocol.io/",
  announcement: "https://x.com/redstone_defi/status/1645872955388497923",
  tvlUrl: "https://api.llama.fi/tvl/cadence-protocol"
}, {
  name: "LoanShark",
  logo: "/assets/img/clients/loanshark.png",
  url: "https://loanshark.tech/",
  announcement: "https://x.com/redstone_defi/status/1714660633898336668",
  tvlUrl: "https://api.llama.fi/tvl/loanshark-core"
}, {
  name: "Vesta Finance",
  logo: "/assets/img/clients/vesta.png",
  url: "https://vestafinance.xyz/",
  announcement: "https://blog.redstone.finance/2023/06/09/case-study-redstone-oracles-x-vesta-finance-integration",
  tvlUrl: "https://api.llama.fi/tvl/vesta-finance"
}, {
  name: "Voltz",
  logo: "/assets/img/clients/voltz.png",
  url: "https://www.voltz.xyz/",
  announcement: "https://twitter.com/redstone_defi/status/1678811445457461248",
  tvlUrl: "https://api.llama.fi/tvl/voltz"
}, {
  name: "Raft",
  logo: "/assets/img/clients/raft.png",
  url: "https://raft.fi/",
  announcement: "https://twitter.com/redstone_defi/status/1702245848841965989",
  tvlUrl: "https://api.llama.fi/tvl/raft"
}, {
  name: "Interest protocol",
  logo: "/assets/img/clients/interest-protocol.png",
  url: "https://interestprotocol.io/",
  announcement: "https://twitter.com/interest_dinero/status/1621516358927130624",
  tvlUrl: "https://api.llama.fi/tvl/interest-protocol"
}, {
  name: "Reserve",
  logo: "/assets/img/clients/reserve.png",
  url: "https://reserve.org/",
  announcement: "https://twitter.com/redstone_defi/status/1758159389297688589",
  tvlUrl: "https://api.llama.fi/tvl/reserve-protocol"
}, {
  name: "Juice",
  logo: "/assets/img/clients/juice.png",
  url: "https://twitter.com/Juice_Finance",
  announcement: "https://twitter.com/redstone_defi/status/1767219012147311017",
  tvlUrl: "https://api.llama.fi/tvl/juice-finance"
}, {
  name: "Dolomite",
  logo: "/assets/img/clients/dolomite.png",
  url: "https://dolomite.io/",
  announcement: "https://twitter.com/redstone_defi/status/1770843033900102015",
  tvlUrl: "https://api.llama.fi/tvl/dolomite"
}, {
  name: "StakeStone",
  logo: "/assets/img/clients/stake-stone.png",
  url: "https://stakestone.io/",
  announcement: "https://twitter.com/redstone_defi/status/1750184210432930055",
  tvlUrl: "https://api.llama.fi/tvl/stakestone"
}, {
  name: "Arrakis",
  logo: "/assets/img/clients/arrakis.png",
  url: "https://www.arrakis.finance/",
  announcement: "https://twitter.com/redstone_defi/status/1768295475260821525",
  tvlUrl: "https://api.llama.fi/tvl/arrakis-finance"
}, {
  name: "Ionic",
  logo: "/assets/img/clients/ionic.png",
  url: "https://app.ionic.money/",
  announcement: "https://twitter.com/redstone_defi/status/1771190205728641304",
  tvlUrl: "https://api.llama.fi/tvl/ionic-protocol"
}, {
  name: "Orbit",
  logo: "/assets/img/clients/orbit.png",
  url: "https://orbitlending.io/",
  announcement: "https://x.com/redstone_defi/status/1791136552430833742",
  tvlUrl: "https://api.llama.fi/tvl/orbit-protocol"
}, {
  name: "Kinza",
  logo: "/assets/img/clients/kinza.png",
  url: "https://kinza.finance/",
  announcement: "https://twitter.com/redstone_defi/status/1774089203451887997",
  tvlUrl: "https://api.llama.fi/tvl/kinza-finance"
}, {
  name: "IronClad",
  logo: "/assets/img/clients/ironclad.png",
  url: "https://www.ironclad.finance/",
  announcement: "https://twitter.com/redstone_defi/status/1772700106867061009",
  tvlUrl: "https://api.llama.fi/tvl/ironclad-finance"
}, {
  name: "Ion Protocol",
  logo: "/assets/img/clients/ion-protocol.png",
  url: "https://ionprotocol.io/",
  announcement: "https://twitter.com/redstone_defi/status/1772641449244594405",
  tvlUrl: ""
}, {
  name: "Synonym",
  logo: "/assets/img/clients/synonym.png",
  url: "https://www.synonym.finance/",
  announcement: "",
  tvlUrl: "https://api.llama.fi/tvl/synonym-finance"
}, {
  name: "LogX",
  logo: "/assets/img/clients/logx.png",
  url: "https://app.logx.trade/",
  announcement: "",
  tvlUrl: "https://api.llama.fi/tvl/logx"
}, {
  name: "Wand",
  logo: "/assets/img/clients/wand.png",
  url: "https://wand.fi/",
  announcement: "https://twitter.com/redstone_defi/status/1763317814088339716",
  tvlUrl: "https://api.llama.fi/tvl/wand-protocol"
}, {
  name: "BlastOff",
  logo: "/assets/img/clients/blastoff.png",
  url: "https://blastoff.zone/",
  announcement: "https://twitter.com/redstone_defi/status/1763317803422273638",
  tvlUrl: "https://api.llama.fi/tvl/blastoff"
}, {
  name: "Phuture",
  logo: "/assets/img/clients/phuture.png",
  url: "https://www.phuture.finance/",
  announcement: "https://x.com/redstone_defi/status/1777698036099297736",
  tvlUrl: "https://api.llama.fi/tvl/phuture"
}, {
  name: "BitPerp",
  logo: "/assets/img/clients/bitperp.png",
  url: "https://twitter.com/bitperp",
  announcement: "",
  tvlUrl: ""
}, {
  name: "Lyve Finance",
  logo: "/assets/img/clients/lyve.png",
  url: "https://www.lyvefi.xyz/",
  announcement: "https://x.com/redstone_defi/status/1778075562046816467",
  tvlUrl: "https://api.llama.fi/tvl/lyvefinance"
}, {
  name: "Opal",
  logo: "/assets/img/clients/opal.png",
  url: "https://opaldefi.xyz/",
  announcement: "https://twitter.com/redstone_defi/status/1775946468458918299",
  tvlUrl: ""
}, {
  name: "Merchant Moe",
  logo: "/assets/img/clients/merchant-moe.png",
  url: "https://merchantmoe.com/",
  announcement: "https://twitter.com/redstone_defi/status/1778471787640336442",
  tvlUrl: "https://api.llama.fi/tvl/merchant-moe"
}, {
  name: "Euler V2",
  logo: "/assets/img/clients/euler.png",
  url: "https://www.euler.finance/#/",
  announcement: "https://twitter.com/redstone_defi/status/1786425647528874308",
  tvlUrl: "https://api.llama.fi/tvl/euler"
}, {
  name: "GHO",
  logo: "/assets/img/clients/gho.png",
  url: "https://gho.xyz/",
  announcement: "https://twitter.com/redstone_defi/status/1773726966040129938",
  tvlUrl: ""
}, {
  name: "Native",
  logo: "/assets/img/clients/native.png",
  url: "https://aqua.native.org/",
  announcement: "https://twitter.com/redstone_defi/status/1781030443963552168",
  tvlUrl: "https://api.llama.fi/tvl/native"
}, {
  name: "Goku Money",
  logo: "/assets/img/clients/goku-money.png",
  url: "https://twitter.com/goku_stable",
  announcement: "https://twitter.com/redstone_defi/status/1780959653456904464",
  tvlUrl: "https://api.llama.fi/tvl/goku-money"
}, {
  name: "Tokemak",
  logo: "/assets/img/clients/tokemak.png",
  url: "https://www.tokemak.xyz/",
  announcement: "https://twitter.com/redstone_defi/status/1780933859179450536",
  tvlUrl: "https://api.llama.fi/tvl/tokemak"
}, {
  name: "Hubble Exchange",
  logo: "/assets/img/clients/hubble.png",
  url: "https://app.hubble.exchange/",
  announcement: "https://twitter.com/redstone_defi/status/1780597130517942531",
  tvlUrl: "https://api.llama.fi/tvl/hubble-exchange"
}, {
  name: "Synfutures",
  logo: "/assets/img/clients/synfutures.png",
  url: "https://oyster.synfutures.com/#/odyssey",
  announcement: "",
  tvlUrl: "https://api.llama.fi/tvl/synfutures"
}, {
  name: "Clave",
  logo: "/assets/img/clients/clave.png",
  url: "https://getclave.io/",
  announcement: "https://twitter.com/redstone_defi/status/1784945784460591379",
  tvlUrl: ""
}, {
  name: "SphereX",
  logo: "/assets/img/clients/spherex.png",
  url: "https://www.sx.xyz/",
  announcement: "https://twitter.com/redstone_defi/status/1788569792741605533",
  tvlUrl: ""
}, {
  name: "Seismic Finance",
  logo: "/assets/img/clients/seismic-finance.png",
  url: "https://app.seismic.finance/",
  announcement: "https://twitter.com/redstone_defi/status/1788599830161551470",
  tvlUrl: "https://api.llama.fi/tvl/seismic"
}, {
  name: "Glyph",
  logo: "/assets/img/clients/glyph.png",
  url: "https://www.glyph.fi/",
  announcement: "https://x.com/redstone_defi/status/1789324604231840046",
  tvlUrl: "https://api.llama.fi/tvl/glyph"
}, {
  name: "f(x) Protocol",
  logo: "/assets/img/clients/fx-protocol.png",
  url: "https://fx.aladdin.club/assets/",
  announcement: "https://x.com/redstone_defi/status/1793671435254366568",
  tvlUrl: "https://api.llama.fi/tvl/fx-protocol"
}, {
  name: "Swaap",
  logo: "/assets/img/clients/swaap.png",
  url: "https://www.swaap.finance/",
  announcement: "https://x.com/redstone_defi/status/1793341079103983654",
  tvlUrl: "https://api.llama.fi/tvl/swaap"
}, {
  name: "Lista DAO",
  logo: "/assets/img/clients/lista-dao.png",
  url: "https://linktr.ee/lista_dao",
  announcement: "https://x.com/redstone_defi/status/1791507378338242852",
  tvlUrl: "https://api.llama.fi/tvl/lista-dao"
}, {
  name: "Segment",
  logo: "/assets/img/clients/segment.png",
  url: "https://app.segment.finance/",
  announcement: "https://x.com/redstone_defi/status/1803075558814961731 ",
  tvlUrl: "https://api.llama.fi/tvl/segment-finance"
}, {
  name: "Yei",
  logo: "/assets/img/clients/yei.png",
  url: "https://www.yei.finance/",
  announcement: "https://x.com/redstone_defi/status/1803805083152638089",
  tvlUrl: "https://api.llama.fi/tvl/yei-finance"
}, {
  name: "BitLen",
  logo: "/assets/img/clients/bitlen.png",
  url: "https://www.bitlen.io/",
  announcement: "https://x.com/redstone_defi/status/1814314379778941211",
  tvlUrl: "https://api.llama.fi/tvl/bitlen-finance"
}];
function getClientsCount() {
  return featuredClients.length + otherClients.length;
}
function emptyAnnouncementLink(name) {
  return name === "Balancer" ? "<a class=\"inactive-link\">\n    <p>Announcement</p>\n  </a>" : "";
}
function generateClientCard(name, logo, url, announcement, tvl) {
  var formattedTvl = tvl ? new Intl.NumberFormat().format(tvl.toFixed(0)) : "";
  return "\n    <a\n      href=\"".concat(url, "\"\n      target=\"_blank\"\n      referrerpolicy=\"no-referrer\"\n      class=\"link-like-text-button-flex\"\n    >\n      <img class=\"client-picture\" src=\"").concat(logo, "\"/>\n      <div class=\"client-info fw-medium\">\n        <p class=\"mb-0 fs-0\">").concat(name, "</p>\n        ").concat(tvl ? "<p class=\"mb-0 fs-0\">TVL: $".concat(formattedTvl, "</p>") : "", "\n        ").concat(announcement ? "<a\n          href=\"".concat(announcement, "\"\n          target=\"_blank\"\n          referrerpolicy=\"no-referrer\"\n        >\n          <p>Announcement</p>\n        </a>") : "".concat(emptyAnnouncementLink(name)), "\n      </div>\n    </a>");
}
function sortFn(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
}
if (document.getElementById("featured-clients")) {
  var featuredClientsElement = document.getElementById("featured-clients");
  featuredClients.forEach(function (client, index) {
    var card = document.createElement("div");
    card.classList.add("col-5", "col-md-4", "col-lg-3", "text-center");
    card.innerHTML = generateClientCard(client.name, client.logo, client.url, client.announcement);
    card.id = client.name;
    if (featuredClientsElement.childNodes.length !== featuredClients.length) {
      featuredClientsElement.appendChild(card);
    }
    if (client.tvlUrl) {
      fetch(client.tvlUrl).then(function (response) {
        response.json().then(function (tvl) {
          var clientCard = document.getElementById(featuredClients[index].name);
          clientCard.innerHTML = generateClientCard(client.name, client.logo, client.url, client.announcement, tvl);
        });
      });
    }
  });
}
if (document.getElementById("all-clients")) {
  var allClientsElement = document.getElementById("all-clients");
  var allClients = [].concat(featuredClients, otherClients);
  allClients.sort(sortFn).forEach(function (client, index) {
    var card = document.createElement("div");
    card.classList.add("col-5", "col-md-4", "col-lg-3", "text-center");
    card.innerHTML = generateClientCard(client.name, client.logo, client.url, client.announcement);
    card.id = "".concat(client.name, "_all_clients");
    if (allClientsElement.childNodes.length !== allClients.length) {
      allClientsElement.appendChild(card);
    }
    if (client.tvlUrl) {
      fetch(client.tvlUrl).then(function (response) {
        response.json().then(function (tvl) {
          var clientCard = document.getElementById("".concat(allClients[index].name, "_all_clients"));
          clientCard.innerHTML = generateClientCard(client.name, client.logo, client.url, client.announcement, tvl);
        });
      });
    }
  });
}
var dataSources = [{
  name: "Uniswap",
  image: "/assets/img/data-sources/uniswap.png"
}, {
  name: "Sushiswap",
  image: "/assets/img/data-sources/sushiswap.png"
}, {
  name: "Coingecko",
  image: "/assets/img/data-sources/coingecko.png"
}, {
  name: "Binance",
  image: "/assets/img/data-sources/binance.png"
}, {
  name: "Coinbase",
  image: "/assets/img/data-sources/coinbase.svg"
}, {
  name: "Kraken",
  image: "/assets/img/data-sources/kraken.png"
}, {
  name: "Houbi",
  image: "/assets/img/data-sources/houbi.png"
}, {
  name: "Kucoin",
  image: "/assets/img/data-sources/kucoin.png"
}, {
  name: "Bitfinex",
  image: "/assets/img/data-sources/bitfinex.png"
}, {
  name: "Bittrex",
  image: "/assets/img/data-sources/bittrex.png"
}, {
  name: "Trader Joe",
  image: "/assets/img/data-sources/traderjoe.png"
}, {
  name: "Pangolin",
  image: "/assets/img/data-sources/pangolin.png"
}, {
  name: "Yahoo finance",
  image: "/assets/img/data-sources/yahoo-finance.png"
}, {
  name: "ECB",
  image: "/assets/img/data-sources/ecb.png"
}, {
  name: "Okcoin",
  image: "/assets/img/data-sources/okcoin.png"
}, {
  name: "Curve",
  image: "/assets/img/data-sources/curve.png"
}, {
  name: "Balancer",
  image: "/assets/img/data-sources/balancer.png"
}, {
  name: "Camelot",
  image: "/assets/img/data-sources/camelot.png"
}, {
  name: "Frax",
  image: "/assets/img/data-sources/frax.png"
}, {
  name: "Coinmarketcap",
  image: "/assets/img/data-sources/coinmarketcap.png"
}, {
  name: "Lens",
  image: "/assets/img/data-sources/lens.png"
}, {
  name: "Twelve Data",
  image: "/assets/img/data-sources/twelve-data.png"
}, {
  name: "KAIKO",
  image: "/assets/img/data-sources/kaiko.png"
}, {
  name: "4SV",
  image: "/assets/img/data-sources/4sv.png"
}];
var dataSourcesCrossChainSection = document.getElementById("cross-chain");
if (dataSourcesCrossChainSection) {
  var _element3 = document.getElementById("data-sources");
  if (_element3.childNodes.length === 0) {
    dataSources.forEach(function (dataSource) {
      var dataSourceItem = document.createElement("div");
      dataSourceItem.classList.add("tab-item");
      var isNonSquare = ["Coinbase"].includes(dataSource.name);
      dataSourceItem.innerHTML += "\n        <img\n          loading=\"lazy\"\n          src=\"".concat(dataSource.image, "\"\n          alt=\"").concat(dataSource.name, " Logo\"\n          height=\"60\"\n          width=\"").concat(isNonSquare ? 80 : 60, "\"\n        />\n        <p class=\"mb-0 mt-2\">").concat(dataSource.name, "</p>\n    ");
      _element3.appendChild(dataSourceItem);
    });
    var _manyMoreItem = document.createElement("div");
    _manyMoreItem.classList.add("d-flex", "col-lg-12", "justify-content-center", "mt-lg-0", "mt-n5");
    _manyMoreItem.innerHTML += "\n      <p class=\"mb-0 mt-2 fw-bold\">& many more</p>\n    ";
    _element3.appendChild(_manyMoreItem);
  }
}
function fetchData() {
  var preloader = "<div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div>";
  var sourcesNumberElement = document.getElementById("sources-number");
  var tokensNumberElement = document.getElementById("tokens-number");
  var dataPointsElement = document.getElementById("data-points-number");
  var clientsElement = document.getElementById("clients-number");
  sourcesNumberElement.innerHTML = preloader;
  tokensNumberElement.innerHTML = preloader;
  dataPointsElement.innerHTML = preloader;
  clientsElement.innerHTML = preloader;
  fetch("https://raw.githubusercontent.com/redstone-finance/redstone-app/main/src/config/sources.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    sourcesNumberElement.innerHTML = Object.keys(data).length;
  });
  Promise.all([fetch("https://raw.githubusercontent.com/redstone-finance/redstone-oracles-monorepo/main/packages/oracle-node/manifests/data-services/main.json").then(function (r) {
    return r.json();
  })]).then(function (resp) {
    var tokensNumber = 0;
    resp.forEach(function (set) {
      tokensNumber += Object.keys(set.tokens).length;
    });
    tokensNumberElement.innerHTML = tokensNumber;
  });
  var milisecondInterval = 10;
  var pointsPerDisplayInterval = 0;
  Promise.all([fetch("https://arweave.net/SQqLyX5MKMRhfetfIJXJOqht8qPCJyxf1VIUOwIUjas").then(function (r) {
    return r.json();
  }), fetch("https://arweave.net/syqhA_uEcZ-okZ94NHZCcY3CuUW4aK2njwOp6xQpjSE").then(function (r) {
    return r.json();
  }), fetch("https://arweave.net/Q7qbcNnOrqFbI4K5vLOecPeZn2YXE8-lEpNmMCCw39w").then(function (r) {
    return r.json();
  })]).then(function (resp) {
    resp.forEach(function (manifest) {
      var pointsPerInterval = 0;
      Object.values(manifest.tokens).forEach(function (token) {
        pointsPerInterval += token.source ? Object.keys(token.source).length : 1;
      });
      pointsPerDisplayInterval += pointsPerInterval / manifest.interval * milisecondInterval;
    });
    animateDataPoints(milisecondInterval, pointsPerDisplayInterval);
  });
  clientsElement.innerHTML = getClientsCount();
}
var _window2 = window,
  is = _window2.is;
function isDeviceMobile() {
  return is.mobile() || is.iphone() || is.androidPhone() || is.windowsPhone() || is.blackberry();
}
var openTab = function openTab(event, tabName) {
  var contentIndex;
  var linkIndex;
  var tabContents = document.getElementsByClassName("tab-content");
  for (contentIndex = 0; contentIndex < tabContents.length; contentIndex += 1) {
    tabContents[contentIndex].style.display = "none";
  }
  var tabLinks = document.getElementsByClassName("tab-button");
  for (linkIndex = 0; linkIndex < tabLinks.length; linkIndex += 1) {
    tabLinks[linkIndex].style["border-bottom"] = "1px solid #e5e7eb";
  }
  document.getElementById(tabName).style.display = "flex";
  event.currentTarget.style["border-bottom"] = "1px solid #FD627A";
};
var partners = [{
  name: "Lemniscap",
  url: "https://lemniscap.com/",
  image: "assets/img/partners/lemniscap.png"
}, {
  name: "Blockchain Capital",
  url: "https://blockchain.capital/",
  image: "assets/img/partners/blockchain-capital.png"
}, {
  name: "Coinbase Ventures",
  url: "https://www.coinbase.com/ventures",
  image: "assets/img/partners/coinbase-ventures.png"
}, {
  name: "Maven11",
  url: "https://www.maven11.com/",
  image: "assets/img/partners/maven11.png"
}, {
  name: "Arrington Capital",
  url: "https://www.arringtoncapital.com/",
  image: "assets/img/partners/arrington-capital.svg"
}, {
  name: "Arweave",
  url: "https://www.arweave.org/",
  image: "assets/img/partners/arweave.svg"
}, {
  name: "Lattice",
  url: "https://lattice.fund/",
  image: "assets/img/partners/lattice.png"
}, {
  name: "SevenX",
  url: "https://7xvc.com/",
  image: "assets/img/partners/seven-x.png"
}, {
  name: "IOSG",
  url: "https://iosg.vc/",
  image: "assets/img/partners/iosg.png"
}, {
  name: "Spartan Capital",
  url: "https://www.spartangroup.io/",
  image: "assets/img/partners/spartan-capital.jpg"
}, {
  name: "White Star Capital",
  url: "https://whitestarcapital.com/",
  image: "assets/img/partners/white-star-capital.png"
}, {
  name: "Protagonist",
  url: "https://www.protagonist.co/",
  image: "assets/img/partners/protagonist.png"
}, {
  name: "Alphemy Capital",
  url: "https://alphemy.capital/",
  image: "assets/img/partners/alphemy-capital.png"
}, {
  name: "Samara Asset Group",
  url: "https://www.samara-ag.com/",
  image: "assets/img/partners/samara-asset-group.png"
}, {
  name: "gumi Cryptos Capital",
  url: "https://www.gumi-cryptos.com/",
  image: "assets/img/partners/gumi-cryptos.jpeg"
}, {
  name: "KR1",
  url: "https://www.kryptonite1.co/",
  image: "assets/img/partners/kr1.jpg"
}, {
  name: "BeringWaters",
  url: "https://beringwaters.com/",
  image: "assets/img/partners/beringwaters.png"
}, {
  name: "Distributed Global",
  url: "http://www.distributedglobal.com/",
  image: "assets/img/partners/distributed-global.png"
}, {
  name: "Amber Group",
  url: "https://www.ambergroup.io/",
  image: "assets/img/partners/amber-group.png"
}, {
  name: "Thanefield Capital",
  url: "https://thanefield.capital/",
  image: "assets/img/partners/thanefield-capital.jpg"
}, {
  name: "Selini Capital",
  url: "https://www.selinicapital.com/",
  image: "assets/img/partners/selini-capital.png"
}, {
  name: "4RC",
  url: "https://www.fourthrevolution.capital/",
  image: "assets/img/partners/4rc.png"
}, {
  name: "Revelo Intel",
  url: "https://revelointel.com/",
  image: "assets/img/partners/revelo-intel.png"
}, {
  name: "HTX Ventures",
  url: "https://www.htx.com/ventures",
  image: "assets/img/partners/htx-ventures.png"
}, {
  name: "1KX",
  url: "https://twitter.com/1kxnetwork",
  image: "assets/img/partners/1kx.jpeg"
}, {
  name: "Collider Ventures",
  url: "https://www.collider.vc/",
  image: "assets/img/partners/collider.png"
}, {
  name: "Folius Ventures",
  url: "https://www.folius.ventures/",
  image: "assets/img/partners/folius-ventures.png"
}, {
  name: "TRGC",
  url: "https://trgc.io/",
  image: "assets/img/partners/trgc.svg"
}, {
  name: "Kenetic Capital",
  url: "https://www.kenetic.capital/",
  image: "assets/img/partners/kenetic-capital.png"
}, {
  name: "Relayer Capital",
  url: "https://relayer.capital/",
  image: "assets/img/partners/relayer-capital.jpg"
}];
var partnersSection = document.getElementById("partners");
if (partnersSection) {
  var _element4 = document.getElementById("backed-by");
  if (_element4.childNodes.length === 0) {
    partners.forEach(function (partner) {
      var partnerItem = document.createElement("div");
      partnerItem.classList.add("partner-item");
      var isBlackBackgroundRequired = partner.name === "Distributed Global";
      partnerItem.innerHTML += "\n        <a\n          href=\"".concat(partner.url, "\"\n          role=\"button\"\n          target=\"_blank\"\n          rel=\"noreferrer noopener\"\n        >\n          <img\n            src=\"").concat(partner.image, "\"\n            width=\"120px\"\n            alt=\"").concat(partner.name, " Logo\"\n            style=\"").concat(isBlackBackgroundRequired ? "background: black; padding: 6px" : "", "\"\n          />\n        </a>\n      ");
      _element4.appendChild(partnerItem);
    });
  }
}
var pictures = [{
  image: "/assets/img/pictures/1.jpg"
}, {
  image: "/assets/img/pictures/2.jpg"
}, {
  image: "/assets/img/pictures/3.jpg"
}, {
  image: "/assets/img/pictures/4.jpg"
}, {
  image: "/assets/img/pictures/5.jpg"
}, {
  image: "/assets/img/pictures/6.jpg"
}, {
  image: "/assets/img/pictures/7.jpg"
}, {
  image: "/assets/img/pictures/8.jpg"
}, {
  image: "/assets/img/pictures/9.jpg"
}, {
  image: "/assets/img/pictures/10.jpeg"
}, {
  image: "/assets/img/pictures/11.jpeg"
}, {
  image: "/assets/img/pictures/12.jpeg"
}, {
  image: "/assets/img/pictures/13.jpeg"
}, {
  image: "/assets/img/pictures/14.jpeg"
}, {
  image: "/assets/img/pictures/15.jpeg"
}, {
  image: "/assets/img/pictures/16.jpeg"
}];
var pictureSection = document.getElementById("gallery");
if (pictureSection) {
  pictures.forEach(function (picture) {
    var pictureItem = document.createElement("img");
    pictureItem.src = picture.image;
    pictureSection.appendChild(pictureItem);
  });
}

/* -------------------------------------------------------------------------- */
/*                                Scroll To Top                               */
/* -------------------------------------------------------------------------- */
var scrollToTop = function scrollToTop() {
  document.querySelectorAll("[data-anchor] > a, [data-scroll-to]").forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var _utils$getData;
      e.preventDefault();
      var el = e.target;
      var id = utils.getData(el, "scroll-to") || el.getAttribute("href");
      window.scroll({
        top: (_utils$getData = utils.getData(el, "offset-top")) !== null && _utils$getData !== void 0 ? _utils$getData : utils.getOffset(document.querySelector(id)).top - 100,
        left: 0,
        behavior: "smooth"
      });
      window.location.hash = id;
    });
  });
};
if (document.getElementById("members")) {
  var members = [{
    name: "Jakub",
    role: "Founder CEO",
    img: "/assets/img/team/jakub.png",
    twitter: "https://twitter.com/kuba_eth",
    linkedin: "https://www.linkedin.com/in/jakub-wojciechowski-5901b68/"
  }, {
    name: "Marcin",
    role: "Co-Founder COO",
    img: "/assets/img/team/marcin.jpg",
    twitter: "https://twitter.com/Marcin_Kaz13",
    linkedin: "https://www.linkedin.com/in/marcin-kazmierczak1/"
  }, {
    name: "Alex",
    role: "Co-Founder RedStone Lead Dev",
    img: "/assets/img/team/alex.png",
    twitter: "https://twitter.com/hatskier_me",
    linkedin: "https://www.linkedin.com/in/alex-suvorov/"
  }, {
    name: "Piotr",
    role: "Co-Founder Warp Lead Dev",
    img: "/assets/img/team/ppe.jpeg",
    twitter: "https://twitter.com/ppe_warp",
    linkedin: "https://www.linkedin.com/in/piotr-p%C4%99dziwiatr-2ab105215/"
  }, {
    name: "Matt",
    role: "RedStone Head of BD",
    img: "/assets/img/team/matt.png",
    twitter: "https://twitter.com/mattgurbiel",
    linkedin: "https://pl.linkedin.com/in/mateuszgurbiel"
  }, {
    name: "Filip",
    role: "DeFi Degen",
    img: "/assets/img/team/filip.png",
    twitter: "https://twitter.com/Hundert1000",
    linkedin: "https://www.linkedin.com/in/filip-rogalski-0020611b3"
  }, {
    name: "Maja",
    role: "RedStone Marketing Lead",
    img: "/assets/img/team/maja.png",
    twitter: "https://twitter.com/MajaCholewka",
    linkedin: "https://www.linkedin.com/in/majacholewka/"
  }, {
    name: "Wolf",
    role: "Warp Marketing Lead",
    img: "/assets/img/team/wolf.png",
    twitter: "https://twitter.com/warcin101",
    linkedin: "https://www.linkedin.com/in/marcin-wilk-73895a1a2/"
  }];
  var _element5 = document.getElementById("members");
  members.forEach(function (member) {
    var card = document.createElement("div");
    card.classList.add("col-sm-5", "col-md-4", "col-lg-3");
    card.innerHTML += "\n      <img class=\"member-picture\" src=\"".concat(member.img, "\"/>\n      <div class=\"member-info fw-medium\">\n        <p class=\"mb-0 fs-0\">").concat(member.name, "</p>\n        <p  class=\"mb-0 fs-0\">").concat(member.role, "</p>\n        <div class=\"member-social\">\n        <a\n          href=\"").concat(member.twitter, "\"\n          target=\"_blank\"\n          referrerpolicy=\"no-referrer\"\n        >\n          <img\n            class=\"big-button-image\"\n            src=\"/assets/img/icons/twitter.svg\"\n          >\n        </a>\n        <a\n          href=\"").concat(member.linkedin, "\"\n          style=\"color: #616368\n          target=\"_blank\"\n          referrerpolicy=\"no-referrer\"\n        >\n          <img\n            class=\"big-button-image\"\n            src=\"/assets/img/icons/linkedin.svg\"\n          >\n        </a>\n      </div>");
    _element5.appendChild(card);
  });
}
var slideIndex = 1;
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimonial-slide");
  var dots = document.getElementsByClassName("dot");
  if (slides.length > 0 && dots.length > 0) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}
showSlides(slideIndex);
function currentSlide(n) {
  showSlides(slideIndex = n);
}
var projects = [{
  name: "DeltaPrime",
  image: "assets/img/clients/deltaprime.png",
  url: "https://deltaprime.io/"
}, {
  name: "Venus",
  image: "assets/img/clients/venus.png",
  url: "https://venus.io/"
}, {
  name: "Pendle",
  image: "assets/img/clients/pendle.png",
  url: "https://www.pendle.finance/"
}, {
  name: "Morpho Blue",
  image: "assets/img/clients/morpho.png",
  url: "https://app.morpho.org/"
}, {
  name: "Silo",
  image: "assets/img/clients/silo.png",
  url: "https://www.silo.finance/"
}, {
  name: "Sommelier",
  image: "assets/img/clients/sommelier.png",
  url: "https://www.sommelier.finance/"
}, {
  name: "Gearbox",
  image: "assets/img/clients/gearbox.png",
  url: "https://gearbox.fi/"
}, {
  name: "LayerBank",
  image: "assets/img/clients/layerbank.png",
  url: "https://layerbank.finance/"
}, {
  name: "ZeroLend",
  image: "assets/img/clients/zerolend.png",
  url: "https://zerolend.xyz/"
}, {
  name: "Shoebill",
  image: "assets/img/clients/shoebill.png",
  url: "https://shoebill.finance/"
}, {
  name: "Term Finance",
  image: "assets/img/clients/term.png",
  url: "https://www.term.finance/"
}, {
  name: "Angle",
  image: "assets/img/clients/angle.png",
  url: "https://www.angle.money/"
}, {
  name: "Lido",
  image: "assets/img/clients/lido.png",
  url: "https://lido.fi/"
}, {
  name: "Swell",
  image: "assets/img/clients/swell.png",
  url: "https://www.swellnetwork.io/"
}, {
  name: "Renzo",
  image: "assets/img/clients/renzo.png",
  url: "https://www.renzoprotocol.com/"
}, {
  name: "Etherfi",
  image: "assets/img/clients/etherfi.png",
  url: "https://www.ether.fi/"
}, {
  name: "Fraxlend",
  image: "assets/img/clients/frax.png",
  url: "https://app.frax.finance/fraxlend"
}, {
  name: "Gravita",
  image: "assets/img/clients/gravita.png",
  url: "https://www.gravitaprotocol.com/"
}, {
  name: "Enzyme",
  image: "assets/img/clients/enzyme.png",
  url: "https://enzyme.finance/"
}, {
  name: "CIAN",
  image: "assets/img/clients/cian.png",
  url: "https://cian.app/"
}, {
  name: "Mento",
  image: "assets/img/clients/mento.png",
  url: "https://www.mento.org/"
}, {
  name: "Euler",
  image: "assets/img/clients/euler.png",
  url: "https://www.euler.finance/#/"
}, {
  name: "Puffer",
  image: "assets/img/clients/puffer.png",
  url: "https://www.puffer.fi/"
}, {
  name: "Cadence Protocol",
  image: "assets/img/clients/cadence.png",
  url: "https://www.cadenceprotocol.io/"
}];
var trustedByCrossChainSection = document.getElementById("cross-chain");
if (trustedByCrossChainSection) {
  var _element6 = document.getElementById("trusted-by");
  if (_element6.childNodes.length === 0) {
    projects.forEach(function (project) {
      var projectItem = document.createElement("div");
      projectItem.classList.add("tab-item");
      projectItem.innerHTML += "\n        <a\n          href=\"".concat(project.url, "\"\n          role=\"button\"\n          target=\"_blank\"\n          rel=\"noreferrer noopener\"\n          class=\"link-like-text-button-flex\"\n        >\n          <img\n            loading=\"lazy\"\n            src=\"").concat(project.image, "\"\n            alt=\"").concat(project.name, " Logo\"\n            height=\"60\"\n            width=\"60\"\n          />\n          <p class=\"mb-0 mt-2\">").concat(project.name, "</p>\n        </a>\n      ");
      _element6.appendChild(projectItem);
    });
    var _manyMoreItem2 = document.createElement("div");
    _manyMoreItem2.classList.add("d-flex", "col-lg-12", "justify-content-center", "mt-lg-0", "mt-n5");
    _manyMoreItem2.innerHTML += "\n    <a class=\"mb-0 mt-2 fw-bold\" href=\"/clients\">\n      & many more!\n    </a>\n  ";
    _element6.appendChild(_manyMoreItem2);
  }
}
function generateTvsElement(tvs) {
  var defillamaUrl = "https://defillama.com/oracles/RedStone?staking=false&pool2=false&govtokens=false&doublecounted=true&borrowed=true&liquidstaking=false&vesting=false";
  return "\n    <div class=\"tvs-link mt-3 mt-md-5\">\n      <a\n        href=\"".concat(defillamaUrl, "\"\n        target=\"_blank\"\n        referrerpolicy=\"no-referrer\"\n        class=\"link-like-text-button\"\n      >\n        <div class=\"py-2 px-4\">\n          <div class=\"flex gap-2 align-items-center justify-content-center mb-2\">\n            <h3 class=\"mb-0\">Protecting</h3>\n            ").concat(tvs ? "<h3 class=\"mb-0\"><b>".concat(tvs, " billion</b></h3>") : "<div class=\"flex align-items-center justify-content-center loader-container-tvs\">\n                    <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div>\n                  </div>", "\n            <div class=\"simple-tooltip\">\n              <img src=\"/assets/img/icons/info.svg\" />\n              <span class=\"tooltiptext\">\n                TVS (Total Value Secured) is a metric similar to TVL (Total Value Locked) that also counts assets that are temporarily outside of the protocol (Borrows & Double Count) but could be lost if an oracle misprices delivered feeds.\n              </span>\n            </div>\n          </div>\n          <div class=\"flex gap-2 align-items-center justify-md-content-left justify-content-center\">\n            <h6 class=\"m-0\">Total Value Secured (TVS) by</h6>\n            <img src=\"/assets/img/logos/defillama.svg\" />\n          </div>\n        </div>\n      </a>\n    </div>");
}
if (document.getElementById("tvs")) {
  var tvsUrl = "https://d12s4zpdqk5syt.cloudfront.net/api/PHnrSeRI0Uf6O6vtFBE2";
  var tvsElement = document.getElementById("tvs");
  fetch(tvsUrl).then(function (response) {
    response.json().then(function (parsedResponse) {
      var tvs = parsedResponse.data[0].RedStoneTVS;
      var parsedTvs = tvs.slice(0, 4);
      tvsElement.innerHTML = generateTvsElement(parsedTvs);
      var tooltipElements = document.querySelectorAll(".simple-tooltip");
      tooltipElements.forEach(function (element) {
        return element.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        });
      });
    });
  });
  tvsElement.innerHTML = generateTvsElement();
  var tooltipElements = document.querySelectorAll(".simple-tooltip");
  tooltipElements.forEach(function (element) {
    return element.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    });
  });
}

// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(fetchData);
docReady(navbarInit);
docReady(detectorInit);
docReady(scrollToTop);
var videoElem = document.getElementById("redstone-video");
if (videoElem) {
  videoElem.innerHTML = "\n  <video\n    position=\"relative\"\n    width=\"100%\"\n    height=\"100%\"\n    style=\"\n      border:none;\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n      -webkit-backface-visibility: hidden;\n      -moz-backface-visibility: hidden;\n    \"\n    name=\"RedStone\"\n    autoplay=\"autoplay\"\n    loop=\"loop\"\n    muted\n    defaultMuted\n    playsinline\n  >\n    <source src=\"/assets/animations/redstone-landing-animation.mp4\">\n  </video>\n  ";
}
var cookieScript = document.getElementById("cookie-script");
cookieScript.addEventListener("load", function () {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: "#24355B",
        text: "#FFFFFF"
      },
      button: {
        background: "#FD627A",
        text: "#FFFFFF"
      }
    },
    showLink: false,
    theme: "classic",
    content: {
      message: "This site uses cookies to analyze traffic and offer a better browsing experience.",
      dismiss: "Agree"
    }
  });
});
//# sourceMappingURL=theme.js.map
