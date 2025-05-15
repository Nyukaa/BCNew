const answers = [
  "Epäilemättä",
  "Totta kai",
  "Kysy myöhemmin",
  "Älä laske sen",
  "Ei",
  "Kyllä",
  "Ehkä",
  "on epämääräinen",
];

const input = document.getElementById("questionInput");
const button = document.getElementById("askButton");
const ball = document.getElementById("magicBall");
const windowText = document.getElementById("answerWindow");

function shakeBall() {
  const question = input.value.trim();

  if (!question) {
    alert("Kysy jotain.");
    return;
  }

  windowText.textContent = "?";
  windowText.classList.remove("show-answer");
  ball.classList.add("shake");
  //vibration;
  navigator.vibrate?.(200);

  ball.addEventListener("animationend", function handleAnimation() {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    windowText.textContent = randomAnswer;
    ball.classList.remove("shake");
    windowText.classList.add("show-answer");
    ball.removeEventListener("animationend", handleAnimation);
  });
}

button.addEventListener("click", shakeBall);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") shakeBall();
});
