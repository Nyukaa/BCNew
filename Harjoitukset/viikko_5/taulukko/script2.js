// Harjoitus 14: Etsi kaikki "Jonna":n esiintymät attendees-taulukossa
let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];

/*
Etsi kaikki kohdat, joissa "Jonna" esiintyy attendees-taulukossa.
Odotettu tulos: [0, 2, 4]
*/
let countJoni = [];
for (let i = 0; i < attendees.length; i++) {
  if (attendees[i] === "Jonna") {
    countJoni.push(i);
  }
}
console.log("Kaikki Jonit:", countJoni);
// Harjoitus 15: Muunna kaikki attendees-taulukon nimet isoiksi kirjaimiksi
/*
Luo uusi taulukko, jossa jokainen attendees-taulukon nimi on kirjoitettu isoilla kirjaimilla.
Odotettu tulos: ['JONNA', 'SANTTU', 'JONNA', 'ALEX', 'JONNA']
*/
let uppercasedTeam = attendees.map((name) => name.toUpperCase());
console.log("Uppercased:", uppercasedTeam);
// Harjoitus 16: Yhdistä forestAnimals- ja farmAnimals-taulukot
let forestAnimals = ["Peura", "Karhu", "Susi"];
let farmAnimals = ["Hevonen", "Lammas", "Vuohi"];

/*
Yhdistä forestAnimals ja farmAnimals uuteen taulukkoon.
Odotettu tulos: ["Peura", "Karhu", "Susi", "Hevonen", "Lammas", "Vuohi"]
*/
console.log("Concat them:", forestAnimals.concat(farmAnimals));

// Harjoitus 17: Poista ensimmäinen ja viimeinen alkio birdSpecies-taulukosta
let birdSpecies = ["Kotka", "Pöllö", "Haukka", "Pääsky", "Pingviini"];
birdSpecies.pop();
birdSpecies.shift();
console.log(birdSpecies);
/*
Odotettu tulos: ['Pöllö', 'Haukka', 'Pääsky']
*/

// Harjoitus 18: Käytä `splice`:a poistaaksesi ja korvataksesi arvoja numbers-taulukossa
let numbers = [10, 20, 30, 40, 50];

/*
Käytä splice-metodia poistamaan "30" ja korvaamaan se arvoilla  .
Odotettu tulos: [10, 20, 25, 27, 40, 50]
*/
numbers.splice(2, 1, 25, 27);
console.log(numbers);
// Harjoitus 19: Korota jokaista hintaa 10 % käyttäen `map`-metodia
let prices = [5, 10, 15, 20];
let priceUp = prices.map((num) => num * 1.1);
console.log("hintaa 10 % käyttäen", priceUp);
/*
Luo uusi taulukko, jossa jokainen hinta on kasvatettu 10 %.
Odotettu tulos: [5.5, 11, 16.5, 22]
*/

// Harjoitus 20: Suodata `filter`:in avulla sanat, jotka ovat pidempiä kuin 5 kirjainta
let words = ["omena", "banaani", "kirsikka", "kiivi", "mansikka"];

/*
Luo uusi taulukko, joka sisältää vain sanat, joissa on yli 5 kirjainta words-taulukosta.
Odotettu tulos: ['banaani', 'kirsikka', 'mansikka']
*/
let longWords = words.filter((word) => word.length > 5);
console.log("longWords:", longWords);
