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

const filterAnimals = () => {
  const selectedType = document.getElementById("filterType").value;
  const query = document
    .getElementById("searchAnimal")
    .value.trim()
    .toLowerCase();

  let filtered = animals;

  if (selectedType !== "Kaikki") {
    filtered = filtered.filter((animal) => animal.type === selectedType);
  }

  if (query !== "") {
    filtered = filtered.filter((animal) =>
      animal.name.toLowerCase().includes(query)
    );
  }

  if (filtered.length > 0) {
    render(filtered);
  } else {
    list.innerHTML = "<li>Elämiä ei löytynyt.</li>";
  }
};

document.getElementById("filterType").addEventListener("change", filterAnimals);
document
  .getElementById("searchAnimal")
  .addEventListener("input", filterAnimals);

const sortList = () => {
  animals.sort((a, b) => a.name.localeCompare(b.name));
  render(animals);
};

document.getElementById("sortAnimals").addEventListener("click", sortList);

document.getElementById("addAnimal").addEventListener("click", () => {
  const nameInput = document.getElementById("newAnimalName");
  const typeSelect = document.getElementById("newAnimalType");
  const name = nameInput.value.trim();
  const type = typeSelect.value;
  document.getElementById("searchAnimal").value = "";
  document.getElementById("filterType").selectedIndex = 0;

  if (name !== "") {
    animals.push({ name, type, isNew: true });
    nameInput.value = "";
    typeSelect.selectedIndex = 0;
    render(animals);
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
      filterOption.textContent = type;
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

localStorage.setItem("animals", JSON.stringify(animals));
