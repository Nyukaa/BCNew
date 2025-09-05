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

  const haeSql = "select * from henkilo  WHERE henkiloID=?";
  const tulos = await yhteys.query(haeSql, [1]);
  console.table(tulos);

  yhteys.end();
}
testi();
