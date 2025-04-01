/* Luo funktio nimeltä add, joka:
Ottaa kaksi parametria, a ja b.
Palauttaa a:n ja b:n summan.
Kutsu funktiota arvoilla 10 ja 5.
Tulosta tulos käyttäen console.log().

Bonus: Kutsu funktiota useita kertoja eri argumenteilla ja tulosta kaikki tulokset.
*/
const add = (a, b) => a + b;
console.log("Summa: ", add(10, 5));
console.log(add(11, -5));
console.log(add(0, 0.5));
/* Luo funktio nimeltä isEven, joka:
Ottaa yhden parametrin, num.
Palauttaa true, jos num on parillinen, muuten palauttaa false.
Kutsu funktiota arvoilla 4 ja 7.
Tulosta tulokset käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/
const isEven = (num) => {
  let a = false;
  if (num % 2 === 0) {
    a = true;
  }
  return console.log("num is parillinen: ", a);
};
isEven(4);
isEven(7);
/* Luo funktio nimeltä getLength, joka:
Ottaa yhden parametrin, str.
Palauttaa str:n pituuden käyttäen .length.
Kutsu funktiota merkkijonolla "JavaScript".
Tulosta tulos käyttäen console.log().
*/
getLength = (str) => console.log("Lenght is:", str.length);
getLength("JavaScript");
/* Luo funktio nimeltä capitalize, joka:
Ottaa yhden parametrin, str.
Palauttaa merkkijonon siten, että ensimmäinen kirjain on iso ja loput pieniä.
Kutsu funktiota merkkijonolla "javascript".
Tulosta tulos käyttäen console.log().

Vinkki: Käytä str[0].toUpperCase() ja str.slice(1).toLowerCase().
*/
capitalize = (str) =>
  console.log(
    "capitalize first is:",
    str[0].toUpperCase() + str.slice(1).toLowerCase()
  );
capitalize("JavaScript");
/* Luo funktio nimeltä generateRandomNumber, joka:
Ottaa kaksi parametria, min ja max.
Palauttaa satunnaisen kokonaisluvun min:n ja max:n väliltä (mukaan lukien).
Kutsu funktiota arvoilla 1 ja 10.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä Math.random(), Math.floor() ja yksinkertaista matikkaa.
*/
generateRandomNumber = (max, min) =>
  console.log(
    "satunnaisen kokonaisluvun: ",
    Math.floor(Math.random() * (max - min) + min)
  );

generateRandomNumber(1, 10);
/* Luo funktio nimeltä replaceWord, joka:
Ottaa kolme parametria, sentence, oldWord ja newWord.
Palauttaa lauseen, jossa oldWord on korvattu newWordilla.
Kutsu funktiota lauseella "I like apples.", oldWord: "apples" ja newWord: "bananas".
Tulosta tulos käyttäen console.log().
*/
replaceWord = (sentence, oldWord, newWord) =>
  console.log(sentence.replace(oldWord, newWord));

replaceWord("I like apples.", "apples", "bananas");
/* Luo funktio nimeltä containsWord, joka:
Ottaa kaksi parametria, sentence ja word.
Palauttaa true, jos sentence sisältää sanan word, muuten false.
Kutsu funktiota lauseella "JavaScript is fun!" ja sanalla "fun".
Tulosta tulos käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/
containsWord = (sentence, word) => {
  let a = false;
  if (sentence.includes(word)) {
    a = true;
  }
  console.log("str includes word:", a);
};

containsWord("JavaScript is fun!", "fun");
/* Luo funktio nimeltä roundNumber, joka:
Ottaa kaksi parametria, num ja precision.
Palauttaa luvun pyöristettynä annetun tarkkuuden mukaan (desimaalien määrä).
Kutsu funktiota arvoilla 19.56789 ja 2.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä .toFixed().
*/
roundNumber = (num, precision) =>
  console.log("luvun pyöristettynä", num.toFixed(precision));
roundNumber(19.56789, 2);
/* Luo funktio nimeltä findMax, joka:
Ottaa kolme parametria, a, b ja c.
Palauttaa suurimman näistä kolmesta luvusta.
Kutsu funktiota arvoilla 12, 7 ja 20.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä Math.max().
*/
findMax = (a, b, c) => console.log("Max: ", Math.max(a, b, c));
findMax(12, 7, 20);
/* Luo funktio nimeltä cleanAndTransform, joka:
Ottaa yhden parametrin, str.
Poistaa ylimääräiset välilyönnit, muuntaa merkkijonon pieniksi kirjaimiksi ja korvaa sanan "powerful" sanalla "amazing".
Palauttaa muunnetun merkkijonon.
Kutsu funktiota merkkijonolla " JavaScript is powerful! ".
Tulosta tulos käyttäen console.log().
*/
cleanAndTransform = (str) =>
  console.log(
    "Changed str: ",
    str.trim().toLowerCase().replace("powerful", "amazing")
  );
cleanAndTransform(" JavaScript is powerful! ");
