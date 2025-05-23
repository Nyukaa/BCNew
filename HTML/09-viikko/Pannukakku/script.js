const form = document.getElementById("pancakeForm");

const pancakeSelect = document.getElementById("type");
const totalPrice = document.getElementById("totalPrice");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const priceBanner = document.querySelector(".price-banner");
const editOrderBtn = document.getElementById("editOrder");
const confirmOrderBtn = document.getElementById("confirmOrder");

let toppings = [];
let extras = [];
let currentPrice = 0;

form.addEventListener("change", () => {
  const selectedOption = pancakeSelect.options[pancakeSelect.selectedIndex];
  let basePrice = Number(selectedOption.dataset.price);
  toppings = [];
  extras = [];

  const toppingCheckboxes = form.querySelectorAll(".topping:checked");
  const extraCheckboxes = form.querySelectorAll(".extra:checked");
  const delivery = form.querySelector(".delivery:checked");

  toppingCheckboxes.forEach((cb) => {
    basePrice += Number(cb.dataset.price);
    toppings.push(cb.parentElement.textContent.trim());
  });

  extraCheckboxes.forEach((cb) => {
    basePrice += Number(cb.dataset.price);
    extras.push(cb.parentElement.textContent.trim());
  });

  if (delivery) {
    basePrice += Number(delivery.dataset.price);
  }

  currentPrice = basePrice;
  totalPrice.textContent = basePrice + "€";
  totalPriceDisplay.textContent = basePrice + "€";

  priceBanner.classList.remove("updated");
  void priceBanner.offsetWidth;
  priceBanner.classList.add("updated");
});

const seeOrderButton = document.getElementById("seeOrder");
const summaryText = document.getElementById("summaryText");
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close");

// console.log("Modal display at start:", getComputedStyle(modal).display);
seeOrderButton.addEventListener("click", () => {
  // console.log("modal was opened");
  const customerName = document.getElementById("customerName").value;
  const selectedPancake =
    pancakeSelect.options[pancakeSelect.selectedIndex].text;
  const selectedDelivery = form.querySelector(".delivery:checked")
    ? form.querySelector(".delivery:checked").parentElement.textContent.trim()
    : "Ei valittu";

  summaryText.innerHTML = `
    <strong>Asiakas:</strong> ${customerName}<br>
    <strong>Pannukakku:</strong> ${selectedPancake}<br>
    <strong>Täytteet:</strong> ${toppings.join(", ") || "Ei valittu"}<br>
    <strong>Lisukkeet:</strong> ${extras.join(", ") || "Ei valittu"}<br>
    <strong>Toimitus:</strong> ${selectedDelivery}<br>
    <strong>Kokonaishinta:</strong> ${currentPrice}€
  `;
  modal.style.display = "block";
});

confirmOrderBtn.addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;
  const selectedPancake =
    pancakeSelect.options[pancakeSelect.selectedIndex].text;
  const selectedDelivery = form.querySelector(".delivery:checked")
    ? form.querySelector(".delivery:checked").parentElement.textContent.trim()
    : "Ei valittu";

  const order = {
    id: Date.now(),
    customerName,
    selectedPancake,
    toppings,
    extras,
    deliveryMethod: selectedDelivery,
    totalPrice: currentPrice,
    status: "waiting",
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);

  localStorage.setItem("orders", JSON.stringify(orders));
  console.log(orders);

  alert("Tilaus on vahvistettu! Kiitos!");
  modal.style.display = "none";
  form.reset();
  totalPrice.textContent = "5€";
  totalPriceDisplay.textContent = "5€";
  priceBanner.classList.remove("updated");
});
editOrderBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
