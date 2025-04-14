function showUser() {
  const inputValue = document.getElementById("user").value;
  document.getElementById("output").textContent =
    "Käyttäjä syötti " + inputValue;
}
document.getElementById("submitBtn").addEventListener("click", showUser);
