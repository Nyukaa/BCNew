const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
  console.log("open");
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
//copy text btn
document.querySelector("#copyBtn").addEventListener("click", () => {
  const text = document.querySelector("#copyText").textContent;
  navigator.clipboard.writeText(text);
});

//printing text by letter
const text = " Привет, мир!";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.querySelector("#typing").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 500);
  } else {
    i = 0;
    typeEffect();
  }
}
typeEffect();
