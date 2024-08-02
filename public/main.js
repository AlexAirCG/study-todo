// Находим элементы на странице
const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");

form.addEventListener("submit", function (event) {
  // Отменяем отправку формы
  event.preventDefault();

  // Достаем текст задачи из поля ввода
  const taskText = taskInput.value;

  // Формируем разметку для новой задачи
});
