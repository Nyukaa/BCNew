/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/
const library = [
  { title: "Harry Potter", author: "Rowling", yearPublished: 2002 },
  { title: "Harry Potter2", author: "Rowling", yearPublished: 2003 },
];

/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/
console.log("first title book", library[0].title);
library[1].yearPublished = 2004;
console.log("second book", library[1]);

/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/
// Добавляем новое свойство `genres` с помощью точечной нотации
library[0].genres = "fantasy";

// Добавляем новое свойство `isAvailable` с помощью квадратных скобок
library[0]["isAvailable"] = true;

// Проверим результат
console.log(library[0]);
/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/
function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}

const book = new Book("Susi", "Kipling", 1895, "adventure");
console.log("konstruktori", book);

/* Tehtävä 5
Kirjoita funktio nimeltä `createBook`, joka ottaa parametreina `title`, `author`, `yearPublished` ja `genres` (taulukko).
Funktion tulee palauttaa uusi kirjaolio näillä ominaisuuksilla.
Testaa `createBook`-funktiota luomalla uusi kirja käyttäjän antamilla arvoilla ja tulosta se konsoliin.
*/
function createBook(title, author, yearPublished, genres) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
}
const uusibook = createBook("Tarina metsästä", "Metsä Kirjoittaja", 2021, [
  "luonto",
  "seikkailu",
]);
console.log("uusibook", uusibook);
/* Tehtävä 6
Muunna `library`-kokoelma JSON-merkkijonoksi ja tulosta se konsoliin.
Jäsennä JSON-merkkijono takaisin JavaScript-olioksi ja tulosta ensimmäisen kirjan `title` konsoliin.
*/
const jsonString = JSON.stringify(library);
console.log("JSON-merkkijono:", jsonString);
const parsedLibrary = JSON.parse(jsonString);
console.log("first book from parsedJSON:", parsedLibrary[0].title);
