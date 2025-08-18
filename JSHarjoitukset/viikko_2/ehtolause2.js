/* 
Kirjoita funktio nimeltä canEat:
Ota kaksi parametria: isHungry ja hasFood.
Jos molemmat ovat tosi, palauta "Aika syödä!".
Jos jompikumpi on epätosi, palauta "Sinun täytyy löytää ruokaa!"
Kutsu funktiota eri isHungry ja hasFood yhdistelmillä.
*/
canEat = (isHungry, hasFood) => {
  if (isHungry && hasFood) {
    return "Aika syödä!";
  } else {
    return "Sinun täytyy löytää ruokaa!";
  }
};
console.log("Eat or not? ", canEat(true, false));
console.log("Eat or not? ", canEat(true, true));

/* 
Kirjoita funktio nimeltä canEnterEvent:
Ota kaksi parametria: age ja hasID.
Jos ikä on 18 tai enemmän JA hasID on tosi, palauta "Sisäänpääsy myönnetty."
Muussa tapauksessa palauta "Sisäänpääsy evätty."
Kutsu funktiota eri yhdistelmillä age ja hasID.
*/

canEnterEvent = (age, hasID) => {
  if (age >= 18 && hasID) {
    return "Sisäänpääsy myönnetty.";
  } else {
    return "Sisäänpääsy evätty.";
  }
};
console.log("Can Enter?", canEnterEvent(18, true));
console.log("Can Enter?", canEnterEvent(18, false));
console.log("Can Enter?", canEnterEvent(27, true));
/* 
Kirjoita funktio nimeltä findFox:
Ota kaksi parametria: hasFox ja foxName.
Jos hasFox on tosi JA foxName on "Kikka", palauta "Kikka-kettu on täällä!"
Muussa tapauksessa palauta "No foxes found."
Kutsu funktiota eri ketunnimillä ja hasFox arvoilla.
*/
const findFox = (hasFox, foxName) => {
  if (foxName === "Kikka" && hasFox) {
    return "Kikka-kettu on täällä!";
  } else {
    return "No foxes found.";
  }
};
console.log("Find Fox?", findFox(true, "Kikka"));
console.log("Find Fox?", findFox(true, "Kik"));
console.log("Find Fox?", findFox(false, "Kikka"));
/* 
Kirjoita funktio nimeltä getDayName:
Ota parametri day.
Käytä switch-rakennetta seuraavasti:
Palauta viikonpäivän nimi (1 = "Maanantai", 2 = "Tiistai", jne.).
Käytä default-haaraa palauttaaksesi "Epäkelpo päivä" virheellisille arvoille.
Kutsu funktiota sekä kelvollisilla että virheellisillä päivämääränumeroilla.
*/
const getDayName = (day) => {
  switch (day) {
    case 1:
      return "maanantai";
    case 2:
      return "tiistai";
    case 3:
      return "keskiviikko";
    case 4:
      return "torstai";
    case 5:
      return "perjantai";
    case 6:
      return "lauantai";
    case 7:
      return "sunnuntai";
    default:
      return "Epäkelpo päivä";
  }
};
console.log("What the day today? ", getDayName(1));
console.log("What the day today? ", getDayName("sunnuntai"));
/* 
Kirjoita funktio nimeltä checkFoxLover:
Ota kaksi parametria: age ja likesFoxes.
Jos ikä on 18 tai enemmän:
Tarkista, onko likesFoxes tosi.
Jos on, palauta "Olet aikuinen, joka tykkää ketuista!"
Muussa tapauksessa palauta "Et ole kettufani, mutta se on ok!"
Kutsu funktiota eri ikä- ja mieltymysyhdistelmillä. Varmista, että ohjelma toimii halutulla tavalla. 
*/
const checkFoxLover = (age, likesFoxes) => {
  if (age >= 18 && likesFoxes) {
    return "Olet aikuinen, joka tykkää ketuista!";
  } else {
    return "Et ole kettufani, mutta se on ok!";
  }
};
console.log("Fox Lover? ", checkFoxLover(27, true));
console.log("Fox Lover? ", checkFoxLover(16, true));
console.log("Fox Lover? ", checkFoxLover(18, false));
/* 
Kirjoita funktio nimeltä planAdventure:
Ota kolme parametria: isWeekend, isSunny ja likesFoxes.
Käytä loogisia operaattoreita:
Jos on viikonloppu JA aurinkoista JA pitää ketuista, palauta "Täydellinen päivä kettuseikkailulle!"
Jos on viikonloppu TAI aurinkoista, palauta "Hyvä päivä, mutta ei täydellinen."
Muussa tapauksessa palauta "Ehkä joku toinen päivä."
Kutsu funktiota eri yhdistelmillä ehtoja.
*/
const planAdventure = (isWeekend, isSunny, likesFoxes) => {
  if (isWeekend && isSunny && likesFoxes) {
    return "Täydellinen päivä kettuseikkailulle!";
  } else if (isWeekend || isSunny) {
    return "Hyvä päivä, mutta ei täydellinen.";
  } else {
    return "Ehkä joku toinen päivä.";
  }
};
console.log("What plan? ", planAdventure(true, true, true));
console.log("What plan? ", planAdventure(true, true, false));
console.log("What plan? ", planAdventure(false, false, true));
/* 
Kirjoita funktio nimeltä rainAdvice:
Ota parametri isRaining.
Käytä ternary operatoria palauttamaan:
- "Pysy sisällä" jos isRaining on tosi.
- "Nauti ulkoilmasta!" muussa tapauksessa.
Kutsu funktiota eri arvoilla isRaining.
*/
const rainAdvice = (isRaining) =>
  isRaining ? "Pysy sisällä" : "Nauti ulkoilmasta!";

console.log("is Raining? ", rainAdvice(false));

console.log("is Raining? ", rainAdvice(true));
