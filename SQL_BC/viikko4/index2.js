'use strict';

const mariadb = require('mariadb');

async function testi(){
    const yhteys = await mariadb.createConnection({
        host:'localhost', //'127.0.0.1'
        port:3306,
        user:'maria',
        password:'salainen',
        database:'henkilokanta'//,
        // allowPublicKeyRetrieval:true //mysql
    });

    const tulos = 
        await yhteys.query('select * from henkilo order by sukunimi asc, etunimi asc');

        for(const henkilo of tulos){
            console.log(`${henkilo.etunimi} ${henkilo.sukunimi} (${henkilo.osasto})`);
        }
        
    yhteys.end();
}

testi(); //ajetaan testi-funktio