import utils from "./utils";
/* -------------------------------------------------------------------------- */
/*                                Scroll To Top                               */
/* -------------------------------------------------------------------------- */
const scrollToTop = () => {
  document
    .querySelectorAll("[data-anchor] > a, [data-scroll-to]")
    .forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const el = e.target;
        const id = utils.getData(el, "scroll-to") || el.getAttribute("href");
        console.log(utils.getData(el, "scroll-to"));
        console.log(el.getAttribute("href"));
        console.log(id);
        console.log(utils.getData(el, "offset-top"));
        window.scroll({
          top:
            utils.getData(el, "offset-top") ??
            utils.getOffset(document.querySelector(id)).top - 100,
          left: 0,
          behavior: "smooth",
        });
        window.location.hash = id;
      });
    });
};
export default scrollToTop;
