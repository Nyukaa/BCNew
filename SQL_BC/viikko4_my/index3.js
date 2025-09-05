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

  const lisaysSql = "insert into henkilo values(?,?,?,?,?)";
  const tulos = await yhteys.query(lisaysSql, [
    100,
    "Milla",
    "Taikuri",
    "secr",
    9000,
  ]);
  console.table(tulos);

  yhteys.end();
}
testi();
