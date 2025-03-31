/* Määritä kolme merkkijonovakiota käyttäen yksinkertaisia lainausmerkkejä, kaksoislainausmerkkejä ja backtick-merkkejä. Esimerkiksi:
'Yksinkertaisilla lainausmerkeillä merkitty merkkijono'
"Kaksoislainausmerkeillä merkitty merkkijono"
`Mallimerkkijono`
Tulosta kaikki kolme merkkijonoa käyttäen console.log().
*/
const str1 = "Yksinkertaisilla lainausmerkeillä merkitty merkkijono";
const str2 = "Kaksoislainausmerkeillä merkitty merkkijono";
const str3 = `Mallimerkkijono`;
console.log(str1, str2, str3);
/* Määritä muuttuja language ja anna sille arvoksi "JavaScript".
Luo mallimerkkijono käyttäen backtick-merkkejä sanoaksesi: "I am learning JavaScript." upottamalla language-muuttuja merkkijonoon.
Tulosta muodostettu merkkijono käyttäen console.log().
*/
str0 = "JavaScript";
console.log(`I am learning ${str0}`);
/* Luo muuttuja nimeltä multiLine ja anna sille monirivinen merkkijono käyttäen backtick-merkkejä. Esimerkiksi:
This is line one.
This is line two.
This is line three.
Tulosta multiLine-muuttuja käyttäen console.log().
*/
const one = "Learn HTML ";
const two = "Learn CSS";
const three = "Learn JavaScript";
console.log(` ${one}\n ` + `${two}\n ` + `${three} \n `);
/* Määritä muuttuja nimeltä text ja anna sille arvoksi "Hello, World!".
Käytä .length-ominaisuutta selvittääksesi merkkijonon pituuden ja tallenna se muuttujaan nimeltä textLength.
Tulosta viesti, kuten: "The length of the text is 13."
*/
const text = "Hello, World!";
const textLength = text.length;
console.log(`The length of the text is ${textLength}.`);
/* Määritä muuttuja nimeltä word ja anna sille arvoksi "JavaScript".
Käytä hakasulkunotaatiota päästäksesi käsiksi:
Merkkijonon ensimmäiseen merkkiin.
Merkkijonon viimeiseen merkkiin.
Tulosta näiden avulla viestit, kuten:
"The first character is J."
"The last character is t."
*/
const word = "JavaScript";
console.log(
  `The first character is ${word[0]}\n` +
    `The last character is ${word[word.length - 1]}.`
);

/* Määritä kaksi muuttujaa: num1 ja num2 arvoilla 7 ja 5.
Luo merkkijono käyttäen backtick-merkkejä sanoaksesi: "The sum of 7 and 5 is 12." upottamalla summauslauseke suoraan mallimerkkijonoon.
Tulosta muodostettu merkkijono.
*/
const num1 = 7;
const num2 = 5;
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
/* Luo muuttuja nimeltä greeting ja anna sille arvoksi "Hello, World!".
Muunna merkkijono:
Isoiksi kirjaimiksi käyttäen .toUpperCase().
Pieniksi kirjaimiksi käyttäen .toLowerCase().
Tulosta molemmat tulokset käyttäen console.log().
Esimerkkituloste:
"HELLO, WORLD!"
"hello, world!"
*/
const greeting = "Hello, World!";
console.log(greeting.toUpperCase(), greeting.toLowerCase());
/* Luo muuttuja nimeltä sentence ja anna sille arvoksi "Learning JavaScript is fun!".
Käytä .substring()-menetelmää erottaaksesi sanan "JavaScript" lauseesta.
Tulosta erotettu sana käyttäen console.log().

Esimerkkituloste:
"Extracted word: JavaScript"
*/
const sentence = "Learning JavaScript is fun!";
console.log(`Extracted word: ${sentence.substring(8, 19)}`);
/* Luo muuttuja nimeltä messyString ja anna sille arvoksi " Clean me up! ".
Käytä .trim()-menetelmää poistaaksesi ylimääräiset välilyönnit merkkijonon alusta ja lopusta.
Tulosta siistitty merkkijono käyttäen console.log().

Esimerkkituloste:
"Cleaned string: Clean me up!"
*/
const messyString = " Clean me up! ";
console.log(`Cleaned string: ${messyString.trim()}`);
/* Luo muuttuja nimeltä phrase ja anna sille arvoksi "JavaScript is versatile and powerful."
Käytä .includes()-menetelmää tarkistaaksesi, sisältääkö merkkijono sanan "powerful".
Tulosta tulos käyttäen console.log().

Esimerkkituloste:
"Does the phrase include 'powerful'? true"
*/
const phrase = "JavaScript is versatile and powerful.";
console.log(`Does the phrase include 'powerful'?`, phrase.includes("powerful"));
/* Luo muuttuja nimeltä longText ja anna sille arvoksi "The quick brown fox jumps over the lazy dog."
Käytä .slice()-menetelmää erottaaksesi "quick brown fox".
Tulosta erotettu osa käyttäen console.log().

Esimerkkituloste:
"Sliced text: quick brown fox"
*/
const longText = "The quick brown fox jumps over the lazy dog.";
console.log("Sliced text:", longText.slice(4, 15));
/* Luo muuttuja nimeltä description ja anna sille arvoksi " JavaScript is Fun and powerful! ".
Tee seuraavat toimenpiteet:
- Poista ylimääräiset välilyönnit käyttäen .trim().
- Muunna merkkijono pieniksi kirjaimiksi.
- Tarkista, sisältääkö se sanan "fun".
- Korvaa "powerful" sanalla "amazing".
- Tulosta lopullinen merkkijono ja tieto siitä, sisältääkö se sanan "fun" käyttäen console.log().

Esimerkkituloste:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
*/
const description = " JavaScript is Fun and powerful! ";

let description2 = description
  .trim()
  .toLowerCase()
  .replace("powerful", "amazing");
console.log(`Final description: ${description2}`);
console.log(`Does it include fun, ${description2.includes("fun")}`);
