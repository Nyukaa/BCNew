let statements = [];
let lieIndex = -1;

document.getElementById("inputForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Получаем утверждения
  statements = [
    document.getElementById("q1").value,
    document.getElementById("q2").value,
    document.getElementById("q3").value,
  ];

  // Получаем индекс лжи
  lieIndex = parseInt(
    document.querySelector('input[name="lie"]:checked').value
  );

  // Скрыть ввод, показать угадывание
  document.getElementById("inputPhase").classList.add("hidden");
  document.getElementById("guessPhase").classList.remove("hidden");

  // Показать утверждения игроку 2
  const guessContainer = document.getElementById("guessStatements");
  guessContainer.innerHTML = "";
  statements.forEach((stmt, index) => {
    guessContainer.innerHTML += `
          <p>
            <label>
              <input type="radio" name="guess" value="${index}" required />
              ${stmt}
            </label>
          </p>`;
  });
});

document.getElementById("guessForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const guess = parseInt(
    document.querySelector('input[name="guess"]:checked').value
  );
  const resultText = document.getElementById("result");

  if (guess === lieIndex) {
    resultText.textContent = "✅ Oikein! Arvasit valheen.";
  } else {
    resultText.textContent = `❌Väärin. Valhe oli: "${statements[lieIndex]}"`;
  }
});
