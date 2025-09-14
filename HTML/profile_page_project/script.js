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
const modalText = document.getElementById("modalText"); // new
const closeBtn = document.querySelector(".close");
let focusedElement;

const closeModal = () => {
  modal.style.display = "none";
  focusedElement.focus();
};

// Loop through each project link
document.querySelectorAll(".photo-item > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";

    const img = link.querySelector(".hover-image") || link.querySelector("img");
    modalImg.src = img.src;

    focusedElement = link;
    closeBtn.focus();

    // Find the parent .photo-item
    const photoItem = link.closest(".photo-item");

    // Get the description paragraph (the second <p> in your structure)
    const description = photoItem.querySelectorAll("p")[1];
    modalText.innerHTML = description ? description.innerHTML : "";
  });
});

// Close modal
closeBtn.addEventListener("click", closeModal);

// Optional: click outside modal to close
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// const modal = document.getElementById("modal");
// const modalImg = document.getElementById("modalImg");
// const closeBtn = document.querySelector(".close");
// let focusedElement;

// const closeModal = () => {
//   modal.style.display = "none";
//   focusedElement.focus();
// };

// document.querySelectorAll(".photo-item > a").forEach((link) => {
//   link.addEventListener("click", () => {
//     modal.style.display = "block";
//     const img = link.querySelector(".hover-image");
//     modalImg.src = img.src;
//     focusedElement = link;
//     closeBtn.focus();
//   });
// });

// closeBtn.addEventListener("click", () => {
//   closeModal();
// });

// window.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     closeModal();
//   }
// });

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
