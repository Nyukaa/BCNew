//alert("Moi!");
const muutaja = "Hello";
function funktio() {
  let p = 5 * 6;
  let x, y, z;
  x = 5;
  y = 6;
  z = x + y;
  console.log("summa: ", z);
  let toinen = "arvo";
  console.log(toinen);
}
//Kutsu functio näin
funktio();
//Määrittele muuttuja nimeltään count alkuperäisellä arvolla 0 ja sitten lisää siihen yksi (lisää 1 siihen) seuraavalla rivillä.
let count;
count = 0;
count++;
// Määrittele muuttuja nimeltään ageLimit, jota ei voi uudelleen määrittää, ja anna sille arvoksi 18.
const ageLimit = 18;
// Määrittele kaksi muuttujaa: student ja name.
// Anna muuttujalle name arvoksi "Mikko".
// Kopioi arvo muuttujasta name muuttujaan student.
// Tulosta student-muuttujan arvo konsoliin (tulostus on "Mikko").
let name = "Mikko";
let student = name;
console.log(student);
/*
- Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
- Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
- Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
- Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
- Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

- Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.

- Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.
*/
function funktio1() {
  let age = 18;
  let name = "Anna";
  let isStudent = true;
  const hobbies = ["Musikki", "Jooga"];
  const obj = {
    schoolName: "Tiedekoulu",
    grade: 5,
  };
  console.log("Kaikki muutajat: ", age, name, isStudent, hobbies, obj);
  console.log(
    "Kaikki tyypit: ",
    typeof age,
    typeof name,
    typeof isStudent,
    typeof hobbies,
    typeof obj
  );
}
funktio1();
// Täydennä funktio convertNumberToString niin, että se muuntaa saamansa numeron merkkijonoksi.
// Täydennä funktio convertStringToNumber niin, että se muuntaa saamansa merkkijonon numeroksi.
// const number = 5;
// const str = "42";
function convertNumberToString(number) {
  return number.toString();
}

function convertStringToNumber(string) {
  return Number.parseInt(string);
}
console.log(convertNumberToString(42));
console.log(convertStringToNumber("42"));
// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log("lämpötila Celsius-astettä: ", fahrenheitToCelsius(243).toFixed(1));
/*
- Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
- Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.

- Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
- Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
- Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.

- Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
- Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().
*/
const num1 = 2.34567;
const num2 = 3.45;
roundedNum1 = Math.round(num1);
roundedNum2 = Math.round(num2);
sqrtNum1 = Math.sqrt(roundedNum1);
maxNum = Math.max(roundedNum1, roundedNum2);
console.log("Kaikki numerot ", roundedNum1, roundedNum2, sqrtNum1, maxNum);
console.log(
  "Kaikki tyypit: ",
  typeof roundedNum1,
  typeof roundedNum2,
  typeof sqrtNum1,
  typeof maxNum
);
/**Tehtävä: Jakolasku
 * Kuvitellaan, että olet matematiikan opettaja, ja haluat laatia yksinkertaisen tehtävän oppilaillesi. Tehtäväsi on luoda ohjelma, joka laskee kahden luvun jakolaskun ja tulostaa tuloksen.
 * - Luo kaksi muuttujaa, ja anna niille arvot.
 * - Laske näiden kahden numeron jakolaskun tulos ja tallenna se uuteen muuttujaan
 * - Tulosta vastaus konsoliin.
 */
const num3 = 14;
const num4 = 7;
const tulos = num3 / num4;
console.log("Tulos: ", tulos);
/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */
const paita = 56.45;
const hame = 34.34;
const kengät = 23;
const summa = paita + hame + kengät;
console.log("tuotteiden yhteishinta: ", summa);

/* 
- Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
- Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

- Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

- Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
*/
const a = 45;
const b = 6;
const u = a * b; // tulo,
const r = a - b; //erotus,
const s = a + b; //summa,
const d = a / b; //osamäärä,
const o = a % b; //jakojäännös
console.log(s, r, u, d, o);
/**Tehtävä: Merkkijonojen yhdistäminen
 * Luo kaksi muuttujaa, etunimi ja sukunimi, ja aseta niihin omat etu- ja sukunimesi.
 * Yhdistä nämä kaksi merkkijonoa ja tulosta tulos konsoliin.*/
str1 = "Anna  ";
str2 = "Shitikova";
console.log(str1 + str2);
