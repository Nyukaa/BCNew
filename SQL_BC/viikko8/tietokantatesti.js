import mariadb from 'mariadb';

import sqlasetukset from './sqlasetukset.json' with {type:'json'};

// console.log(sqlasetukset);
// console.log(sqlasetukset.yhteystiedot);
// console.log(sqlasetukset.sqlLauseet.kaikkiKukat);
// console.log(sqlasetukset.sqlLauseet.kaikkiKukat.join(' '));

const sql=sqlasetukset.sqlLauseet;

const kaikkiKukatSql=sql.kaikkiKukat.join(' ');
const kaikkiPuutarhatSql=sql.kaikkiPuutarhat.join(' ');

import Tietokanta from './varastokirjasto.js';

const kanta=new Tietokanta(sqlasetukset.yhteystiedot);



const henkilodb = new Tietokanta({
    "host": "localhost",
    "port": 3306,
    "user": "maria",
    "password": "salainen",
    "database": "henkilokanta"
});

henkilodb.haeKaikki('select * from henkilo').then(console.log);
kanta.haeKaikki(kaikkiKukatSql).then(console.log);

// async function haeKaikki(sql){
//     let yhteys;
//     try{
//         yhteys=await mariadb.createConnection(sqlasetukset.yhteystiedot);
//         const tulos=await yhteys.query(sql);
//         return Promise.resolve(tulos);
//     }
//     catch(virhe){
//         console.log(virhe); //debuggausta varten
//         return Promise.resolve([]);
//     }
//     finally{
//         if(yhteys) yhteys.end();
//     }
// }


// haeKaikki(kaikkiKukatSql).then(console.log);
// haeKaikki(kaikkiPuutarhatSql).then(console.log);
