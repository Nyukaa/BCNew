'use strict';

const henkilot=require('./henkilot.json');

// console.log(henkilot);

// for(const henkilo of henkilot){
//     if(henkilo.sukunimi==='Puro'){
//         console.log(henkilo);
//     }
// }
// console.log('###############');
// for (const henkilo of henkilot) {
//     if (henkilo['sukunimi'] === 'Puro') {
//         console.log(henkilo);
//     }
// }

function hae(kentta,arvo){
    const loydetyt=[];
    for(const henkilo of henkilot){
        if(henkilo[kentta]==arvo){
            loydetyt.push(henkilo);
        }
    }
    return loydetyt;
}

const uusi = {
    //js oliossa voi olla kommentteja
    etunimi: "Maija",
    "sukunimi": 'Aakkonen',
    ika: 30
}

henkilot.push(uusi);

console.log(hae('sukunimi','Puro'));
console.log(hae("etunimi",'Leila'));
console.log(hae('ika',30));
console.log(hae('ika', 15));

for(const henkilo of hae('sukunimi','Puro')){
    console.log(`${henkilo.etunimi}, ${henkilo.ika}`);
}