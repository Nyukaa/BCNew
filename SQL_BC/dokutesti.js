"use strict";
const dokumentti = require("./dokumentti.json");

console.log(
  `Tekija: ${dokumentti.tekija.sukunimi}  ${dokumentti.tekija.etunimi}`
);
console.log(`Raportti: ${dokumentti.raportti.teksti.join(" ")}`);
