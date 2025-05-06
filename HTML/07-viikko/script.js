const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // Haetaan kaikki checkboxit
  const check1 = document.getElementById("fnameCh").checked;
  const check2 = document.getElementById("lnameCh").checked;
  const check3 = document.getElementById("bnameCh").checked;

  // Tarkistus: vain 1 ja 3 saa olla valittuna
  if (check1 && !check2 && check3) {
    alert("Oikein! Väitteet 1 ja 3 ovat totta.");
  } else {
    event.preventDefault(); // Estä lähetys
    alert("Vain väitteet 1 ja 3 on merkitty todeksi.");
  }
});
