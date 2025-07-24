const inputName = document.getElementById("name");
const inputlName = document.getElementById("lname");
const inputEmail = document.getElementById("email");
const password = document.getElementById("password");
const confPassword = document.getElementById("confPassword");
console.log(inputName.value);
const myForm = document.getElementById("myForm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const lnameError = document.getElementById("lnameError");
const passError = document.getElementById("passError");
const confPassError = document.getElementById("passError");
const wrongPass = document.getElementById("wrongPass");

// document.getElementById(
//   "output"
// ).textContent = `Your name is ${inputName.value}  ${inputlName.value} and email is ${inputEmail.value}`;

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let valid = true;

  nameError.textContent = "";
  lnameError.textContent = "";
  emailError.textContent = "";
  wrongPass.textContent = "";
  confPassError.textContent = "";
  passError.textContent = "";

  if (inputName.value.trim() === "") {
    nameError.textContent = "Write name";
    inputName.style.border = "2px solid red";
    valid = false;
  } else {
    inputEmail.style.border = "";
  }
  if (inputlName.value.trim() === "") {
    lnameError.textContent = "Write last name";
    valid = false;
  }
  if (inputEmail.value.trim() === "") {
    emailError.textContent = "Write email";
    valid = false;
  }
  if (password.value.trim() === "") {
    passError.textContent = "Write pass";
    valid = false;
  }
  if (confPassword.value.trim() === "") {
    confPassError.textContent = "Write 2 pass";
    valid = false;
  }
  if (confPassword.value.trim() !== password.value.trim()) {
    wrongPass.textContent = "Passowords are not the same";
    valid = false;
  }

  if (!valid) {
    event.preventDefault();
  }
  if (valid) {
    document.getElementById(
      "output"
    ).textContent = `Your name is ${inputName.value}  ${inputlName.value} and email is ${inputEmail.value}`;
    alert("Submitted");
  }
});
