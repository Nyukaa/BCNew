"use strict";

const mariadb = require("mariadb");

async function testi() {
  const yhteys = await mariadb.createConnection({
    host: "localhost", //'127.0.0.1'
    port: 3306,
    user: "maria",
    password: "123",
    database: "henkilokanta",
    //allowPublicKeyRetrieval:true
  });

  const tulos = await yhteys.query("SELECT * FROM henkilo");
  console.table(tulos); // красиво в виде таблицы

  const tulos2 = await yhteys.query(`
    SELECT etunimi, sukunimi, palkka, 
      CASE
        WHEN palkka = (SELECT min(palkka) FROM henkilo) THEN 'pienin'
        WHEN palkka = (SELECT max(palkka) FROM henkilo) THEN 'suurin'
        ELSE '' 
      END AS kuvaus, 
      CASE 
        WHEN palkka < (SELECT avg(palkka) FROM henkilo) THEN 'on'
        ELSE '' 
      END AS alleKeskiarvon
    FROM henkilo;
  `);
}

testi();
