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

myForm.addEventListener("submit", function (event) {
  let valid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  if (inputName.value.trim() === "") {
    nameError.textContent = "Write name";
    valid = false;
  }
  if (inputEmail.value.trim() === "") {
    nameError.textContent = "Write email";
    valid = false;
  }
  if (!valid) {
    event.preventDefault();
  }
  if (valid) {
    alert("Submitted");
    inputName.value = "";
    inputEmail.value = "";
  }
});
