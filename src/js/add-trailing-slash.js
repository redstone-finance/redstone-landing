(function () {
  if (
    !window.location.pathname.endsWith("/") &&
    !window.location.pathname.split("/").pop().includes(".")
  ) {
    var newUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "/" +
      window.location.search;
    window.history.replaceState({ path: newUrl }, "", newUrl);
  }
})();
