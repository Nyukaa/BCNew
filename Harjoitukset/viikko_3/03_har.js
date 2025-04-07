/* Luo funktio averageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä)
 ja ajan (tunteina) ja laskee sitten keskinopeuden.
 Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
 Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä. */

// Tehdään tämä opettajan esimerkkinä, koska promptin käyttö ei ole vielä tuttua.

const averageSpeed = () => {
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
    let average = distance / time;
    console.log(average);
    alert("Average speed is " + average);
  }
};
averageSpeed();
