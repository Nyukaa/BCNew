"use strict";

const mariadb = require("mariadb");

async function testi() {
  const yhteys = await mariadb.createConnection({
    host: "localhost",
    port: 3306,
    user: "pomo",
    password: "1234",
    database: "yrityskanta",
  });

  const tulos = await yhteys.query(
    "select osastonNimi, count(henkiloId) as lkm " +
      "from osasto " +
      "left join henkilo on osastoId = osastoNumero " +
      "group by osastonNimi " +
      "order by lkm desc, osastonNimi asc;"
  );

  console.table(tulos); // красиво выводим таблицу
  for (const osasto of tulos) {
    console.log(`${osasto.osastonNimi}: ${Number(osasto.lkm)}`);
  }
  yhteys.end();
}

testi();
