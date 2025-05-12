/* Tehtävä 1
Tallenna merkkijono `"Hello, LocalStorage!"` LocalStorageen avaimella `"message"`.
Hae se ja tulosta konsoliin.
*/

localStorage.setItem("message", "Hello, LocalStorage!");
const savedMessage = localStorage.getItem("message");
console.log(savedMessage);

/* Tehtävä 2
Luo olio `userSettings`, jossa on:
- `theme` ("dark" tai "light")
- `language` ("English", "Spanish" jne.)

Muunna se JSON-merkkijonoksi ja tallenna LocalStorageen.
Hae se, pura JSON ja tulosta `theme`-ominaisuus.
*/

const userSettings = {
  theme: "dark",
  language: "English",
};
localStorage.setItem("userSettings", JSON.stringify(userSettings));
const userData = JSON.parse(localStorage.getItem("userSettings"));
console.log("theme:", userData.theme);

/* Tehtävä 3
Määrittele taulukko `favoriteBooks`, jossa on vähintään kolme kirjaoliota (`title` ja `author`).
Tallenna taulukko LocalStorageen.
Hae ja pura se, sitten tulosta kaikkien kirjojen nimet.
*/
const favoriteBooks = [
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
];
localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
const booksData = JSON.parse(localStorage.getItem("favoriteBooks"));
booksData.forEach((book, index) => {
  console.log(`Kirja ${index + 1}: ${book.title}`);
});

/* Tehtävä 4
Kirjoita funktio `saveToLocalStorage(key, object)`, joka:
- Muuntaa olion JSONiksi.
- Tallentaa sen LocalStorageen annetulla avaimella.
Testaa tallentamalla olio ja hakemalla se.
*/
const saveToLocalStorage = (key, object) => {
  const strJson = JSON.stringify(object);
  localStorage.setItem(key, strJson);
};
const userSettings2 = {
  theme: "light",
  language: "Spanish",
};
saveToLocalStorage("userSettings2", userSettings2);
const saveSettings2 = JSON.parse(localStorage.getItem("userSettings2"));
console.log(saveSettings2);

/* Tehtävä 5
Kirjoita funktio `getFromLocalStorage(key)`, joka:
- Hakee arvon LocalStoragesta.
- Purkaa sen jos se on JSON.
- Tulostaa haetun arvon.
*/
// function getFromLocalStorage(key) {
//   const value = localStorage.getItem(key);
//   try {
//     const parsed = JSON.parse(value);
//     console.log(parsed);
//     return parsed;
//   } catch (e) {
//     console.log(value);
//     return value;
//   }
// }

function getFromLocalStorage(key) {
  const parsed = JSON.parse(localStorage.getItem(key));
  console.log(parsed);
  return parsed;
}
const userSettings3 = {
  theme: "light",
  language: "Spanish",
};
localStorage.setItem("userSettings3", JSON.stringify(userSettings3));
getFromLocalStorage("userSettings3");

/* Tehtävä 6
Luo olio `userProfile`, jossa on:
- `username`
- `email`
- `preferences` (olio, jossa on `theme` ja `notifications`)

Tallenna se LocalStorageen.
Hae se ja päivitä `theme` arvoksi `"dark mode"`, sitten tulosta päivitetty olio.
*/

const userProfile = {
  username: "johndoe",
  email: "johndoe@example.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};
localStorage.setItem("userProfile", JSON.stringify(userProfile));
const userPrefer = JSON.parse(localStorage.getItem("userProfile"));
console.log("new theme:", (userPrefer.preferences.theme = "dark"));
console.log(userProfile, userPrefer);
/* Tehtävä 7
Määrittele olio `shoppingList`, jossa on taulukko `items` (merkkijonoja).
Tallenna se LocalStorageen.
Kirjoita funktio `addItemToList(item)`, joka:
- Hakee `shoppingList` LocalStoragesta.
- Lisää uuden tuotteen.
- Tallentaa päivitetyn listan takaisin LocalStorageen.
- Tulostaa päivitetyn listan.
*/
const shoppingList = {
  items: ["milk", "bread", "eggs", "cheese", "apples"],
};
localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
const addItemToList = (item) => {
  let parsedItems = JSON.parse(localStorage.getItem("shoppingList"));
  parsedItems.items.push(item);
  localStorage.setItem("shoppingList", JSON.stringify(parsedItems));
  console.log(parsedItems);
};
addItemToList("pear");
/* Tehtävä 8
Luo olio `counter`, jossa on:
- `count` (alkaa arvosta 0)
Tallenna se LocalStorageen.
Kirjoita funktio `incrementCounter()`, joka:
- Hakee counterin.
- Kasvattaa `count` arvoa yhdellä.
- Tallentaa päivitetyn counterin.
- Tulostaa uuden arvon.
*/

const incrementCounter = (counterKey) => {
  let parsedCounter = JSON.parse(localStorage.getItem("counterKey"));

  parsedCounter.count++;
  localStorage.setItem(counterKey, JSON.stringify(parsedCounter));
  console.log("Uusi arvo (новое значение):", parsedCounter.count);
};
counter = {
  count: 0,
};
localStorage.setItem("counterKey", JSON.stringify(counter));
incrementCounter("counterKey");
/* Tehtävä 9
Luo taulukko `tasks`, jossa jokainen tehtävä on olio (`id`, `description`, `completed`).
Tallenna se LocalStorageen.
Kirjoita funktio `markTaskComplete(taskId)`, joka:
- Hakee `tasks` LocalStoragesta.
- Etsii annetulla ID:llä olevan tehtävän ja asettaa `completed` arvoksi `true`.
- Tallentaa päivitetyt tehtävät.
- Tulostaa päivitetyn listan.
*/

const tasks = [
  {
    id: 1,
    description: "Lue sähköposti",
    completed: false,
  },
  {
    id: 2,
    description: "Tee JavaScript-harjoitus",
    completed: true,
  },
  {
    id: 3,
    description: "Käy kaupassa",
    completed: false,
  },
];
const markTaskComplete = (taskId) => {
  let parsedTasks = JSON.parse(localStorage.getItem("tasksKey"));

  for (let i = 0; i < parsedTasks.length; i++) {
    console.log("for");
    if (parsedTasks[i].id === taskId) {
      parsedTasks[i].completed = true;
      break;
    }
  }
  localStorage.setItem("tasksKey", JSON.stringify(parsedTasks));
  console.log(parsedTasks);
};
localStorage.setItem("tasksKey", JSON.stringify(tasks));
markTaskComplete(3);

/* Tehtävä 10
Kirjoita funktio `clearLocalStorage()`, joka poistaa kaiken LocalStorageen tallennetun datan.
Kutsu funktiota ja varmista että LocalStorage on tyhjä.
*/
const clearLocalStorage = () => {
  localStorage.clear();
};
clearLocalStorage();
console.log(localStorage);
console.log(localStorage.length); // Должно быть 0
console.log(localStorage.getItem("message"));
