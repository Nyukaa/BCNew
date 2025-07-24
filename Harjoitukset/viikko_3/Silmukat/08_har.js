/* 
Kirjota funktio nimeltä findMinMax:
- Kysy käyttäjältä kuinka monta numeroa he haluavat antaa. 
- Sen jälkeen pyydä käyttäjältä heidän haluamansa määrä numeroita. 
- Kun numerot on syötetty päättele ja tulosta konsoliin:
    - Pienin numero.
    - Suurin numero. 
*/
const findMinMax = () => {
  let monta = "a";
  maxNum = null;
  minNum = null;
  while (isNaN(monta) || monta < 0) {
    monta = prompt("kuinka monta numeroa he haluavat antaa");
  }

  for (let index = 0; index < monta; index++) {
    let numero = "a";
    while (isNaN(numero)) {
      numero = parseFloat(prompt("kiriojta numeron "));
    }

    maxNum = Math.max(numero, maxNum);
    minNum = Math.min(numero, minNum);
  }
  console.log("minNum", minNum, "maxNum", maxNum);
};
findMinMax();
