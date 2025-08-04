const shareButton = document.getElementById("shareButton");
const popupMenu = document.getElementById("popupMenu");

shareButton.addEventListener("click", (e) => {
  e.stopPropagation();

  const isVisible = popupMenu.style.display === "flex";

  popupMenu.style.display = isVisible ? "none" : "flex";

  shareButton.style.backgroundColor = isVisible
    ? "hsl(210, 46%, 95%)"
    : "#48556a";

  const svgPath = shareButton.querySelector("path");
  if (svgPath) {
    svgPath.setAttribute("fill", isVisible ? "#6E8098" : "#ffffff");
  }
});

document.addEventListener("click", () => {
  popupMenu.style.display = "none";
  shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";

  const svgPath = shareButton.querySelector("path");
  if (svgPath) {
    svgPath.setAttribute("fill", "#6E8098");
  }
});

popupMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
