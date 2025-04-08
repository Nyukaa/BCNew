/* 
Kirjoita funktio nimeltä countdownTimer:
- Ota syötteenä luku (esim. 10) ja simuloi lähtölaskenta konsolissa.
- Tulosta jokainen luku laskevassa järjestyksessä nollaan asti
- Lopuksi tulosta: "Aika loppui!".
*/
const countdownTimer = (luku) => {
  for (let index = luku; index >= 0; index--) {
    console.log(index);
  }
  console.log("Aika loppui!");
};
countdownTimer(8);
