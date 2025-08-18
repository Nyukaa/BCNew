/* Tämä tehtävä on vapaaehtoinen.

Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. 
Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma antaa satunnaisen vastauksen 8-pallosta. 
Määrittele itse vastausvaihtoehdot. 
Tarvitset tähän tehtävään myös html-sivua ja sinne prompt() kysymyksen esittämiseen. */
let kysy = prompt("Kysy jotain");
const magicBall = (day) => {
  switch (day) {
    case 1:
      return "Don’t count on it";
    case 2:
      return "My reply is no";
    case 3:
      return "My sources say no";
    case 4:
      return "Absolutely not";
    case 5:
      return "It is certain";
    case 6:
      return "Yes – definitely";
    case 7:
      return "Most likely";
    case 8:
      return "Signs point to yes";
    default:
      return "Ask again later";
  }
};
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
alert(magicBall(getRndInteger(1, 8)));
