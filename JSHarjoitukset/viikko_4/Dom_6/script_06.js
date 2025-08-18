/* 
Luo lomake, jossa on pakolliset nimi- ja sähköpostikentät.
Kirjoita JavaScript-koodi, joka:
- Estää lomakkeen lähetyksen, jos jompikumpi kenttä on tyhjä.
- Näyttää virheilmoituksen, jos kenttiä on tyhjänä.
*/
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");

const myForm = document.getElementById("myForm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
document.getElementById(
  "output"
).textContent = `Your name is ${inputName.value} and email is ${inputEmail.value}`;

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let valid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  if (inputName.value.trim() === "") {
    nameError.textContent = "Write name";
    valid = false;
  }
  if (inputEmail.value.trim() === "") {
    emailError.textContent = "Write email";
    valid = false;
  }
  if (!valid) {
    event.preventDefault();
  }
  if (valid) {
    document.getElementById(
      "output"
    ).textContent = `Your name is ${inputName.value} and email is ${inputEmail.value}`;
    alert("Submitted");
  }
});
