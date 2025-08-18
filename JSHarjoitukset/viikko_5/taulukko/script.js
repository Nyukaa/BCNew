// Harjoitus 1: Määritä taulukon pituus ja tarkista ehto
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

/*
Luo funktio nimeltä myAlphabetLength, joka tulostaa myAlphabet-taulukon pituuden.
Jos pituus on 5 tai enemmän, tulosta: "Taulukon pituus on riittävä".
Muussa tapauksessa tulosta: "Taulukon pituus on liian lyhyt."
*/

const myAlphabetLength = () => {
  console.log("Taulukon pituus ", myAlphabet.length);
  if (myAlphabet.length >= 5) {
    console.log("Taulukon pituus on riittävä");
  } else console.log("Taulukon pituus on liian lyhyt.");
};
myAlphabetLength();
// Harjoitus 2: Käy läpi planets-taulukko ja tulosta jokainen planeetta ja sen indeksi
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];
/*
Tulosta jokainen planeetta planets-taulukosta ja sen indeksi.
Odotettu tulos:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
const tulostaPlanets = () => {
  planets.forEach((element, index) => {
    console.log(`Planeetta: ${element}, Indeksi: ${index}`);
  });
};

tulostaPlanets();

// Harjoitus 3: Tulosta taulukon alkioiden tyypit käyttäen mixedValues-taulukkoa
const mixedValues = [42, "Heippa", true, { nimi: "Kettu" }, null, undefined];

/*
Käy läpi mixedValues-taulukko ja tulosta jokainen alkio, sen indeksi ja tietotyyppi.
Odotettu tulos:
"Alkio: 42, Indeksi: 0, Tyyppi: number"
...
"Alkio: undefined, Indeksi: 5, Tyyppi: undefined"
*/
const tulostaMixedValues = () => {
  mixedValues.forEach((element, index) => {
    console.log(
      `Alkio: ${element}, Indeksi: ${index}, Tyyppi: ${typeof element}  `
    );
  });
};

tulostaMixedValues();

// Harjoitus 4: Tulosta jokainen myArr-taulukon alkio ilman silmukkaa
let myArr = [1, "Koira", 3.14, false];

/*
Tulosta jokainen alkio myArr-taulukosta ilman silmukan käyttöä.
Odotettu tulos: 1, "Koira", 3.14, false
*/
myArr.forEach((element, index) => {
  console.log(element);
});
// Harjoitus 5: Etsi yleiset eläinlajit elainvarasto1 ja elainvarasto2 taulukoista
let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];

/*
Tunnista ja tulosta eläinlajit, jotka löytyvät molemmista taulukoista.
Odotettu tulos:
"Yhteinen laji: Kettu"
"Yhteinen laji: Karhu"
*/
let together = elainvarasto1.filter((elain) => elainvarasto2.includes(elain));
together.forEach((elain) => {
  console.log(`Yhteinen laji: ${elain}`);
});
// Harjoitus 6: Tulosta jokaisen eläinnimen kirjaimet animalNames-taulukosta
let animalNames = ["Leijona", "Tiikeri", "Panda"];

/*
Tulosta jokaisen animalNames-taulukon alkion kaikki kirjaimet.
Odotettu tulos:
"Kirjaimet sanassa 'Leijona': L, e, i, j, o, n, a"
...
"Kirjaimet sanassa 'Panda': P, a, n, d, a"
*/
animalNames.forEach((sana) => {
  const letters = sana.split("").join(",");
  console.log(`Kirjaimet sanassa  ${sana} : ${letters}`);
});

// Harjoitus 7: Suodata vain positiiviset lämpötilat temperatures-taulukosta
let temperatures = [-10, 5, -3, 15, -8, 20, 2];

/*
Kirjoita funktio getPositiveTemperatures, joka palauttaa uuden taulukon,
joka sisältää vain lämpötilat, jotka ovat suurempia kuin 0 temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
const getPositiveTemperatures = () => {
  //   temperatures.sort(function (a, b) {
  //     return b - a;
  //   });
  return temperatures.filter((temp) => temp > 0);
};
const positive = getPositiveTemperatures();
console.log("positive", positive);
// Harjoitus 8: Etsi "Kettu":n indeksi zooAnimals-taulukosta
let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];

/*
Etsi ja tallenna "Fox":n indeksi zooAnimals-taulukosta.
Odotettu tulos: "Fox:n indeksi: 3"
*/
const index = zooAnimals.indexOf("Kettu");
console.log("Fox:n indeksi: ", index);

// Harjoitus 9: Yritä etsiä eläin, jota ei ole zooAnimals-taulukossa
/*
Etsi "Pingviini":n indeksi zooAnimals-taulukosta.
Jos sitä ei löydy, tulosta "Pingviini ei ole eläintarhassa."
Odotettu tulos: -1
*/
const indexPin = zooAnimals.indexOf("Pingviini");
console.log("Pingviini:n indeksi: ", indexPin);

// Harjoitus 10: Korvaa "Kirahvi" sanalla "Alpakka" zooAnimals-taulukossa
/*
Odotettu tulos: ["Elefantti", "Alpakka", "Panda", "Kettu", "Kenguru"]
*/
zooAnimals.splice(zooAnimals.indexOf("Kirahvi"), 1, "Alpakka");
console.log("Korvaa  sanalla ", zooAnimals);
// Harjoitus 11: Lajittele safariAnimals-taulukko aakkosjärjestykseen
let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];

/*
Odotettu tulos: ['Elefantti', 'Gazelli', 'Leopardi', 'Zeebra']
*/
console.log("Sort ", safariAnimals.sort());

// Harjoitus 12: Käännä safariAnimals-taulukon järjestys
/*
Käännä safariAnimals-taulukon järjestys päinvastaiseksi.
Odotettu tulos: ['Zeebra', 'Leopardi', 'Gazelli', 'Elefantti']
*/
console.log("And reverse ", safariAnimals.reverse());
// Harjoitus 13: Tarkista sisältääkö zooAnimals "Tiikeri":n
/*
Odotettu tulos:
true (jos sisältää)
false (jos ei sisällä)
*/
console.log("included Tiikeri? ", zooAnimals.includes("Tiikeri"));
