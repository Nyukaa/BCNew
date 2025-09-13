"use strict";

const mariadb = require("mariadb");

async function testi() {
  const yhteys = await mariadb.createConnection({
    host: "localhost", //'127.0.0.1'
    port: 3306,
    user: "maria",
    password: "salainen",
    database: "henkilokanta", //,
    // allowPublicKeyRetrieval:true //mysql
  });

  const tulos = await yhteys.query("select * from henkilo");

  console.log(tulos);

  const tulos2 = await yhteys.query(`select etunimi, sukunimi, palkka, 
    case
        when palkka=(select min(palkka) from henkilo) then 'pienin palkka'
        when palkka=(select max(palkka) from henkilo) then 'suurin palkka'
        else '' end as kuvaus, 
    case
        when palkka<(select avg(palkka) from henkilo) then 'on'
        else '' end as 'alleKeskiarvon'
from henkilo`);

  console.log(tulos2);

  yhteys.end();
}

testi(); //ajetaan testi-funktio
