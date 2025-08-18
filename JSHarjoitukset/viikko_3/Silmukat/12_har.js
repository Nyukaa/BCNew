/* Use HTML
Kirjoita funktio nimeltä buildGroceryList:
- Pyydä käyttäjää syöttämään ruokakauppaostoksia yksi kerrallaan.
- Lopeta, kun käyttäjä kirjoittaa "valmis".
Tulosta koko ostoslista konsoliin.
*/
const buildGroceryList = () => {
  let ruoka = "";
  let all = "";
  while (ruoka !== "valmis") {
    ruoka = prompt("kirjoitta ostos, to Exit valmis");
    if (ruoka !== "valmis") {
      all = all + " " + ruoka;
    } else {
      break;
    }
  }
  return all;
};
console.log(buildGroceryList());
