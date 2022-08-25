const openTab = (event, tabName) => {
  let contentIndex;
  let linkIndex;
  const tabContents = document.getElementsByClassName("tab-content");
  for (contentIndex = 0; contentIndex < tabContents.length; contentIndex += 1) {
    tabContents[contentIndex].style.display = "none";
  }
  const tabLinks = document.getElementsByClassName("tab-button");
  for (linkIndex = 0; linkIndex < tabLinks.length; linkIndex += 1) {
    tabLinks[linkIndex].style["border-bottom"] = "1px solid #e5e7eb";
  }
  document.getElementById(tabName).style.display = "flex";
  event.currentTarget.style["border-bottom"] = "1px solid #FD627A";
};

export default openTab;
