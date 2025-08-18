/*
Luo HTML-tiedosto, jossa on <input>-kenttä ja <div>, jonka ID on displayText.
Kirjoita JavaScript-koodi, joka:
- Päivittää jatkuvasti <div>-elementin sisällön input-kentän arvolla sitä mukaa, kun käyttäjä kirjoittaa.
- Käyttää input-tapahtumaa, jotta päivitys tapahtuu reaaliajassa.
*/
const inputField = document.getElementById("input");
const displayDiv = document.getElementById("displayText");

inputField.addEventListener("input", function () {
  displayDiv.textContent = inputField.value;
});
