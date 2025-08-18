/*
Luo HTML-tiedosto, joka sisältää:
- <button> taustavärin vaihtamiseen.
- <input>-kenttä, johon käyttäjä voi syöttää värin.
- <p>-elementti, jonka tekstin väri muuttuu syötetyn värin mukaan.

Kirjoita JavaScript-koodi, joka:
- Vaihtaa taustavärin satunnaiseksi, kun painiketta klikataan.
- Päivittää kappaleen tekstivärin vastaamaan käyttäjän syöttämää arvoa.
*/
const inputField = document.getElementById("color");
const button = document.getElementById("btnColor");
const textP = document.getElementById("textP");

button.addEventListener("click", changeBack);
function changeBack() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = randomColor;

  textP.style.color = inputField.value.trim();
  inputField.value = "";
}
