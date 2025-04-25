const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Сохраняем выбранную тему в localStorage
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// При загрузке страницы проверяем сохранённую тему
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
});
const scrollLine = document.querySelector(".scroll-line");

window.addEventListener("scroll", () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / height) * 100;
  scrollLine.style.height = `${scrolled}%`;
});
const scrollBtn = document.getElementById("scrollTopBtn");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Показать/скрыть кнопку в зависимости от прокрутки
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
