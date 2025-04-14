function showUser() {
  const inputValue = document.getElementById("user").value;
  document.getElementById("output").textContent =
    "Käyttäjä syötti " + inputValue;
}
document.getElementById("submitBtn").addEventListener("click", showUser);

document.getElementById("nappi").addEventListener("click", function () {
  document.getElementById("tekstiOutput").textContent =
    document.getElementById("tekstiInput").value;
});
