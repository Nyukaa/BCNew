/* 
Kirjoita funktio sumFromOneToHundred:
- Laske silmukan avulla kaikkien kokonaisulukujen summa välillä 1 ja 100
- Tulosta lopputulos konsoliin
*/
const sumFromOneToHundred = () => {
  let summa = 0;
  for (let index = 1; index < 100; index++) {
    summa += index;
  }
  return summa;
};
console.log("Summa 1..100 is", sumFromOneToHundred());
