// Tee funktio calculateAverageUntilZero, joka pyytää käyttäjää syöttämään numeroita,kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvo.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
const calculateAverageUntilZero = () => {
  let i = 1;
  let summa = 0;
  let average = 0;
  while (true) {
    let numero = parseFloat(prompt("Numero, 0 for EXIT"));
    //console.log(numero);

    if (numero === 0) {
      break;
    }

    if (isNaN(numero) || numero < 0) {
      continue;
    }
    summa += numero;

    average = summa / i;
    // console.log(summa);
    alert("Average numeroista is " + average);
    i++;
  }
  console.log("Average numeroista is ", average);
};
calculateAverageUntilZero();
