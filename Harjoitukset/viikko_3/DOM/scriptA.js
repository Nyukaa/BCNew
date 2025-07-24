/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/
// document.getElementById("press").addEventListener("click", function () {
//   document.getElementById("content").textContent = "Hei, maailma!";
// });
document.getElementById("press").addEventListener("click", hello);
function hello() {
  document.getElementById("content").textContent = "Hei, maailma!";
}
// const hello = () => {
//   document.getElementById("content").textContent = "Hei, maailma!";
// };
