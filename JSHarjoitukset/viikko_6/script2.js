/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/
const students = [
  { name: "Masha", age: 23, grade: 80 },
  { name: "Elja", age: 21, grade: 30 },
  { name: "Anna", age: 22, grade: 104 },
  { name: "Dmitry", age: 24, grade: 105 },
];
// for (let student of students) {
//   if (student.grade > 90) console.log(student.name);
// }
goodStudent = students
  .filter((student) => student.grade > 90)
  .forEach((student) => console.log(student.name));
// console.log("goodStudent:", goodStudent);
/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/

const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  isElectric: true,
};
function checkIfElectric(car) {
  if (car.isElectric) {
    console.log("This car is eco-friendly!");
  } else {
    console.log("This car runs on fuel.");
  }
}
checkIfElectric(car);
console.log(car.isElectric ? "sähkö" : "eisähkö");
/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    rating: 8.8,
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    rating: 8.7,
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    rating: 7,
  },
];
for (let movie of movies) {
  if (movie.rating > 8.5) console.log("Good film:", movie.title);
}
/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/
const cars = [
  {
    brand: "Tesla",
    model: "Model S",
    year: 2022,
    isElectric: true,
  },
  {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    isElectric: false,
  },
  {
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    isElectric: false,
  },
];
const findOldestCar = (cars) => {
  let oldestCar = cars[0];
  for (let car of cars) {
    if (car.year > oldestCar.year) {
      oldestCar = car;
    }
  }
  return oldestCar;
};
console.log("oldestCar:", findOldestCar(cars));
/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

const userProfiles = [
  { username: "masha", email: "masha@example.com", isAdmin: true },
  { username: "elja", email: "elja@example.com", isAdmin: false },
  { username: "anna", email: "anna@example.com", isAdmin: true },
  { username: "dmitry", email: "dmitry@example.com", isAdmin: false },
];
const isAdminCheck = (userProfiles) => {
  for (let user of userProfiles) {
    if (user.isAdmin) {
      console.log(user);
    }
  }
};
isAdminCheck(userProfiles);
/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/

const orders = [
  { orderId: 1, customerName: "Masha", totalAmount: 150, status: "completed" },
  { orderId: 2, customerName: "Elja", totalAmount: 200, status: "pending" },
  { orderId: 3, customerName: "Anna", totalAmount: 250, status: "completed" },
  { orderId: 4, customerName: "Dmitry", totalAmount: 100, status: "pending" },
];
const statusCheck = (orders) => {
  completedOrders = [];
  for (let order of orders) {
    if (order.status === "completed") {
      completedOrders.push(order);
    }
  }
  return completedOrders;
};
console.log("statusCheck:", statusCheck(orders));
/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

const smartphones = [
  {
    brand: "Samsung",
    model: "Galaxy S21",
    batteryLife: 24, // в часах
    is5GEnabled: true,
  },
  {
    brand: "Apple",
    model: "iPhone 13",
    batteryLife: 20,
    is5GEnabled: false,
  },
  {
    brand: "Google",
    model: "Pixel 6",
    batteryLife: 22,
    is5GEnabled: true,
  },
  {
    brand: "OnePlus",
    model: "OnePlus 9",
    batteryLife: 18,
    is5GEnabled: true,
  },
];
const check5G = (smartphones) => {
  for (let phone of smartphones) {
    if (phone.is5GEnabled) {
      console.log(`${phone.brand} ${phone.model}: This phone supports 5G!`);
    } else {
      console.log(
        `${phone.brand} ${phone.model}: This phone does not support 5G.`
      );
    }
  }
};
check5G(smartphones);
/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

const foxes = [
  { name: "Fenix", age: 4, habitat: "Forest" },
  { name: "Luna", age: 3, habitat: "Mountains" },
  { name: "Rusty", age: 5, habitat: "Grasslands" },
  { name: "Snow", age: 2, habitat: "Tundra" },
];
const checkFox = (foxes) => {
  for (let fox of foxes) {
    if (fox.age > 3) {
      console.log(`${fox.name} : This fox is an adult`);
    } else {
      console.log(`${fox.name} : This fox is young.`);
    }
  }
};
checkFox(foxes);

/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

const employees = [
  { name: "Anna", position: "Developer", salary: 4000 },
  { name: "Mikko", position: "Designer", salary: 3500 },
  { name: "Laura", position: "Project Manager", salary: 5000 },
  { name: "Jussi", position: "QA Engineer", salary: 3700 },
];
const salarySumma = (employees) => {
  summa = 0;
  for (let person of employees) {
    summa += person.salary;
  }
  return summa;
};
console.log("All salaries =", salarySumma(employees));
