const myForm = document.getElementById("myForm");
const inputName = document.getElementById("fname");
const inputlName = document.getElementById("lname");
const inputEmail = document.getElementById("email");
const radioButtons = document.querySelectorAll('input[name="Query_Type"]');
const messageBox = document.getElementById("message");
const consentBox = document.getElementById("consent");

const nameError = document.getElementById("nameError");
const lnameError = document.getElementById("lnameError");
const emailError = document.getElementById("emailError");
const radioError = document.getElementById("radioError");
const messageError = document.getElementById("messageError");
const consentError = document.getElementById("consentError");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let valid = true;

  [inputName, inputlName, inputEmail, messageBox, consentBox].forEach((el) => {
    el.classList.remove("input-error");
  });
  [nameError, lnameError, emailError, messageError, consentError].forEach(
    (err) => (err.textContent = "")
  );
  radioError.textContent = "";

  if (inputName.value.trim() === "") {
    nameError.textContent = "This field is required";
    inputName.classList.add("input-error");
    valid = false;
  }

  if (inputlName.value.trim() === "") {
    lnameError.textContent = "This field is required";
    inputlName.classList.add("input-error");
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (inputEmail.value.trim() === "") {
    emailError.textContent = "This field is required";
    inputEmail.classList.add("input-error");
    valid = false;
  } else if (!emailPattern.test(inputEmail.value.trim())) {
    emailError.textContent = "Please enter a valid email address";
    inputEmail.classList.add("input-error");
    valid = false;
  }
  let radioChecked = false;
  radioButtons.forEach((radio) => {
    if (radio.checked) radioChecked = true;
  });
  if (!radioChecked) {
    radioError.textContent = "Please select a query type";
    radioButtons.forEach((radio) => {
      radio.classList.add("input-error");
    });
    valid = false;
  }

  if (messageBox.value.trim() === "") {
    messageError.textContent = "This field is required";
    messageBox.classList.add("input-error");
    valid = false;
  }
  if (!consentBox.checked) {
    consentError.textContent =
      "To submit this form, please consent to being contacted";
    consentBox.classList.add("input-error");
    valid = false;
  }

  if (valid) {
    const successBox = document.getElementById("successMessage");
    successBox.style.display = "block";
    myForm.reset();

    [inputName, inputlName, inputEmail, messageBox, consentBox].forEach(
      (el) => {
        el.classList.remove("input-error");
      }
    );
    setTimeout(() => {
      successBox.style.display = "none";
    }, 10000);
  }
});
