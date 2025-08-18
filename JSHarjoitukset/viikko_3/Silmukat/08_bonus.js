/* 
Muokkaa harjoituksen 4 (tehty opettajan kanssa) ohjelmaa niin, että 
ohjelma laskee KAIKKIEN annettujen matkojen keskinopeuden. 

Luo funktio allTripsAverageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään 
etäisyyden (kilometreinä) ja ajan (tunteina). 
Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
Silloin ohjelma tulostaa kaikkien matkojen yhteenlasketun keskinopeuden. 
 */
const allTripsAverageSpeed = () => {
  let allDistance = 0;
  let allTime = 0;
  while (true) {
    let distance = parseFloat(prompt("Etäisyys"));
    console.log(distance);

    if (distance === 0) {
      break;
    }

    if (isNaN(distance) || distance < 0) {
      continue;
    }

    let time = parseFloat(prompt("Aika"));
    console.log(time);

    if (isNaN(time) || time < 0) {
      continue;
    }
    allDistance += distance;
    allTime += time;

    let average = distance / time;

    console.log(average);
  }
  console.log(`Avarage all is ${allDistance / allTime}\ `);
};
allTripsAverageSpeed();
