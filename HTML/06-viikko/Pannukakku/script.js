const form = document.getElementById("pancakeForm");

const pancakeSelect = document.getElementById("type");
const totalPrice = document.getElementById("totalPrice");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const priceBanner = document.querySelector(".price-banner");
let toppings = [];
let extras = [];
form.addEventListener("change", () => {
  // Получаем выбранную опцию и извлекаем её атрибут data-price
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

  totalPrice.textContent = basePrice + "€";
  totalPriceDisplay.textContent = basePrice + "€";
  // Анимация для price-banner
  priceBanner.classList.remove("updated");
  void priceBanner.offsetWidth;
  priceBanner.classList.add("updated");
});
// to check order
const seeOrderButton = document.getElementById("seeOrder");
const summaryText = document.getElementById("summaryText");

seeOrderButton.addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;
  const selectedPancake =
    pancakeSelect.options[pancakeSelect.selectedIndex].text;
  const selectedDelivery = form
    .querySelector(".delivery:checked")
    .parentElement.textContent.trim();

  summaryText.innerHTML = `
    <strong>Asiakas:</strong> ${customerName}<br>
    <strong>Pannukakku:</strong> ${selectedPancake}<br>
    <strong>Täytteet:</strong> ${toppings.join(", ") || "Ei valittu"}<br>
    <strong>Lisukkeet:</strong> ${extras.join(", ") || "Ei valittu"}<br>
    <strong>Toimitus:</strong> ${selectedDelivery}<br>
    <strong>Kokonaishinta:</strong> ${totalPriceDisplay.textContent}
  `;
});

// priceBanner.classList.remove("updated"); // сначала убираем класс
// void priceBanner.offsetWidth; // принудительно перерисовываем элемент
// priceBanner.classList.add("updated"); // снова добавляем класс для анимации
// const pancakeSelect = document.getElementById("type");
// const toppingCheckboxes = document.querySelectorAll(
//   ".topping,.extra,.delivery "
// );
// const priceBanner = document.querySelector(".price-banner");
// let toppings = [];
// let extras = [];
// let totalPrice = document.getElementById("totalPrice");
// let totalPriceDisplay = document.getElementById("totalPriceDisplay");
// function calculateTotal() {
//   let allPrice = Number(pancakeSelect.value);

//   toppingCheckboxes.forEach((cb) => {
//     if (cb.checked) {
//       allPrice += Number(cb.value);
//       topping.push = toppingCheckboxes.textContent;
//       console.log(topping);
//     }
//   });
//   totalPriceDisplay.textContent = allPrice + "€";
//   totalPrice.textContent = allPrice + "€";

//   priceBanner.classList.add("updated");
//   setTimeout(() => priceBanner.classList.remove("updated"), 400);
// }
// pancakeSelect.addEventListener("change", calculateTotal);
// toppingCheckboxes.forEach((cb) =>
//   cb.addEventListener("change", calculateTotal)
// );
