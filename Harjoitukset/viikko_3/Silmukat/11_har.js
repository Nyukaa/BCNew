/* Kirjoita funktio nimeltä generateMultiplicationTable:
- Ota syötteenä luku (esim. 5).
- Käytä silmukkaa luodaksesi kertotaulun kyseiselle luvulle.
Tulosta taulu konsoliin.

Esimerkki luvulle 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50

*/
const generateMultiplicationTable = (luku) => {
  for (let index = 0; index < 10; index++) {
    console.log(`${luku}*${index}=${luku * index}`);
  }
};
generateMultiplicationTable(9);
