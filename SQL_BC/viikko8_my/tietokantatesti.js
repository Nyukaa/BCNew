import mariadb from "mariadb";

import sqlasetukset from "./sqlasetukset.js" with {type:"json"};
import Tietokanta from "./varastokirjasto.js";

//console.log(sqlasetukset);
 //console.log(sqlasetukset.yhteystiedot);
 //console.log(sqlasetukset.sqlLauseet.kaikkiKukat.join(' '));

 const sql=sqlasetukset.sqlLauseet;

 const kaikkiKukatSql=sql.kaikkiKukat.join(' ');
 const kaikkiPuutarhatSql=sql.kaikkiPuutarhat.join(' ');

import Tietokanta from "./varastokirjasto.js";

const kanta=new Tietokanta(sqlasetukset.yhteystiedot);

kanta.haeKaikki(kaikkiKukatSql).then(console.log);


const henkilodb = new Tietokanta({
    "host": "localhost",
    "port": 3306,

    "user":"Maria",
    "password":"salainen",
    "database":"henkilokanta"
});
henkilodb.haeKaikki("SELECT * FROM Henkilo").then(console.log);
kanta.haeKaikki(kaikkiKukatSql).then(console.log);

//  async function haeKaikki(sql){
//     let yhteys;
//     try {
//         yhteys=await mariadb.createConnection(sqlasetukset.yhteystiedot);
//         const tulos =await yhteys.query(sql);
//         return Promicse.resolve(tulos);
//     } catch (err) {
//         return Promise.resolve([]);
//         // throw err;
//     } finally {
//         if (yhteys) yhteys.end();
//     }

//  }
 export{haeKaikki}
//haeKaikki(kaikkiKukatSql).then(console.log);
//haeKaikki(kaikkiPuutarhatSql).then(console.log);


