/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/

// Määritellään student-olio
const student = {
  name: "Maija Meikäläinen",
  age: 21,
  grade: 4.0,
};
const jsonStr = JSON.stringify(student);
console.log("JSON.stringify(student: ", jsonStr);

/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/
const obj = JSON.parse(jsonStr);
console.log("JSON.parse(jsonStr): ", obj);
/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const classroom = [
  { name: "Anna", age: 16, grade: "9" },
  { name: "Mikko", age: 15, grade: "8" },
  { name: "Laura", age: 17, grade: "10" },
  { name: "Juho", age: 16, grade: "9" },
  { name: "Emilia", age: 15, grade: "8" },
];
const strClass = JSON.stringify(classroom);
console.log("JSON.stringify(classroom): ", strClass);

/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono, muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/
const objClass = JSON.parse(strClass);
console.log("JSON.parse(strClass): ", objClass);

/* Tehtävä 5
Luo olio nimeltä `weatherReport`, jossa on seuraavat ominaisuudet:
- `temperature`
- `humidity`
- `conditions` (esim. "Sunny", "Rainy")

Muunna olio JSON-merkkijonoksi ja tallenna se muuttujaan `weatherJSON`.
Sen jälkeen pura JSON takaisin olioksi ja tulosta `conditions`-ominaisuus.
*/

const weatherReport = {
  temperature: 22,
  humidity: 60,
  conditions: "Sunny",
};
const weatherJSON = JSON.stringify(weatherReport);
console.log("JSON.stringify(weatherReport): ", weatherJSON);
/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`

Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    rating: 8.8,
  },
  {
    title: "The Matrix",
    director: "Lana ja Lilly Wachowski",
    rating: 8.7,
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    rating: 8.6,
  },
];
const strMovies = JSON.stringify(movies);
const objMovies = JSON.parse(strMovies);
movies
  .filter((objMovies) => objMovies.rating > 8)
  .map((objMovies) => console.log("Good movie: ", objMovies.title));
/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/
function filterHighRatedMovies(jsonString) {
  const moviesArray = JSON.parse(jsonString);
  const highRated = moviesArray.filter((movie) => movie.rating > 8);
  return highRated;
}
const jsonString = JSON.stringify(movies);
const result = filterHighRatedMovies(jsonString);
console.log(result);
/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const shoppingCart = {
  items: [
    { name: "Leipä", price: 2.5 },
    { name: "Maito", price: 1.2 },
    { name: "Juusto", price: 3.8 },
  ],
};
const strShoppingCart = JSON.stringify(shoppingCart);
console.log("shoppingCart: ", strShoppingCart);
/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/
function laskeYhteishinta(jsonCart) {
  cart = JSON.parse(jsonCart);
  let total = 0;
  for (const item of cart.items) {
    total += item.price;
    // console.log(total);
  }
  return total;
}
jsonCart = JSON.stringify(shoppingCart);
console.log("Yhteishinta:", laskeYhteishinta(jsonCart));

/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`

Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

const gameProgress = {
  level: 3,
  score: 1200,
  livesRemaining: 2,
};

const strGameProgress = JSON.stringify(gameProgress);
const game = JSON.parse(strGameProgress);
let score = (game.score += 100);
console.log(("Score: ", score));
