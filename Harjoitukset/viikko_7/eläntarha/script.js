const animals = [
  { name: "Kettu", type: "Nisäkäs" },
  { name: "Karhu", type: "Nisäkäs" },
  { name: "Pöllö", type: "Lintu" },
  { name: "Kyykäärme", type: "Matelija" },
  { name: "Sammakko", type: "Sammakkoeläin" },
];
const list = document.getElementById("animalList");
render = (animals) => {
  list.innerHTML = "";

  animals.forEach((animal, index) => {
    const item = document.createElement("li");
    item.textContent = `${animal.name} – ${animal.type}`;
    // Если животное новое, добавляем класс "new-animal"
    if (animal.isNew) {
      item.classList.add("new-animal");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Poista";
    deleteBtn.addEventListener("click", () => {
      animals.splice(index, 1);
      render(animals);
    });
    item.appendChild(deleteBtn);
    list.appendChild(item);
  });
};
render(animals);

document.getElementById("filterType").addEventListener("change", function () {
  const selectedType = this.value;
  if (selectedType === "Kaikki") {
    render(animals);
  } else {
    const filtered = animals.filter((animal) => animal.type === selectedType);
    render(filtered);
  }
});
const searchInput = document.getElementById("searchAnimal");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = animals.filter((animal) =>
    animal.name.toLowerCase().includes(query)
  );
  if (filtered.length > 0) {
    render(filtered);
  } else {
    list.innerHTML = "<li>Eläimiä ei löytynyt.</li>";
  }
  // searchInput.value = "";
});

const sortList = () => {
  animals.sort((a, b) => a.name.localeCompare(b.name)); //корректно сравнивает строки с учётом локали (в том числе финского алфавита).
  render(animals);
};

document.getElementById("sortAnimals").addEventListener("click", sortList);
//add new animal
document.getElementById("addAnimal").addEventListener("click", () => {
  const nameInput = document.getElementById("newAnimalName");
  const typeSelect = document.getElementById("newAnimalType");
  const name = nameInput.value.trim();
  const type = typeSelect.value;
  if (name !== "") {
    // Добавляем нового животного с флагом isNew: true
    animals.push({ name, type, isNew: true });
    nameInput.value = "";
    typeSelect.selectedIndex = 0;
    render(animals);
    // Добавляем класс для нового животного
    const newAnimalItem = document.querySelector(`#animalList li:last-child`);
    newAnimalItem.classList.add("new-animal");
  }
});
//add new type
const allTypes = new Set([
  "Nisäkäs",
  "Lintu",
  "Matelija",
  "Sammakkoeläin",
  "Kala",
]);
const updateTypeDropdowns = () => {
  const filterSelect = document.getElementById("filterType");
  const typeSelect = document.getElementById("newAnimalType");

  for (const type of allTypes) {
    console.log(type);
    if (![...filterSelect.options].some((opt) => opt.value === type)) {
      const filterOption = document.createElement("option");
      filterOption.value = type;
      filterOption.textContent = type; // + "t" Например: Nisäkäs → Nisäkkäät
      filterSelect.appendChild(filterOption);
    }

    if (![...typeSelect.options].some((opt) => opt.value === type)) {
      const typeOption = document.createElement("option");
      typeOption.value = type;
      typeOption.textContent = type;

      typeSelect.appendChild(typeOption);
    }
  }
};

// Initial setup
updateTypeDropdowns();

document.getElementById("addAnimalGroup").addEventListener("click", () => {
  const newGroupInput = document.getElementById("newAnimalGroup");
  const newGroup = newGroupInput.value.trim();
  if (newGroup && !allTypes.has(newGroup)) {
    allTypes.add(newGroup);
    updateTypeDropdowns();
    newGroupInput.value = "";
  }
});

// Сохранить данные в localStorage
localStorage.setItem("animals", JSON.stringify(animals));

// Загрузить данные из localStorage при перезагрузке страницы
// const savedAnimals = JSON.parse(localStorage.getItem("animals"));
// if (savedAnimals) {
//   animals = savedAnimals;
//   render(animals);
// }
