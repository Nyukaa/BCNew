/* 
Kirjoita funktio nimeltä checkAdult:
Ota ikä parametrina.
Jos ikä on 18 tai enemmän, palauta "Olet aikuinen."
Muussa tapauksessa älä palauta mitään.
Kutsu funktiota eri ikäarvoilla ja tulosta tulos.
*/
checkAdult = (ika) => {
  if (ika >= 18) {
    return "Olet aikuinen.";
  }
  return "";
};
console.log(checkAdult(27));
console.log(checkAdult(11));
console.log(checkAdult("65"));
/* 
Kirjoita funktio nimeltä checkForFox:
Ota looginen parametri hasFox.
Jos hasFox on tosi, palauta "Sinulla on lemmikkikettu!"
Muussa tapauksessa palauta "Ei havaittu kettua!"
Kutsu funktiota arvoilla true ja false ja tulosta tulos.
*/
checkForFox = (hasFox) =>
  hasFox ? "Sinulla on lemmikkikettu!" : "Ei havaittu kettua!";
console.log(checkForFox(true));
console.log(checkForFox(false));
/* 
Kirjoita funktio nimeltä getGrade:
Ota pistemäärä parametrina.
Jos pistemäärä on 90 tai enemmän, palauta "Arvosana Kiitettävä".
Jos pistemäärä on välillä 80–89, palauta "Arvosana Hyvä".
Kaikilla muilla pistemäärillä palauta "Avosana Tyydyttävä".
Kutsu funktiota pisteillä kuten 85 ja 75 ja tulosta tulos.
*/
function getGrade(piste) {
  if (piste >= 90) {
    return "Arvosana Kiitettävä";
  }
  if (piste >= 80 && piste < 90) {
    return "Arvosana Hyvä";
  } else {
    return "Avosana Tyydyttävä";
  }
}
console.log("Piste: ", getGrade(91));
console.log("Piste: ", getGrade(33));
console.log("Piste: ", getGrade(75));
console.log("Piste: ", getGrade(85));
function checkPist(pist) {
  switch (true) {
    case pist >= 90:
      return "Arvosana Kiitettävä";
      break;
    case pist >= 80 && pist < 90:
      return "Arvosana Hyvä";
      break;

    default:
      return "Avosana Tyydyttävä";
  }
}
console.log("Piste switch: ", checkPist(85));
/* 
Kirjoita funktio nimeltä canVote:
Ota ikä parametrina.
Palauta true, jos ikä on 18 tai enemmän, muuten false.
Tulosta "Saat äänestää" tai "Et saa vielä äänestää" funktion palauttaman tuloksen perusteella.
*/
canVote = (ika) => {
  if (ika >= 18) return true;
  return false;
};
if (canVote(18)) {
  console.log("Saat äänestää");
} else {
  console.log("Et saa vielä äänestää");
}
/* 
Kirjoita funktio nimeltä checkAnimal:
Ota parametri animalType.

Käytä ternary operatoria palauttamaan:
- "Sinulla on fiksu seuralainen!" jos animalType on "fox".
- "Ei kettu, mutta silti kiva!" muussa tapauksessa.

Kutsu funktiota arvoilla kuten "fox" ja "cat".
*/
checkAnimal = (animalType) =>
  animalType === "fox"
    ? "Sinulla on fiksu seuralainen!"
    : "Ei kettu, mutta silti kiva!";
console.log(checkAnimal("fox"));
console.log(checkAnimal("cat"));
/* 
Kirjoita funktio nimeltä isEven:
Ota parametrina luku.
Palauta true, jos luku on parillinen, tai false, jos se on pariton.
Kutsu funktiota luvuilla kuten 4 ja 7, ja tulosta "Numero on pariton!" tai "Numero on parillinen!" tuloksen perusteella.
*/
isEven = (luku) =>
  luku % 2 === 0 ? "Numero on parillinen!" : "Numero on pariton!";

console.log(isEven(4));
console.log(isEven(7));
/* 
Kirjoita funktio nimeltä getAnimalDescription:
Ota parametri favoriteAnimal.

Käytä switch-rakennetta seuraavasti:
- Jos "fox", palauta "Ketut ovat viekkaita ja fiksuja!"
- Jos "dog", palauta "Koirat ovat uskollisia ystäviä."
- Jos "cat", palauta "Kissat ovat kiinnostuneita ja itsenäisiä."

Minkä tahansa muun eläimen kohdalla palauta "Kaikki eläimet ovat mahtavia!"
Kutsu funktiota eri eläinnimillä.
*/
getAnimalDescription = (favoriteAnimal) => {
  switch (favoriteAnimal) {
    case "fox":
      return "Ketut ovat viekkaita ja fiksuja!";

    case "dog":
      return "Koirat ovat uskollisia ystäviä.";

    case "cat":
      return "Kissat ovat kiinnostuneita ja itsenäisiä.";
    default:
      return "Kaikki eläimet ovat mahtavia!";
  }
};
console.log(getAnimalDescription("fox"));
console.log(getAnimalDescription("eläin"));
