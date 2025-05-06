/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  showInfo() {
    console.log(`Käyttäjänimi: ${this.username}, Sähköposti: ${this.email}`);
  }
}

const user1 = new User("maija92", "maija@example.com");

user1.showInfo();

/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/

class Users {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  showInfo() {
    console.log(`Käyttäjänimi: ${this.username}, Sähköposti: ${this.email}`);
  }
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
const userAnna = new Users("Anna", "my@mail.com");
userAnna.showInfo();
userAnna.changeEmail("new@mail.com");
userAnna.showInfo();
/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/

class Theme {
  constructor(name, isActive) {
    this.name = name;
    this.isActive = isActive;
  }
  toggleTheme() {
    if (this.name === "light") {
      this.name = "dark";
    } else {
      this.name = "light";
    }
    this.isActive = !this.isActive;
    document.body.className = this.name; // Päivitetään sivun ulkoasu
    console.log(`Teema vaihdettu: ${this.name}, Aktiivinen: ${this.isActive}`);
  }
}
const currentTheme = new Theme("light", true);
document.body.className = currentTheme.name;
const btn = document.getElementById("btn_toggle");
btn.addEventListener("click", () => {
  currentTheme.toggleTheme();
});
/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnValue = document.getElementById("btnValue");
const counter = {
  value: 0,
  increment() {
    this.value++;
    counter.updateDisplay();
  },
  reduce() {
    this.value--;
    counter.updateDisplay();
  },
  updateDisplay() {
    btnValue.textContent = this.value;
  },
};

counter.updateDisplay();

btnPlus.addEventListener("click", () => {
  counter.increment();
});
btnMinus.addEventListener("click", () => {
  counter.reduce();
});
/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/
const totalP = document.getElementById("product.total");
const product = {
  name: "book",
  price: 750,
  quantity: null,
  totalShow() {
    this.quantity = parseInt(document.getElementById("product.quantity").value);
    this.updateDisplay();
  },

  updateDisplay() {
    document.getElementById("product.name").textContent = this.name;
    document.getElementById("product.price").textContent = this.price;

    totalP.textContent = this.quantity * this.price;
  },
};

product.updateDisplay();

document.getElementById("product.quantity").addEventListener("input", () => {
  product.totalShow();
});

/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/
let tasks = [];
class Task {
  constructor(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
  // Метод для вывода информации о задаче
  showInfo() {
    return `Title: ${this.title} <br> Description: ${
      this.description
    } <br> Completed: ${this.completed ? "Yes" : "No"}`;
  }
}
const task1 = new Task("Learn JavaScript", "Complete JS course", false);
document.getElementById("new_task").addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const completed = document.getElementById("completed").value;
  // Создаем новый объект Task
  const newTask = new Task(title, description, completed);

  // Добавляем задачу в массив
  tasks.push(newTask);

  // Отображаем информацию о задаче
  document.getElementById("show_task").innerHTML = newTask.showInfo();

  // Очистить поля ввода после добавления
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("completed").value = "";
});
/* Tehtävä 7
Luo olio `weatherApp`, jossa on metodi `fetchWeather(city)`.
Käytä `fetch`-funktiota hakeaksesi säätietoja API:sta ja näytä ne HTML-elementissä.
(API: OpenWeather tai jokin muu ilmainen sää-API)
*/
const weatherApp = {
  fetchWeather() {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=60.1695&longitude=24.9354&current=temperature_2m&current=rain"
    ).then((response) => {
      response.json().then((json) => {
        console.log(
          "The weather in Helsinki:",
          json.current.temperature_2m,
          "Rain is:",
          json.current.rain
        );
      });
    });
  },
};
weatherApp.fetchWeather();

/* Tehtävä 8
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  // Метод для вывода информации о задаче
  age() {
    return 2025 - this.year;
  }
  showInfo() {
    return `Auto: ${this.brand} ${this.model}, Age: ${this.age()} years`;
  }
}
const newCar = new Car("BMW", "d22", 2012);
document.getElementById("show_car").innerHTML = newCar.showInfo();
/* Tehtävä 9
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/
const users = [
  { name: "Anna", score: 85 },
  { name: "Mikko", score: 92 },
  { name: "Liisa", score: 78 },
  { name: "Jari", score: 66 },
];

const sortList = () => {
  users.sort((a, b) => a.score - b.score); // Сортировка по убыванию
  const listHTML = users
    .map((user) => `<p>${user.name}: ${user.score}</p>`)
    .join("");
  document.getElementById("sortedList").innerHTML = listHTML;
};

document.getElementById("sort").addEventListener("click", sortList);
/* Tehtävä 10
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/
const shoppingList = {
  items: ["maito", "leipä", "juusto"],

  addItem(item) {
    this.items.push(item);
    this.showList();
  },

  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
    console.log("removing");
    this.showList();
  },

  showList() {
    const list = document.getElementById("itemList");
    list.innerHTML = "";
    this.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  },
};
shoppingList.showList();
document.getElementById("itemForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("itemInput");
  const newItem = input.value.trim();
  if (newItem) {
    shoppingList.addItem(newItem);
    input.value = "";
  }
});
document.getElementById("delete").addEventListener("click", function (e) {
  //   e.preventDefault();
  const itemToRemove = document.getElementById("itemDelete").value.trim();
  if (itemToRemove) {
    shoppingList.removeItem(itemToRemove);
    document.getElementById("itemDelete").value = "";
  }
});
