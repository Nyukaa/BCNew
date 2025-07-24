const inputEmail = document.getElementById("inputEmail");
const emailError = document.getElementById("emailError");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let valid = true;
  emailError.textContent = "";

  // Check if email is empty
  if (inputEmail.value.trim() === "") {
    emailError.textContent = "Please provide an email";
    console.log("Error: Email is empty");
    valid = false;
  } else {
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Check if the email matches the pattern
    if (!emailPattern.test(inputEmail.value.trim())) {
      emailError.textContent = "Please provide a valid email address";
      console.log("Error: Invalid email format");
      valid = false;
    }
  }

  // If the email is valid, show the message and submit
  //   if (valid) {
  //     document.getElementById(
  //       "output"
  //     ).textContent = `Your email is ${inputEmail.value}`;
  //     alert("Submitted");
  //   }
});
