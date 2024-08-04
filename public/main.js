// Находим элементы на странице
const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const tasksList = document.querySelector("#tasksList");
const emptyList = document.querySelector("#emptyList");

// Добавление задачи
form.addEventListener("submit", addTask);

// Уадление задачи
tasksList.addEventListener("click", deleteTask);

// Завершенные задачи
tasksList.addEventListener("click", doneTask);

// Функции
function addTask(event) {
  // Отменяем отправку формы
  event.preventDefault();

  // Достаем текст задачи из поля ввода
  const taskText = taskInput.value;

  // Формируем разметку для новой задачи
  const taskHTML = `          
        <li id="list-item" class="list-group-item">
            <span class="task-title">${taskText}</span>
            <div class="task-item__buttons bg-white">
              <button id="btn-action" type="button" data-action="done">
                <img src="tick.svg" alt="Done" width="18" height="18" />
              </button>
              <button
                type="button"
                data-action="delete"
                id="btn-action"
              >
                <img src="cross.svg" alt="Done" width="18" height="18" />
              </button>
            </div>
          </li>
          `;

  // Добавить задачу на страницу
  tasksList.insertAdjacentHTML("beforeend", taskHTML);

  // Очищаем поле ввода и возвращаем на него фокус
  taskInput.value = "";
  taskInput.focus();

  if (tasksList.children.length > 1) {
    emptyList.classList.add("none");
  }
}

function deleteTask(event) {
  // Проверяем если клик был НЕ по кнопке "удалить задачу"
  if (event.target.dataset.action !== "delete") {
    return;
  }
  const parentNode = event.target.closest(".list-group-item");

  parentNode.remove();

  // Если нет задач показываем блок "Список дел пуст"
  if (tasksList.children.length === 1) {
    emptyList.classList.remove("none");
  }
}

function doneTask(event) {
  if (event.target.dataset.action !== "done") return;
  const parentNode = event.target.closest(".list-group-item");
  const taskTitle = parentNode.querySelector(".task-title");
  const taskItem = parentNode.querySelector(".task-item");

  taskTitle.classList.toggle("task-title--done");
  parentNode.classList.toggle("list-group-item--done");
}
