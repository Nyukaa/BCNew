'use strict';

const binA=0b1101;
console.log(binA);

const kasiA=0o123;
console.log(kasiA);

const heksaA=0x1A;
console.log(heksaA);

console.log((12).toString(2));
console.log(Number(12).toString(2));

const binaari=0B11001010;
console.log(binaari);
console.log(binaari.toString(16).toUpperCase());
console.log(binA.toString(2).padStart(8,'0'));
console.log(binA.toString(2).padStart(10, 'x'));

const apu=parseInt('FE',16);
console.log(apu);

const apu2='01010101';
const apu2muunnettu=parseInt(apu2,2);
console.log(apu2muunnettu);

console.log(`${'dec'.padStart(8,' ')} ${'hex'.padStart(8,' ')} ${'bin'.padStart(8,' ')}`);
for(let i=0; i<16;i++){
    console.log(`${i.toString().padStart(8,' ')} ${i.toString(16).toUpperCase().padStart(8,' ')} `+
                `${i.toString(2).padStart(8,'0')}`);
}

