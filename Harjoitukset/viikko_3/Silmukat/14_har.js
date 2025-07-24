/* 
Kirjoita funktio nimeltä createWordPyramid:
- Ota syötteenä sana (esim. "koodi").
- Käytä silmukkaa rakentaaksesi pyramidityylisen kuvion:
    Esimerkki sanalle "koodi":
    k
    ko
    koo
    kood
    koodi
*/
const createWordPyramid = (sana) => {
  let newsana = "";
  for (i of sana) {
    newsana += i;
    console.log(newsana);
  }
};
createWordPyramid("koodi");
