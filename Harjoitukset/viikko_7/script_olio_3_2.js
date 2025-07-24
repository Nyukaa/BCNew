/* Tehtävä 11
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/
const posts = [
  {
    title: "Ensimmäinen postaus",
    content: "Tämä on ensimmäisen postauksen sisältö.",
    likes: 12,
  },
  {
    title: "Toinen postaus",
    content: "Tässä postauksessa puhutaan JavaScriptistä.",
    likes: 30,
  },
  {
    title: "Kolmas postaus",
    content: "Tässä jaetaan vinkkejä koodaukseen.",
    likes: 25,
  },
];
const likes = [12, 30, 25];

document.getElementById("likeBtn0").addEventListener("click", () => {
  likes[0]++;
  console.log(likes[0]);
  document.getElementById("likes0").textContent = likes[0];
});

document.getElementById("likeBtn1").addEventListener("click", () => {
  likes[1]++;
  document.getElementById("likes1").textContent = likes[1];
});

document.getElementById("likeBtn2").addEventListener("click", () => {
  likes[2]++;
  document.getElementById("likes2").textContent = likes[2];
});
/* Tehtävä 12
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  showInfo() {
    return `Nimi: ${this.name}, Tehtävä: ${this.position}, Palkka: ${this.salary} €`;
  }
  increaseSalary(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}
const person = new Employee("Anna", "kehittäjä", 1000);

const infoP = document.getElementById("info");
const input = document.getElementById("procent");
const btn = document.getElementById("raise");

function updateView() {
  infoP.textContent = person.showInfo();
}
btn.addEventListener("click", () => {
  const percent = parseFloat(input.value);
  if (!isNaN(percent)) {
    person.increaseSalary(percent);
    updateView();
  }
});
updateView();

/* Tehtävä 13
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/
class Timer {
  constructor() {
    this.seconds = 0;
  }
  start() {
    this.seconds = 0;
    this.interval = setInterval(() => {
      this.seconds++;
      this.updateDisplay();
    }, 1000);
  }
  updateDisplay() {
    const display = document.getElementById("timerDisplay");
    display.textContent = `Aika: ${this.seconds} sekuntia`;
  }
  stop() {
    clearInterval(this.interval);
  }
}
const timer = new Timer();

// timer.start();
/* Tehtävä 14
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  //   showInfo() {
  //     return `Название: ${this.title}, Автор: ${this.author}, Количество страниц: ${this.pages}`;
  //   }
}
const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const titleInput = document.getElementById("title");
  const bookTitle = titleInput.value.trim();
  if (bookTitle !== "") {
    const newItem = document.createElement("li");
    newItem.textContent = bookTitle;
    bookList.appendChild(newItem);
    titleInput.value = "";
  }
});
/* Tehtävä 15
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/
const foxTracker = {
  foxes: [],
  addFox(name, location) {
    this.foxes.push({ name, location });
    this.render();
  },
  render() {
    const list = document.getElementById("foxList");
    list.innerHTML = "";
    this.foxes.forEach((fox) => {
      const item = document.createElement("li");
      item.textContent = `${fox.name} – ${fox.location}`;
      list.appendChild(item);
    });
  },
};
document.getElementById("foxForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const location = document.getElementById("location").value.trim();
  if (name && location) {
    foxTracker.addFox(name, location);
    this.reset();
  }
});
