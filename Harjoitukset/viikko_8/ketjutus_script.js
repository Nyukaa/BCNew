"use strict";

/* Tehtävä 1: Korjaa käyttäjädatan käsittely  
Korjaa metodiketjutus niin, että se suodattaa aktiiviset käyttäjät ja palauttaa heidän nimensä isoilla kirjaimilla.
*/

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

// Korjaa tämä

const activeUsers = users
  .filter((user) => user.active) // Suodatetaan vain aktiiviset käyttäjät
  .map((user) => user.name.toUpperCase()); // Muutetaan nimet isoiksi kirjaimiksi

console.log(activeUsers); // Odotettu: ["ALICE", "CHARLIE"]

/* Tehtävä 2: Korjaa valinnainen ketjutus  
Käytä turvallisesti `email`-ominaisuutta objektin `user.details` sisältä.
*/

const userData = { details: { contact: { email: "jane@example.com" } } };

// Korjaa tämä
console.log(userData.details?.contact?.email); // Odotettu: "jane@example.com"

/* Tehtävä 3: Korjaa valinnainen ketjutus taulukoiden kanssa  
Käytä turvallisesti taulukon `orders` toista alkiota, jos se on olemassa.
*/

const customer = { orders: [1001, 1002] };

// Korjaa tämä
console.log("customer.orders?.[2]", customer.orders?.[2]); // Odotettu: undefined

/* Tehtävä 4: Korjaa ketjutettu merkkijonojen käsittely  
Poimi nimikirjaimet koko nimestä metodiketjutuksella.
*/

const fullName = "John Doe";

// Korjaa tämä
const initials = fullName
  .split(" ") // ["John", "Doe"]
  .map((word) => word[0].toUpperCase()) // ["J", "D"]
  .join(" "); // "J D"
console.log("initials", initials); // Odotettu: "J D"

/* Tehtävä 5: Luo oma funktio  
Kirjoita funktio, joka vastaanottaa `products`-taulukon ja palauttaa pilkulla erotetun merkkijonon **vain varastossa olevien** tuotteiden nimistä **isoilla kirjaimilla**.
Testaa seuraavalla taulukolla:
`[{ name: "Laptop", stock: 10 }, { name: "Phone", stock: 0 }]`
Odotettu tuloste: `"LAPTOP"`
*/
const products = [
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 0 },
];

const checkProducts = (products) => {
  return products
    .filter((product) => product.stock > 0) // Vain tuotteet, joita on varastossa
    .map((product) => product.name.toUpperCase()) // Nimet isoilla kirjaimilla
    .join(", "); // Pilkulla erotettu merkkijono
};

console.log(checkProducts(products));
checkProducts(products);
