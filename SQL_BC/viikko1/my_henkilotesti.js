"use strict";
const henkilot = require("./henkilot.json");

for (const henkilo of henkilot) {
  console.log(
    `Henkilö: ${henkilo.etunimi} ${henkilo.sukunimi}, Ikä: ${henkilo.ika}`
  );
}
for (const henkilo of henkilot) {
  if (henkilo.sukunimi === "Puro") console.log(henkilo);
}

for (const henkilo of henkilot) {
  if (henkilo["sukunimi"] === "Puro") console.log(henkilo);
}
function etsiHenkilot(henkilot, kentta, arvo) {
  const loydetyt = [];

  for (const henkilo of henkilot) {
    if (henkilo[kentta] === arvo) {
      loydetyt.push(henkilo);
    }
  }

  return loydetyt;
}

const tulos = etsiHenkilot(henkilot, "sukunimi", "Puro");
console.log(tulos);
console.log(etsiHenkilot(henkilot, "etunimi", "Leila"));
console.log(etsiHenkilot(henkilot, "ika", 15));
console.log(etsiHenkilot(henkilot, "ika", 5));
