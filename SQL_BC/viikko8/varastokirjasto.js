import mariadb from 'mariadb';

export default class Tietokanta{
    #yhteystiedot

    constructor(yhteystiedot){
        this.#yhteystiedot=yhteystiedot;
    }

    async haeKaikki(sql) {
        let yhteys;
        try {
            yhteys = await mariadb.createConnection(this.#yhteystiedot);
            const tulos = await yhteys.query(sql);
            return Promise.resolve(tulos);
        }
        catch (virhe) {
            console.log(virhe); //debuggausta varten
            return Promise.resolve([]);
        }
        finally {
            if (yhteys) yhteys.end();
        }
    }

    async hae(sql,parametrit) {
        let yhteys;
        try {
            yhteys = await mariadb.createConnection(this.#yhteystiedot);
            const tulos = await yhteys.query(sql,parametrit);
            return Promise.resolve(tulos);
        }
        catch (virhe) {
            console.log(virhe); //debuggausta varten
            return Promise.resolve([]);
        }
        finally {
            if (yhteys) yhteys.end();
        }
    }
} //luokan loppu