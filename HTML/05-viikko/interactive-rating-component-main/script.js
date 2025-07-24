const form = document.querySelector(".myForm");
const ratingState = document.querySelector(".stateRating");
const thankState = document.querySelector(".stateThank");
const forSelect = document.querySelector(".forSelect");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // отменяем отправку формы

  // Получаем выбранное значение
  const selected = form.querySelector('input[name="option"]:checked');
  if (selected) {
    const value = selected.value;

    // Обновляем текст "You selected..."
    forSelect.textContent = `You selected ${value} out of 5`;

    // Переключаем экраны
    ratingState.style.display = "none";
    thankState.style.display = "block";
  } else {
    alert("Пожалуйста, выберите оценку :)");
  }
});
