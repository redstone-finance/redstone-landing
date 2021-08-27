"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* -------------------------------------------------------------------------- */

/*                                    Utils                                   */

/* -------------------------------------------------------------------------- */
var docReady = function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};

var resize = function resize(fn) {
  return window.addEventListener('resize', fn);
};

var isIterableArray = function isIterableArray(array) {
  return Array.isArray(array) && !!array.length;
};

var camelize = function camelize(str) {
  var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : '';
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
  hexValue.indexOf('#') === 0 ? hex = hexValue.substring(1) : hex = hexValue; // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")

  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  }));
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};

var rgbaColor = function rgbaColor() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#fff';
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return "rgba(".concat(hexToRgb(color), ", ").concat(alpha, ")");
};
/* --------------------------------- Colors --------------------------------- */


var colors = {
  primary: '#2c7be5',
  secondary: '#748194',
  success: '#00d27a',
  info: '#27bcfd',
  warning: '#f5803e',
  danger: '#e63757',
  light: '#f9fafd',
  dark: '#000'
};
var grays = {
  white: '#fff',
  100: '#f9fafd',
  200: '#edf2f9',
  300: '#d8e2ef',
  400: '#b6c1d2',
  500: '#9da9bb',
  600: '#748194',
  700: '#5e6e82',
  800: '#4d5969',
  900: '#344050',
  1000: '#232e3c',
  1100: '#0b1727',
  black: '#000'
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
    breakpoint = breakpoints[classes.split(' ').filter(function (cls) {
      return cls.includes('navbar-expand-');
    }).pop().split('-').pop()];
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
    theme: 'oxide'
  },
  chart: {
    borderColor: 'rgba(255, 255, 255, 0.8)'
  }
};
/* -------------------------- Chart Initialization -------------------------- */

var newChart = function newChart(chart, config) {
  var ctx = chart.getContext('2d');
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
  var html = document.querySelector('html');
  is.opera() && addClass(html, 'opera');
  is.mobile() && addClass(html, 'mobile');
  is.firefox() && addClass(html, 'firefox');
  is.safari() && addClass(html, 'safari');
  is.ios() && addClass(html, 'ios');
  is.iphone() && addClass(html, 'iphone');
  is.ipad() && addClass(html, 'ipad');
  is.ie() && addClass(html, 'ie');
  is.edge() && addClass(html, 'edge');
  is.chrome() && addClass(html, 'chrome');
  is.mac() && addClass(html, 'osx');
  is.windows() && addClass(html, 'windows');
  navigator.userAgent.match('CriOS') && addClass(html, 'chrome');
};

function animateDataPoints(displayInterval, pointsPerDisplayInterval) {
  var referenceDataPoints = 771549199;
  var referenceTimestamp = 1630068468954;
  var fromReferenceToNow = Date.now() - referenceTimestamp;
  var pointsOnPageOpen = referenceDataPoints + fromReferenceToNow * (pointsPerDisplayInterval / displayInterval);

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function animateValue(htmlElement, startPoint, interval, pointsPerInterval) {
    var startTimestamp = null;
    var previousPoint = startPoint;
    var previousTimestamp = 0;

    var step = function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;

      if (timestamp - previousTimestamp > interval) {
        var progress = (timestamp - previousTimestamp) / interval * pointsPerInterval;
        var currentPoint = Math.floor(previousPoint + progress);
        htmlElement.innerHTML = numberWithSpaces(currentPoint);
        previousTimestamp = timestamp;
        previousPoint = currentPoint;
      }

      window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }

  var obj = document.getElementById('data-points-number');
  animateValue(obj, pointsOnPageOpen, displayInterval, pointsPerDisplayInterval);
}
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/


var navbarInit = function navbarInit() {
  var Selector = {
    NAVBAR: '[data-navbar-on-scroll]',
    NAVBAR_COLLAPSE: '.navbar-collapse',
    NAVBAR_TOGGLER: '.navbar-toggler'
  };
  var ClassNames = {
    COLLAPSED: 'collapsed'
  };
  var Events = {
    SCROLL: 'scroll',
    SHOW_BS_COLLAPSE: 'show.bs.collapse',
    HIDE_BS_COLLAPSE: 'hide.bs.collapse',
    HIDDEN_BS_COLLAPSE: 'hidden.bs.collapse'
  };
  var DataKey = {
    NAVBAR_ON_SCROLL: 'navbar-light-on-scroll'
  };
  var navbar = document.querySelector(Selector.NAVBAR); // responsive nav collapsed

  navbar.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav-link') && window.innerWidth < utils.getBreakpoint(navbar)) {
      navbar.querySelector(Selector.NAVBAR_TOGGLER).click();
    }
  });
  document.addEventListener('click', function (e) {
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
    var colorName = Object.keys(allColors).includes(name) ? name : 'white';
    var color = allColors[colorName];
    var bgClassName = "bg-".concat(colorName);
    var shadowName = 'shadow-transition';
    var colorRgb = utils.hexToRgb(color);

    var _window$getComputedSt = window.getComputedStyle(navbar),
        backgroundImage = _window$getComputedSt.backgroundImage;

    var transition = 'background-color 0.35s ease';
    navbar.style.backgroundImage = 'none'; // Change navbar background color on scroll

    window.addEventListener(Events.SCROLL, function () {
      var scrollTop = html.scrollTop;
      var alpha = scrollTop / windowHeight * 0.15; // Add class on scroll

      navbar.classList.add('backdrop');

      if (alpha === 0) {
        navbar.classList.remove('backdrop');
      }

      alpha >= 1 && (alpha = 1);
      navbar.style.backgroundColor = "rgba(".concat(colorRgb[0], ", ").concat(colorRgb[1], ", ").concat(colorRgb[2], ", ").concat(alpha, ")");
      navbar.style.backgroundImage = alpha > 0 || utils.hasClass(navbarCollapse, 'show') ? backgroundImage : 'none';
      alpha > 0 || utils.hasClass(navbarCollapse, 'show') ? navbar.classList.add(shadowName) : navbar.classList.remove(shadowName);
    }); // Toggle bg class on window resize

    utils.resize(function () {
      var breakPoint = utils.getBreakpoint(navbar);

      if (window.innerWidth > breakPoint) {
        navbar.style.backgroundImage = html.scrollTop ? backgroundImage : 'none';
        navbar.style.transition = 'none';
      } else if (!utils.hasClass(navbar.querySelector(Selector.NAVBAR_TOGGLER), ClassNames.COLLAPSED)) {
        navbar.classList.add(bgClassName);
        navbar.classList.add(shadowName);
        navbar.style.backgroundImage = backgroundImage;
      }

      if (window.innerWidth <= breakPoint) {
        navbar.style.transition = utils.hasClass(navbarCollapse, 'show') ? transition : 'none';
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
      !html.scrollTop && (navbar.style.backgroundImage = 'none');
    });
    navbarCollapse.addEventListener(Events.HIDDEN_BS_COLLAPSE, function () {
      navbar.style.transition = 'none';
    });
  }
};

function fetchData() {
  fetch('https://raw.githubusercontent.com/redstone-finance/redstone-node/main/src/config/sources.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log('Sources:', Object.keys(data).length);
    var element = document.getElementById('sources-number');
    element.innerHTML = Object.keys(data).length;
  });
  fetch('https://raw.githubusercontent.com/redstone-finance/redstone-node/main/src/config/tokens.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log('Tokens:', Object.keys(data).length);
    var element = document.getElementById('tokens-number');
    element.innerHTML = Object.keys(data).length;
  });
  var milisecondInterval = 10;
  var pointsPerDisplayInterval = 0;
  Promise.all([fetch('https://arweave.net/SQqLyX5MKMRhfetfIJXJOqht8qPCJyxf1VIUOwIUjas').then(function (r) {
    return r.json();
  }), fetch('https://arweave.net/syqhA_uEcZ-okZ94NHZCcY3CuUW4aK2njwOp6xQpjSE').then(function (r) {
    return r.json();
  }), fetch('https://arweave.net/Q7qbcNnOrqFbI4K5vLOecPeZn2YXE8-lEpNmMCCw39w').then(function (r) {
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
  fetch('https://raw.githubusercontent.com/redstone-finance/redstone-node/main/src/config/providers.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log('Providers:', Object.keys(data).length);
    var element = document.getElementById('tokens-number');
    element.innerHTML = Object.keys(data).length;
  });
}

var _window2 = window,
    is = _window2.is;

function isDeviceMobile() {
  return is.mobile() || is.iphone() || is.androidPhone() || is.windowsPhone() || is.blackberry();
}
/* -------------------------------------------------------------------------- */

/*                                Scroll To Top                               */

/* -------------------------------------------------------------------------- */


var scrollToTop = function scrollToTop() {
  document.querySelectorAll('[data-anchor] > a, [data-scroll-to]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var _utils$getData;

      e.preventDefault();
      var el = e.target;
      var id = utils.getData(el, 'scroll-to') || el.getAttribute('href');
      window.scroll({
        top: (_utils$getData = utils.getData(el, 'offset-top')) !== null && _utils$getData !== void 0 ? _utils$getData : utils.getOffset(document.querySelector(id)).top - 100,
        left: 0,
        behavior: 'smooth'
      });
      window.location.hash = id;
    });
  });
};

if (document.getElementById('members')) {
  var isMobile = isDeviceMobile();
  var members = [{
    name: 'Jakub',
    role: 'Founder',
    img: 'assets/img/team/jakub.png',
    email: 'jakub@redstone.finance',
    linkedin: 'https://www.linkedin.com/in/jakub-wojciechowski-5901b68/',
    bio: ''
  }, {
    name: 'Marcin',
    role: 'Head of Growth',
    img: 'assets/img/team/marcin.jpg',
    email: 'marcin@redstone.finance',
    linkedin: 'https://www.linkedin.com/in/marcin-kazmierczak1/',
    bio: 'Marcin handles strategic cooperation with DeFi protocols as well as Traditional businesses. Present in the blockchain ecosystem since 2018, his domains are Co-Opetition, Building long-term relationships, Education and "Growing the Pie" approach. Any doubt about cooperation options with Redstone? <a href="https://www.linkedin.com/in/marcin-kazmierczak1/" target="_blank">Write to me on LinkedIn!</a> Privately Travelling, Sports and understanding new cultures.'
  }, {
    name: 'Alex',
    role: 'Backend',
    img: 'assets/img/team/alex.png',
    email: 'alex@redstone.finance',
    linkedin: 'https://www.linkedin.com/in/alex-suvorov/',
    bio: 'Alex has over four years of experience as a full-stack developer in both startup and corporate environments. He enjoys solving problems and bring new ideas to life. He has developed a game-based <a href="https://codenplay.io/">educational coding platform</a> and many other projects with a variety of technologies and languages.'
  }, {
    name: 'Piotr',
    role: 'Blockchain',
    img: 'assets/img/team/ppe.jpeg',
    email: 'peter@redstone.finance',
    linkedin: 'https://www.linkedin.com/in/piotr-p%C4%99dziwiatr-2ab105215/',
    bio: 'Piotr considers himself an old guy (we would agree only judging his competency!), with over 15 years of experience in financial and insurance industry (and few startups), working as Software Developer and Technical Team Leader. Now he decided to take active part in the DeFi revolution. Privately father of three, fan of retro video games and drumming.'
  }, {
    name: 'Piotr',
    role: 'Frontend',
    img: 'assets/img/team/piotr.jpeg',
    email: 'pduda@redstone.finance',
    linkedin: 'https://www.linkedin.com/in/piotr-duda-62b66b63/',
    bio: 'New challenge? Sounds like a task for Piotr! In his not so long story he built a <a href="https://wutracing.pl/" target="_blank">racing car</a>, designed machinery for production of Tesla cars, developed numerous web apps and created furniture related company. Passionate full-stack developer with 4 years of experience, now exploring the world of blockchain!'
  }];
  var element = document.getElementById('members');
  var bio = document.getElementById('member-bio');
  members.forEach(function (member, index) {
    var card = document.createElement('div');
    card.classList.add('member-card', 'col-12', 'col-md-3', 'col-lg-2', 'mb-4');
    card.innerHTML += "\n            <img class=\"member-picture\" src=\"".concat(member.img, "\"/>\n            <div class=\"member-info fw-medium\">\n                <div class=\"member-name\">").concat(member.name, "</div>\n                <div class=\"member-role\">").concat(member.role, "</div>\n                <div class=\"member-social\">\n                    <a href=\"mailto:").concat(member.email, "\">\n                        <img src=\"assets/img/icons/mail.svg\">\n                    </a>\n                    <a href=\"").concat(member.linkedin, "\" target=\"_blank\">\n                        <img src=\"assets/img/icons/linkedin.svg\">\n                    </a>\n                </div>\n            </div>");
    element.appendChild(card);
    var memberBio = document.createElement('div');
    memberBio.innerHTML = member.bio;

    if (!isMobile) {
      memberBio.style.display = 'none';
      bio.appendChild(memberBio);
      card.addEventListener('mouseenter', function () {
        bio.childNodes.forEach(function (node, i) {
          if (i > 0) {
            node.style.display = i === index + 1 ? 'block' : 'none';
          }
        });
      });
    } else {
      memberBio.classList.add('text-center', 'mt-2', 'mb-4');
      element.appendChild(memberBio);
    }
  });
} // /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */


docReady(fetchData);
docReady(navbarInit);
docReady(detectorInit);
docReady(scrollToTop);
window.lazyLoadOptions = {// Your custom settings go here
};
window.addEventListener('LazyLoad::Initialized', function (event) {
  window.lazyLoadInstance = event.detail.instance;
}, false);
var videoElem = document.getElementById('redstone-video');

if (videoElem) {
  if (!isDeviceMobile()) {
    var scriptEle = document.createElement('script');
    scriptEle.setAttribute('src', 'vendors/@lottiefiles/lottie-player.js');
    document.getElementsByTagName('body')[0].appendChild(scriptEle);
    videoElem.innerHTML = "            \n        <lottie-player autoplay=\"true\" loop=\"true\" speed=\"1\" src=\"assets/animations/redstone.json\"\n                       style=\"height: 100%; background: transparent\" background=\"transparent\"></lottie-player>";
  } else {
    videoElem.innerHTML = '<video width="100%" src="assets/animations/redstone.mov" autoplay loop muted playsinline></video>';
  }
}

var cookieScript = document.getElementById('cookie-script');
cookieScript.addEventListener('load', function () {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#24355B',
        text: '#FFFFFF'
      },
      button: {
        background: '#FD627A',
        text: '#FFFFFF'
      }
    },
    showLink: false,
    theme: 'classic',
    position: 'bottom-right',
    content: {
      message: 'This site uses cookies to analyze traffic and offer a better browsing experience.',
      dismiss: 'Agree'
    }
  });
});
//# sourceMappingURL=theme.js.map
