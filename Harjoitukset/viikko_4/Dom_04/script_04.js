/*
Luo HTML tiedosto, jossa on <p> elementti ja nappi. 
Kirjoita JavaScript-koodi, joka vaihtaa tekstiosion näkyvyyttä - päälle ja pois - nappia painamalla.
 */
const parag = document.getElementById("textVis");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  if (parag.style.display === "none") {
    parag.style.display = "block"; // показываем
  } else {
    parag.style.display = "none"; // скрываем
  }
});
