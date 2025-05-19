/* Tehtävä 1: Käytä \"strict mode\" -tilaa

Luo funktio `task1`, joka käyttää \"use strict\" -tilaa.
Yritä käyttää muuttujaa ilman sen julistamista.
Ota virhe kiinni ja loggaa: \"Strict mode -virhe: [virheilmoitus]\"
*/

function task1() {
  "use strict";
  try {
    testValue = 42; // Muuttujaa ei ole julistettu → virhe strict-tilassa
  } catch (error) {
    console.log("Strict mode -virhe: " + error.message);
  }
}

task1();

/* Tehtävä 2: Muuttujien oikea julistus

Julista vakio `MAX_USERS = 100` ja muuttuja `currentUsers = 10`.
Yritä muuttaa vakion arvoa ja ota virhe kiinni.
*/

function task2() {
  "use strict";

  const MAX_USERS = 100;
  let currentUsers = 10;

  try {
    // Yritetään muuttaa vakiota (virhe)
    MAX_USERS = 150;
  } catch (error) {
    console.error("Virhe: Et voi muuttaa vakion arvoa –", error.message);
  }

  console.log("Nykyiset käyttäjät:", currentUsers);
}

task2();

/* Tehtävä 3: Luo objekti ja tulosta se

Luo objekti `userProfile`, jossa kentät:
- name
- email
- isAdmin
Tulosta objekti konsoliin.
*/
const userProfile = {
  name: "Anna Virtanen",
  email: "anna.virtanen@example.com",
  isAdmin: false,
};

function task3() {
  "use strict";

  try {
  } catch (error) {
    console.error("Virhe:", error.message);
  }

  console.log("userProfile:", userProfile);
}
task3();

/* Tehtävä 4: Yksinkertainen funktio pinta-alan laskemiseen

Luo funktio `calculateArea(width, height)`, joka palauttaa suorakulmion pinta-alan.
*/

("use strict");

function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(5, 10)); // Tulostaa: 50

/* Tehtävä 5: Vältä taikalukuja

Määritä vakio `DISCOUNT = 0.1`.
Luo funktio `applyDiscount(price)`, joka laskee hinnasta alennuksen.
*/

const DISCOUNT = 0.1;
function applyDiscount(price) {
  let ale;

  return (ale = price - price * DISCOUNT);
}
console.log("New price :", applyDiscount(10));
/* Tehtävä 6: Kirjoita hyödyllisiä kommentteja

Kirjoita funktio `greetUser(name)`, joka palauttaa tervehdyksen käyttäjälle.
Lisää funktioon kommentti, joka selittää sen tarkoituksen.
*/

function greetUser(name) {
  console.log("Hello", name); //tulosta Hello "name"
}
greetUser("Anna");
/* Tehtävä 7: Refaktoroi epäselvä koodi selkeämmäksi

Paranna epäselvää funktiota käyttämällä parempia nimiä ja muotoilua.

Ennen:
function f(n){return n<0 ? 'negative' : 'positive';}
*/

("use strict");

/**
 * Tarkistaa, onko luku negatiivinen vai positiivinen.
 * @param {number} number - Tarkasteltava luku
 * @returns {string} "negative" tai "positive"
 */
function checkNumber(number) {
  return number < 0 ? "negative" : "positive";
}

console.log(checkNumber(-5)); // "negative"
console.log(checkNumber(3)); // "positive"

/* Tehtävä 8: Korjaa koodin muotoilu

Kirjoita koodi uudelleen käyttäen oikeaa muotoilua ja sisennystä.

Ennen:
let x=10; function example(){console.log(x);}
*/
let x = 10;
function example() {
  console.log(x);
}
example();
