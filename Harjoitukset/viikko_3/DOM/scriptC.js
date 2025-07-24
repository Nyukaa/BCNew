/* Kopioi tähän koodi edellisestä tehtävästä. Kopioi myös tekemäsi HTML tiedosto tähän samaan kansioon. 

Lisää sivulle toinen nappi, jota klikkaamalla laskurin arvo vähenee yhdellä. 

Muista lisätä uudelle napille oma id ja sille oma tapahtumankuuntelija. Tee kaksi funktiota, jotka muuttavat saman muuttujan arvoa. 
*/
document.getElementById("pressBtnPlus").addEventListener("click", addOne);
function addOne() {
  const count = document.getElementById("count"); // Находим элемент со счётчиком
  let currentValue = parseInt(count.textContent); // Получаем текущее значение
  count.textContent = currentValue + 1; // Увеличиваем и обновляем
}
document.getElementById("pressBtnMinus").addEventListener("click", minusOne);
function minusOne() {
  const count = document.getElementById("count");
  let currentValue = parseInt(count.textContent);
  count.textContent = currentValue - 1;
}
