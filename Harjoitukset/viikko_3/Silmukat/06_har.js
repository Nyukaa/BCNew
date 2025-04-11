/* Tee funktio askToContinue, joka 
1. Kysyy käyttäjältä yhtä numeroa. 
2. Tämän jälkeen ohjelma kysyy: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
3. Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. 
4. Jos vastaus on 'e', ohjelma lopettaa. 
5. Lopetettuaan ohjelma laskee ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvon.*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
const askToContinue = () => {
  let i = 0;
  let summa = 0;
  let average = 0;
  while (true) {
    let numero = parseFloat(prompt("Numero "));
    //console.log(numero);

    if (isNaN(numero) || numero < 0) {
      continue;
    }
    summa += numero;
    i++;
    average = summa / i;

    // console.log(summa);
    // alert("Average numeroista is " + average);
    let kysy = "";
    while (kysy !== "e" && kysy !== "k") {
      kysy = prompt("e for EXIT, k for continue");
    }
    if (kysy === "e") {
      break;
    } else if (kysy === "k") {
      continue;
    }
  }
  console.log("Average numeroista is ", average);
};
askToContinue();
