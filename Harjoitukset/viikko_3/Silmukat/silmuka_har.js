//Tee funktio nimeltä logOddNumbers:
// - Se tulostaa konsoliin kaikki parittomat numerot 1 ja 100 välillä.
// Eli 1, 3, 5, 7, 9, 11 jne. lukuun 99 asti.
const logOddNumbers = () => {
  for (let i = 1; i < 100; i += 2) {
    console.log(i);
  }
};
logOddNumbers();
console.log("tehtävä 2 ");
// Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.
const logEvenNumbers = () => {
  k = 98;
  for (let i = 2; i <= 50; i += 2) {
    console.log(i);
    console.log(k);
    k -= 2;
  }
};
logEvenNumbers();

//4. Tee funktio countEvenNumbers, joka pyytää käyttäjää syöttämään 20 lukua.
// Kun kaikki luvut on syötetty, ohjelman tulisi näyttää konsolissa montako näistä luvuista on parillisia.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
const countEvenNumbers = () => {
  let lask = 0;
  for (let i = 0; i <= 5; i++) {
    let sala = prompt("Anna numero");
    if (sala % 2) {
      lask++;
    }
  }
  console.log("Montako näistä luvuista on parillisiaNumber of odd ", lask);
};
countEvenNumbers();
