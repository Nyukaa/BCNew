const pancakeSelect = document.getElementById("type");
const toppingCheckboxes = document.querySelectorAll(".topping,.extra");
const priceBanner = document.querySelector(".price-banner");
let totalPrice = document.getElementById("totalPrice");
let totalPriceDisplay = document.getElementById("totalPriceDisplay");
function calculateTotal() {
  let allPrice = Number(pancakeSelect.value);
  toppingCheckboxes.forEach((cb) => {
    if (cb.checked) allPrice += Number(cb.value);
  });
  totalPriceDisplay.textContent = allPrice + "€";
  totalPrice.textContent = allPrice + "€";

  priceBanner.classList.add("updated");
  setTimeout(() => priceBanner.classList.remove("updated"), 400);
}
pancakeSelect.addEventListener("change", calculateTotal);
toppingCheckboxes.forEach((cb) =>
  cb.addEventListener("change", calculateTotal)
);
