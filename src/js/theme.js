import { docReady } from './utils';
import navbarInit from './bootstrap-navbar';
import detectorInit from './detector';
import scrollToTop from './scroll-to-top';
import isDeviceMobile from './ismobile';
import fetchData from './fetched';


// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(fetchData);
docReady(navbarInit);
docReady(detectorInit);
docReady(scrollToTop);

  window.lazyLoadOptions = {
    // Your custom settings go here
  };
  
  var videoElem = document.getElementById("redstone-video");

  if (videoElem) {
    if (!isDeviceMobile()) {
      var scriptEle = document.createElement("script");
      scriptEle.setAttribute("src", "vendors/@lottiefiles/lottie-player.js");
    
      document.getElementsByTagName("body")[0].appendChild(scriptEle);
  
      videoElem.innerHTML = `            
        <lottie-player autoplay="true" loop="true" speed="1" src="assets/animations/redstone.json"
                       style="height: 100%; background: transparent" background="transparent"></lottie-player>`;
  
    } else {
      videoElem.innerHTML = `<video width="100%" src="assets/animations/redstone.mov" autoplay loop muted playsinline></video>`;
    }
  }

var cookieScript = document.getElementById("cookie-script");

cookieScript.addEventListener('load', function () {
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
    "content": {
      "message": "This site uses cookies to analyze traffic and offer a better browsing experience.",
      "dismiss": "Agree"
    }
  });
});
