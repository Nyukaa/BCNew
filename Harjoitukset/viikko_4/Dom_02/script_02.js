/*
Käytä HTML-tiedostoa, jossa on <input>-kenttä, <button> ja <ul>-lista, jonka ID on fruitList.
Kirjoita JavaScript-koodi, joka:
- Hakee arvon input-kentästä, kun painiketta klikataan.
- Luo uuden <li>-elementin ja asettaa sen tekstisisällöksi input-kentän arvon.
- Lisää <li>-elementin listaan.
- Tyhjentää input-kentän hedelmän lisäämisen jälkeen.
*/
function showAddFruct() {
  let inputValue = document.getElementById("fruitInput").value;
  // Create an "li" node:
  const node = document.createElement("li");

  // Create a text node:
  const textnode = document.createTextNode(inputValue);

  // Append the text node to the "li" node:
  node.appendChild(textnode);
  // Append the "li" node to the list:
  document.getElementById("fruitList").appendChild(node);
  document.getElementById("fruitInput").value = "";
}
document.getElementById("addFruitBtn").addEventListener("click", showAddFruct);

// document
//   .getElementById("fruitInput")
//   .addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       showAddFruct();
//     }
//   });
