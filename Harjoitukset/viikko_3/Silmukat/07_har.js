/* 
Kirjoita funktio nimeltä sumAndAverage:
- Pyydä käyttäjältä 10 numeroa
- Laske ja lokita konsoliin: 
    - Kaikkien numeroiden summa.
    - Annettujen numeroiden keskiarvo.
    - Suurin ja pienin numero
*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
const sumAndAverage = () => {
  let summa = 0;
  let average = 0;
  let maxNum = null;
  let minNum = null;
  for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt("Anna numero"));

    while (isNaN(numero)) {
      numero = parseFloat(prompt("Ei, numero, anna numero"));
    }
    summa += numero;
    average = summa / i;
    maxNum = Math.max(numero, maxNum);
    minNum = Math.min(numero, minNum);
    //console.log("numero", numero);
  }
  console.log("Average numeroista is ", average.toFixed(2));
  console.log("Summa ", summa.toFixed(2));
  console.log("Max is ", maxNum);
  console.log("Min is ", minNum);
};
sumAndAverage();
