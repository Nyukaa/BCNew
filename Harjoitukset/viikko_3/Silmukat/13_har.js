/* Use HTML
Kirjoita funktio nimeltä validatePassword:
- Käytä silmukkaa salliaksesi käyttäjän syöttää salasana.
- Jos salasana on "oikein123", tulosta: "Salasana oikein!" ja poistu silmukasta.
- Jos salasana on väärä, pyydä käyttäjää uudelleen viestillä: "Yritä uudelleen!".
*/
const validatePassword = () => {
  parol = "";
  while (parol !== "oikein123") {
    parol = prompt("kirjoita salasana uudelleen! ");
  }
  alert("Salasana oikein!");
};
validatePassword();
