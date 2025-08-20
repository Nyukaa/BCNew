'use strict';

const dokumentti=require('./dokumentti.json');

// console.log(dokumentti);

console.log(`Tekijä: ${dokumentti.tekija.sukunimi}, `+
                    `${dokumentti.tekija.etunimi}`);
console.log(`${dokumentti.raportti.otsikko} (${dokumentti.vuosi})`);
console.log('raportti:');
console.log(dokumentti.raportti.teksti.join(' '));
console.log(dokumentti.raportti.teksti.join('\n'));