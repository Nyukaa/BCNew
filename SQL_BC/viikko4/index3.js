'use strict';
//index3.js
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

    const lisaysSql='insert into henkilo values(?,?,?,?,?)'

    const tulos = 
        await yhteys.query(lisaysSql,[100,'Milla','Taikuri','secr',9000]);

        console.log(tulos);
        
    yhteys.end();
}

testi(); //ajetaan testi-funktio