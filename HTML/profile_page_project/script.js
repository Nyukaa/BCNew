const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
});
const burger = document.getElementById("burgerMenu");
const nav = document.querySelector(".mobile-nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove("active");
  }
});
const scrollBtn = document.getElementById("scrollTopBtn");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
let focusedElement;

const closeModal = () => {
  modal.style.display = "none";
  focusedElement.focus();
};

document.querySelectorAll(".photo-item > a").forEach((link) => {
  link.addEventListener("click", () => {
    modal.style.display = "block";
    const img = link.querySelector(".hover-image");
    modalImg.src = img.src;
    focusedElement = link;
    closeBtn.focus();
  });
});

closeBtn.addEventListener("click", () => {
  closeModal();
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
