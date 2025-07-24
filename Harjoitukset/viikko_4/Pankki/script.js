const ifinputField = document.getElementById("pincode");
const inputTall = document.getElementById("tall");
const inputNost = document.getElementById("nost");
const buttonTall = document.getElementById("btnTall");
const buttonNost = document.getElementById("btnNosta");
const saldo = document.getElementById("saldo");
const myForm = document.getElementById("myForm");
const inputField = document.getElementById("pincode");
// const displayDiv = document.getElementById("displayText");

function checkPin(event) {
  //   event.preventDefault();
  if (inputField.value === "1234") {
    const randomNumber = Math.floor(Math.random() * (15000 - 100 + 1)) + 100;
    saldo.textContent = randomNumber;
    myForm.classList.remove("hidden");
    inputField.value = "";
  }
}

inputField.addEventListener("input", checkPin);

function changeTall(event) {
  event.preventDefault();

  let nykyinenSaldo = Number(saldo.textContent);
  let tallennus = Number(inputTall.value);

  if (!isNaN(tallennus) && tallennus > 0) {
    saldo.textContent = nykyinenSaldo + tallennus;
    inputTall.value = "";
  } else {
    viesti.textContent = "Anna positivinen numero";
    viesti.style.color = "red";
  }
}

buttonTall.addEventListener("click", changeTall);

function changeNost(event) {
  event.preventDefault();

  let nykyinenSaldo = Number(saldo.textContent);
  let nosta = Number(inputNost.value);

  if (!isNaN(nosta) && nosta <= nykyinenSaldo && nosta > 0) {
    saldo.textContent = nykyinenSaldo - nosta;
    inputNost.value = "";
    viesti.textContent = "";
  } else if (nosta > nykyinenSaldo) {
    viesti.textContent = "Ei tarpeeksi saldoa";
    viesti.style.color = "red";
  } else {
    viesti.textContent = "Anna numero";
    viesti.style.color = "red";
  }
}

buttonNost.addEventListener("click", changeNost);
