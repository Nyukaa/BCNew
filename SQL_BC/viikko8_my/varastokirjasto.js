import mariadb from "mariadb";
export default class Tietokanta {
  #yhteystiedot;
  constructor(yhteystiedot) {
    this.#yhteystiedot = yhteystiedot;
  }
  async haeKaikki(sql) {
    let yhteys;
    try {
      yhteys = await mariadb.createConnection(sqlasetukset.#yhteystiedot);
      const tulos = await yhteys.query(sql);
      return Promise.resolve(tulos);
    } catch (err) {
      return Promise.resolve([]);
      // throw err;
    } finally {
      if (yhteys) yhteys.end();
    }
  }
  async hae(sql, parametrit) {
    let yhteys;
    try {
      yhteys = await mariadb.createConnection(sqlasetukset.#yhteystiedot);
      const tulos = await yhteys.query(sql, parametrit);
      return Promise.resolve(tulos);
    } catch (err) {
      return Promise.resolve([]);
      // throw err;
    } finally {
      if (yhteys) yhteys.end();
    }
  }
}
