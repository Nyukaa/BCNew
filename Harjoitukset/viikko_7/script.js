/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

const weather = {
  temperature: 18,
  humidity: 70,
  condition: "Rainy",
};

function checkWeather(w) {
  if (w.condition === "Rainy") {
    console.log("Ota sateenvarjo!");
  } else {
    console.log("Ei tarvi sateenvarjo");
  }
}

checkWeather(weather);
/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/

const shoppingCart = {
  tuotteet: [
    { name: "T-paita", price: 20, quantity: 2 },
    { name: "Farkut", price: 50, quantity: 1 },
    { name: "Kengät", price: 80, quantity: 1 },
  ],
};
function calculateTotal(cart) {
  let allTuoteet = 0;
  for (let item of cart.tuotteet) {
    allTuoteet += item.price * item.quantity;
  }
  return allTuoteet;
}
console.log("All summa ", calculateTotal(shoppingCart));
/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/

const restaurants = [
  { name: "Mama Italia", cuisineType: "Italian", rating: 4.5 },
  { name: "Tokyo Sushi", cuisineType: "Japanese", rating: 3.8 },
  { name: "Spicy India", cuisineType: "Indian", rating: 4.2 },
  { name: "Burger Hub", cuisineType: "American", rating: 3.9 },
];

console.log("Good restorans");

restaurants
  .filter((restaurant) => restaurant.rating > 4)
  .forEach((restaurant) => console.log(restaurant.name));

/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const bankAccount = {
  accountHolder: "Anna Virtanen",
  balance: 1200.5,
  transactions: [200, -50, -20, 300, -100],
};
function calculateBalanceWithReduce(account) {
  const totalTransactions = account.transactions.reduce(
    (sum, transaction) => sum + transaction,
    0
  );
  return account.balance + totalTransactions;
}
console.log("Accout is:", calculateBalanceWithReduce(bankAccount));
/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/

const students = [
  { name: "Emma", scores: [85, 90, 78], averageScore: null },
  { name: "Leo", scores: [70, 75, 68], averageScore: null },
  { name: "Sofia", scores: [95, 92, 88], averageScore: null },
  { name: "Oliver", scores: [60, 65, 72], averageScore: null },
];
function newAverageScore(students) {
  for (let student of students) {
    let total = 0;
    for (let i = 0; i < student.scores.length; i++) {
      total += student.scores[i];
    }
    student.averageScore = total / student.scores.length;
  }
  return students;
}
console.log("newAverageScore:", newAverageScore(students));
/* Tehtävä 6
Määrittele taulukko nimeltä `courses`, jossa jokaisessa kurssissa on `courseName`, `instructor` ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/
const courses = [
  {
    courseName: "Web Development",
    instructor: "Alice Johnson",
    studentsEnrolled: 25,
  },
  {
    courseName: "Data Structures",
    instructor: "Bob Smith",
    studentsEnrolled: 30,
  },
  {
    courseName: "Introduction to AI",
    instructor: "Carol Lee",
    studentsEnrolled: 32,
  },
  {
    courseName: "Database Systems",
    instructor: "David Kim",
    studentsEnrolled: 22,
  },
];
console.log("More then 30 students");
courses
  .filter((cours) => cours.studentsEnrolled >= 30)
  .forEach((cours) => console.log(cours.courseName));
/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/

const pets = [
  { species: "dog", name: "Buddy", isVaccinated: true },
  { species: "cat", name: "Misty", isVaccinated: false },
  { species: "parrot", name: "Kiwi", isVaccinated: true },
];
pets
  .filter((pet) => pet.isVaccinated)
  .forEach((pet) => console.log(pet.species, "Rokotusta tarvitaan"));

const animal = { species: "dog", name: "Buddy", isVaccinated: true };
function checkVactination(animal) {
  if (!animal.isVaccinated) {
    return "Rokotusta tarvitaan";
  } else {
    return "ei";
  }
}
console.log(checkVactination(animal));
/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/
const cities = [
  { name: "Helsinki", population: 655000, landmark: "Helsingin tuomiokirkko" },
  { name: "Paris", population: 2148000, landmark: "Eiffel Tower" },
  { name: "Tokyo", population: 13960000, landmark: "Tokyo Tower" },
];
cities
  .filter((city) => city.population > 1000000)
  .forEach((city) => console.log(city.name, " - Tämä on suuri kaupunki!"));
/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const transactions = [
  { type: "credit", amount: 500 },
  { type: "debit", amount: 200 },
  { type: "credit", amount: 150 },
  { type: "debit", amount: 100 },
];
function checkTransactions(transactions) {
  let total = 0;
  for (let transaction of transactions) {
    if (transaction.type === "debit") {
      total += transaction.amount;
    } else if (transaction.type === "credit") {
      total -= transaction.amount;
    }
  }
  return total;
}

console.log("checkTransactions ", checkTransactions(transactions));
/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/

const foxPack = [
  { name: "Fiona", age: 3, furColor: "red" },
  { name: "Blaze", age: 2, furColor: "silver" },
  { name: "Luna", age: 4, furColor: "white" },
  { name: "Rusty", age: 5, furColor: "orange" },
];
console.log("Old ketut:");
foxPack.filter((fox) => fox.age >= 3).forEach((fox) => console.log(fox.name));

/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/
const gameCharacter = {
  name: "Arin",
  level: 12,
  health: 85,
  inventory: ["sword", "shield", "healing potion"],
};
function varustelistan(gameCharacter) {
  gameCharacter.inventory.forEach((item) => console.log(item));
}
console.log("Inventories:");
varustelistan(gameCharacter);
/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/

const employees = [
  { name: "Anna", role: "Manager", workingHours: 40 },
  { name: "Jussi", role: "Developer", workingHours: 37.5 },
  { name: "Liisa", role: "Designer", workingHours: 35 },
  { name: "Pekka", role: "Support", workingHours: 42 },
];
console.log("yli 40 tuntia viikossa:");
employees
  .filter((person) => person.workingHours >= 40)
  .forEach((person) => console.log(person.name));
/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/

const musicAlbums = [
  { title: "Abbey Road", artist: "The Beatles", releaseYear: 1969 },
  { title: "Thriller", artist: "Michael Jackson", releaseYear: 1982 },
  { title: "Future Nostalgia", artist: "Dua Lipa", releaseYear: 2020 },
  { title: "Lover", artist: "Taylor Swift", releaseYear: 2019 },
];
console.log("Albums on julkaistu vuoden 2000 jälkeen:");
musicAlbums
  .filter((album) => album.releaseYear >= 2000)
  .forEach((album) => console.log(album.title));
/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/

const cars = [
  { brand: "Toyota", model: "Corolla", horsepower: 132 },
  { brand: "Ford", model: "Mustang", horsepower: 450 },
  { brand: "Tesla", model: "Model S", horsepower: 1020 },
  { brand: "BMW", model: "M3", horsepower: 473 },
];
function suurinHevosvoimamäärä(cars) {
  let maxNumber = null;
  let nimi = "";
  for (let auto of cars) {
    maxNumber = Math.max(maxNumber, auto.horsepower);
    nimi = auto.brand;
  }
  return nimi;
}
console.log("suurinHevosvoimamäärä: ", suurinHevosvoimamäärä(cars));
/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/
const airports = [
  { name: "Heathrow", country: "United Kingdom", flightsPerDay: 1200 },
  { name: "JFK", country: "United States", flightsPerDay: 1500 },
  { name: "Tokyo Narita", country: "Japan", flightsPerDay: 900 },
  {
    name: "Dubai International",
    country: "United Arab Emirates",
    flightsPerDay: 1400,
  },
];
function suurinHevosvoimamäärä(airports) {
  let maxNumber = null;
  let nimi = "";
  for (let airport of airports) {
    maxNumber = Math.max(maxNumber, airport.flightsPerDay);
    nimi = airport.name;
  }
  return nimi;
}
console.log(suurinHevosvoimamäärä(airports), " on eniten lentoja päivässä");
