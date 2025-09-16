// Modal functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");
let focusedElement;

const closeModal = () => {
  modal.style.display = "none";
  focusedElement.focus();
};

document.querySelectorAll(".photo-item > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";

    const img = link.querySelector(".hover-image") || link.querySelector("img");
    modalImg.src = img.src;

    focusedElement = link;
    closeBtn.focus();

    const photoItem = link.closest(".photo-item");
    const description = photoItem.querySelectorAll("p")[1];
    modalText.innerHTML = description ? description.innerHTML : "";
  });
});

// Close modal on close button click
closeBtn.addEventListener("click", closeModal);

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close on Escape key
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
