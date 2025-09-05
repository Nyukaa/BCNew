"use strict";
//index7.js
const mariadb = require("mariadb");

const yhteystiedot = {
  host: "localhost", //'127.0.0.1'
  port: 3306,
  user: "maria",
  password: "123",
  database: "henkilokanta", //,
  // allowPublicKeyRetrieval:true //mysql
};

const haeSql = "select * from henkilo where henkiloId=?";

async function hae(id) {
  let yhteys;
  try {
    yhteys = await mariadb.createConnection(yhteystiedot);
    return await yhteys.query(haeSql, [id]);
  } catch (virhe) {
    return virhe.message;
  } finally {
    if (yhteys) yhteys.end();
  }
}

hae(1).then(console.log).catch(console.log);
hae(4).then(console.log).catch(console.log);
