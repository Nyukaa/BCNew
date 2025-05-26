# 🎱 Magic 8-Ball – Ennustussovellus

![HTML5](https://img.shields.io/badge/HTML5-✅-orange)
![CSS3](https://img.shields.io/badge/CSS3-✅-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-✅-yellow)
![Status](https://img.shields.io/badge/Project-Done-green)

Interaktiivinen Magic 8-Ball -sovellus, jossa käyttäjä voi esittää kysymyksen ja saada satunnaisen vastauksen animaation kera.

---

## 💡 Toiminnallisuus

- 📝 Käyttäjä syöttää kysymyksen tekstikenttään
- 🔮 Klikkaamalla **Kysy**-painiketta pallo alkaa ravista
- 💬 Satunnainen vastaus ilmestyy pallon sisäikkunaan
- ✅ Käytettävissä myös **Enter**-näppäimellä

---

## 🎨 Ulkoasu (CSS)

- Pyöreä **Magic 8-Ball** (300 × 300 px)
- Sisäympyrä ("ikkuna") vastaukselle
- `@keyframes`-animaatio pallon ravistelulle
- Glow-efekti "Magic 8-Ball" -tekstille
- Fade-in-animaatio vastauksen ilmestymiselle

---

## 🧠 Toiminta (JavaScript)

- 🧾 Vastaustaulukko, jossa vähintään 8 satunnaista vastausta
- 🔍 DOM-elementtien valinta:

  - syötekenttä
  - kysymysnappi
  - pallo
  - vastausteksti

- 🛠️ Funktio:

  - Tarkistaa, että kysymys on annettu
  - Käynnistää `.shake`-animaation
  - Odottaa `animationend`-tapahtuman
  - Näyttää satunnaisen vastauksen fade-in-efektillä

- 🖱️ Tapahtumakuuntelijat:
  - `click`-tapahtuma painikkeelle
  - `Enter`-näppäin syötekentässä

---

## 🚀 Käynnistäminen

1. Lataa tai kloonaa repositorio
2. Avaa `index.html` selaimessa
3. Syötä kysymys ja klikkaa **Kysy**

---

## 📜 Lisenssi

Tämä projekti on tehty oppimistarkoituksessa. Voit käyttää, muokata ja jakaa vapaasti ilman rajoituksia.

---

## 🙌 Kiitokset

Projekti on toteutettu osana web-kehityksen harjoituksia. Erityiskiitos AI-työkaluille inspiraatiosta CSS-efekteihin.
