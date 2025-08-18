"use strict";

/* 
Tehtävä 1: Viivästetty tervehdys (Callback)  
---------------------------------------
Kirjoita funktio `delayedGreet(name, callback)`  
Kahden (2) sekunnin kuluttua sen tulee kutsua `callback` arvolla `"Hei, [name]!"`  
*/

function delayedGreet(name, callback) {
  setTimeout(() => {
    callback(`Hei, ${name}!`);
  }, 2000);
}
// Testitapaus
delayedGreet("Alice", (message) => console.log(message));
// Odotettu: "Hei, Alice!" (2 sekunnin kuluttua)

/* 
Tehtävä 2: Tilauskäsittely (Callback)  
---------------------------------------
Kirjoita funktio `processOrder(orderNumber, callback)`  
Sen tulee odottaa 3 sekuntia ja sen jälkeen kutsua callbackia seuraavalla viestillä:  
   `"Tilaus [orderNumber] on noudettavissa."`  
*/

function processOrder(orderNumber, callback) {
  setTimeout(() => {
    callback(`Tilaus ${orderNumber} on noudettavissa.`);
  }, 3000);
}
// Testitapaus
processOrder(101, (message) => console.log(message));
// Odotettu: "Tilaus 101 on noudettavissa." (3 sekunnin kuluttua)

/* 
Tehtävä 3: Kirjautumisjärjestelmä (Callback)  
---------------------------------------
Korjaa `loginUser(username, validUser, callback)`  
Jos `validUser === true`, kutsu callbackia viestillä `"Tervetuloa, []!"` 1 sekunnin kuluttua  
Jos `validUser === false`, kutsu callbackia heti viestillä `"Virheellinen kirjautuminen"`  
*/

function loginUser(username, validUser, callback) {
  if (validUser) {
    setTimeout(() => {
      callback(`Tervetuloa, ${username}!`);
    }, 1000);
  } else {
    {
      setTimeout(() => {
        callback(`Virheellinen kirjautuminen`);
      }, 0);
    }
  }
}

// Testitapaukset
loginUser("Sam", true, (message) => console.log(message));
// Odotettu: "Tervetuloa, Sam!" (1 sekunnin kuluttua)
loginUser("Alex", false, (message) => console.log(message));
// Odotettu: "Virheellinen kirjautuminen" (välittömästi)
/*Tehtävä 4: Käyttäjätietojen haku (Promise)  
---------------------------------------
Muunna `fetchUserData(shouldFail)` palauttamaan Promise  
Jos `shouldFail === false`, **ratkaise 2 sekunnin jälkeen** viestillä `"Käyttäjätiedot haettu"`  
Jos `shouldFail === true`, **hylkää 2 sekunnin jälkeen** viestillä `"Virhe käyttäjätietojen haussa"`  
*/

function fetchUserData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Virhe käyttäjätietojen haussa");
      } else {
        resolve("Käyttäjätiedot haettu");
      }
    }, 2000);
  });
}

// Testitapaukset
fetchUserData(false).then(console.log).catch(console.error);
// Odotettu: "Käyttäjätiedot haettu" (2 sekunnin kuluttua)
fetchUserData(true).then(console.log).catch(console.error);
// Odotettu: "Virhe käyttäjätietojen haussa" (2 sekunnin kuluttua)
