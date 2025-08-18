/* 
Alkuperäinen data:
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];

1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.  */
let teamMembers = ["Joni", "Emilia", "Mikko", "Sade"];
for (let i = 0; i < teamMembers.length; i++) {
  console.log(teamMembers[i]);
}
//2. Poista taulukon ensimmäinen jäsen.
const last = teamMembers.shift();
console.log("delete first element: ", teamMembers);
//3. Poista taulukon viimeinen jäsen.
const popT = teamMembers.pop();
console.log("with pop element: ", teamMembers);

//4. Lisää uusi jäsen "Alex" taulukon alkuun.
teamMembers.unshift("Alex");
console.log("with unshift element: ", teamMembers);
//5. Lisää uusi jäsen "Linda" taulukon loppuun.
teamMembers.push("Linda");
console.log("with push element: ", teamMembers);
//6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi.
let newTeamMembers = teamMembers.slice(2);
console.log("with new taulukko ", newTeamMembers);
//7. Etsi "Mikko":n indeksi taulukossa.
const indexMikko = teamMembers.indexOf("Mikko");
console.log("indexOf Mikko", indexMikko);
//8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa).
console.log("indexOf Jake", teamMembers.indexOf("Jake"));
//9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta".
teamMembers.splice(indexMikko, 1, "Maria", "Netta");
console.log("add 2 new with splice", teamMembers);
//10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.
let teamMembersAhmad = teamMembers.concat("Ahmad");
console.log("with concat element: ", teamMembers, teamMembersAhmad);
//11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.
let teamMembers2 = teamMembers.slice();
console.log(" kopio with slice : ", teamMembers2);
//12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.
const newMembers = ["Tiina", "Myrsky"];
teamMembers = teamMembers.concat(newMembers);
console.log(" concat newMembers: ", teamMembers);
//13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon.
let countJoni = [];
for (let i = 0; i < teamMembers.length; i++) {
  if (teamMembers[i] === "Joni") {
    countJoni.push(i);
  }
}
console.log("Joni on positions", countJoni);
//14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.
let uppercasedTeam = teamMembers.map((name) => name.toUpperCase());
console.log("Uppercased:", uppercasedTeam);
//15. Lajittele `teamMembers` aakkosjärjestykseen.
console.log("Sorted", teamMembers.sort());
//16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.
console.log("toReversed", teamMembers.toReversed());
//17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".
let exists = teamMembers.some((member) => member === "Joni");
console.log("Onko joukossa 'Joni'?", exists);
//18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.
let allLongerThan3 = teamMembers.every((name) => name.length > 3);
console.log("Onko kaikilla nimillä yli 3 kirjainta?", allLongerThan3);
