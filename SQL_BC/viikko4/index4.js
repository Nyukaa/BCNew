'use strict';
//index4.js
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

    const paivitysSql='update henkilo set osasto=? where henkiloId=?';

    const tulos = 
        await yhteys.query(paivitysSql,['loitsut',100]);

        console.log(tulos);
        
    yhteys.end();
}

testi(); //ajetaan testi-funktio