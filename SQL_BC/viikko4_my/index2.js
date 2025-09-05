"use strict";

const mariadb = require("mariadb");

async function testi() {
  const yhteys = await mariadb.createConnection({
    host: "localhost", // или '127.0.0.1'
    port: 3306,
    user: "maria",
    password: "123",
    database: "henkilokanta",
    //allowPublicKeyRetrieval:true
  });

  const tulos = await yhteys.query(
    "SELECT * FROM henkilo ORDER BY sukunimi ASC"
  );
  for (const henkilo of tulos) {
    console.log(`${henkilo.etunimi} ${henkilo.sukunimi} (${henkilo.osasto})`);
  }

  yhteys.end();
}

testi();
