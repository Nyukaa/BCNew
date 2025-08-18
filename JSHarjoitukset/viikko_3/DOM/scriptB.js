/* Toteuta HTML sivu, jolla on nappi. Lisää tälle <button> elementille id. 
Napin vieressä on numero nolla. Lisää tälle tekstipaikalle myös id. 

Lisää napille getElementById:n avulla tapahtumakäsittelijä, joka kuuntelee 
"click" -tapahtumaa. Kun nappia painetaan, verkkosivun numeron arvo kasvaa yhdellä. 

*/
document.getElementById("pressBtn").addEventListener("click", addOne);
function addOne() {
  const counter = document.getElementById("counter"); // Находим элемент со счётчиком
  let currentValue = parseInt(counter.textContent); // Получаем текущее значение
  counter.textContent = currentValue + 1; // Увеличиваем и обновляем
}
