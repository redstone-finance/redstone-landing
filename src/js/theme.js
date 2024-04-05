import { docReady } from "./utils";
import navbarInit from "./bootstrap-navbar";
import detectorInit from "./detector";
import scrollToTop from "./scroll-to-top";
import fetchData from "./fetched";

// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(fetchData);
docReady(navbarInit);
docReady(detectorInit);
docReady(scrollToTop);

var videoElem = document.getElementById("redstone-video");

if (videoElem) {
  videoElem.innerHTML = `
  <video
    position="relative"
    width="100%"
    height="100%"
    style="
      border:none;
      -webkit-mask-image: -webkit-radial-gradient(white, black);
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
    "
    name="RedStone"
    autoplay="autoplay"
    loop="loop"
    muted
    defaultMuted
    playsinline
  >
    <source src="/assets/animations/redstone-landing-animation.mp4">
  </video>
  `;
}

var cookieScript = document.getElementById("cookie-script");

cookieScript.addEventListener("load", function () {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: "#24355B",
        text: "#FFFFFF",
      },
      button: {
        background: "#FD627A",
        text: "#FFFFFF",
      },
    },
    showLink: false,
    theme: "classic",
    content: {
      message:
        "This site uses cookies to analyze traffic and offer a better browsing experience.",
      dismiss: "Agree",
    },
  });
});
