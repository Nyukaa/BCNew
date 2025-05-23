document.getElementById("loginBtn").addEventListener("click", checkPin);
document
  .getElementById("pinInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkPin();
    }
  });
function checkPin() {
  const inputField = document.getElementById("pinInput");
  const loginError = document.getElementById("loginError");
  const mainContent = document.getElementById("mainContent");
  const loginSection = document.getElementById("loginSection");

  if (inputField.value === "1234") {
    loginSection.classList.add("hidden");
    mainContent.classList.remove("hidden");
    renderOrders();
  } else {
    loginError.style.display = "block";
  }
}
const ordersContainer = document.getElementById("ordersContainer");
let orders = JSON.parse(localStorage.getItem("orders")) || [];

const statusColors = {
  waiting: "status-waiting",
  ready: "status-ready",
  delivered: "status-delivered",
};
const orderFilterInput = document.getElementById("orderFilter");
orderFilterInput.addEventListener("input", renderOrders);

function renderOrders() {
  const filterValue = document
    .getElementById("orderFilter")
    .value.toLowerCase()
    .trim();
  ordersContainer.innerHTML = "";

  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(filterValue)
  );

  if (filteredOrders.length === 0) {
    ordersContainer.innerHTML = "<p>Ei tilauksia löytynyt.</p>";
    return;
  }

  filteredOrders.forEach((order) => {
    const orderDiv = document.createElement("div");
    orderDiv.className = `order ${statusColors[order.status]}`;

    const toppingsText =
      order.toppings.length > 0 ? order.toppings.join(", ") : "Ei valittu";
    const extrasText =
      order.extras.length > 0 ? order.extras.join(", ") : "Ei valittu";

    orderDiv.innerHTML = `
      <h2>Tilaus #${order.id}</h2>
      <p><strong>Asiakas:</strong> ${order.customerName}</p>
      <p><strong>Pannukakku:</strong> ${order.selectedPancake}</p>
      <p><strong>Täytteet:</strong> ${toppingsText}</p>
      <p><strong>Lisukkeet:</strong> ${extrasText}</p>
      <p><strong>Toimitus:</strong> ${order.deliveryMethod}</p>
      <p><strong>Kokonaishinta:</strong> ${order.totalPrice} €</p>
      <label for="status-${order.id}"><strong>Tila:</strong></label>
      <select id="status-${order.id}">
        <option value="waiting" ${
          order.status === "waiting" ? "selected" : ""
        }>Odottaa</option>
        <option value="ready" ${
          order.status === "ready" ? "selected" : ""
        }>Valmis</option>
        <option value="delivered" ${
          order.status === "delivered" ? "selected" : ""
        }>Toimitettu</option>
      </select>
      <br /><br />
    `;

    if (order.status === "delivered") {
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Poista tilaus";
      deleteBtn.addEventListener("click", () => {
        orders = orders.filter((o) => o.id !== order.id);
        saveOrders();
        renderOrders();
      });
      orderDiv.appendChild(deleteBtn);
    }

    const statusSelect = orderDiv.querySelector("select");
    statusSelect.addEventListener("change", (e) => {
      order.status = e.target.value;
      saveOrders();
      renderOrders();
    });

    ordersContainer.appendChild(orderDiv);
  });
}
document.getElementById("sortTilaukset").addEventListener("click", () => {
  const statusOrder = { waiting: 0, ready: 1, delivered: 2 };
  orders.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

  saveOrders();
  // console.log(orders);
  renderOrders();
});
function saveOrders() {
  localStorage.setItem("orders", JSON.stringify(orders));
}
window.addEventListener("storage", (event) => {
  if (event.key === "orders") {
    orders = JSON.parse(localStorage.getItem("orders")) || [];
    renderOrders();
  }
});
