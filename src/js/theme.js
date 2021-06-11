import { docReady } from './utils';
import navbarInit from './bootstrap-navbar';
import detectorInit from './detector';
import scrollToTop from './scroll-to-top';


// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(navbarInit);
docReady(detectorInit);
docReady(scrollToTop);

window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#24355B",
        "text": "#FFFFFF"
      },
      "button": {
        "background": "#FD627A",
        "text": "#FFFFFF"
      }
    },
    "showLink": false,
    "theme": "classic",
    "position": "bottom-right",
    "content": {
      "message": "This site uses cookies to analyze traffic and offer a better browsing experience.",
      "dismiss": "Agree"
    }
  });
