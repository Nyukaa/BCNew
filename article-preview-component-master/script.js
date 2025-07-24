const shareButton = document.getElementById("shareButton");
const popupMenu = document.getElementById("popupMenu");

// Показать/скрыть при клике
shareButton.addEventListener("click", (e) => {
  e.stopPropagation();

  const isVisible = popupMenu.style.display === "flex";

  popupMenu.style.display = isVisible ? "none" : "flex";

  // Меняем фон кнопки
  shareButton.style.backgroundColor = isVisible
    ? "hsl(210, 46%, 95%)"
    : "#48556a";

  // Меняем цвет иконки внутри (если это svg path)
  const svgPath = shareButton.querySelector("path");
  if (svgPath) {
    svgPath.setAttribute("fill", isVisible ? "#6E8098" : "#ffffff");
  }
});

// Скрыть при клике вне
document.addEventListener("click", () => {
  popupMenu.style.display = "none";
  shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";

  const svgPath = shareButton.querySelector("path");
  if (svgPath) {
    svgPath.setAttribute("fill", "#6E8098");
  }
});

// Чтобы клик внутри меню не закрывал его
popupMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
