/*use HTML 
Kysy käyttäjältä viisi kertaa jotain sanaa. Jos käyttäjä painaa vain "OK" ilman syötettä (eli antaa tyhjän vastauksen), ohita se. 

Tulosta lopuksi konsoliin kaikki annetut sanat. 
 */
const viisiSanat = () => {
  let sana = "!";
  let index = 0;
  while (index < 5) {
    sana = prompt("kirjoita sana");
    if (sana !== null && sana.trim() !== "") {
      index++;
    }
    console.log(sana);
  }
};
viisiSanat();
