// Находим элементы на странице
const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const tasksList = document.querySelector("#tasksList");
const emptyList = document.querySelector("#emptyList");

let tasks = [];

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((task) => renderTask(task));
}

checkEmptyList();

// Добавление задачи Уадление задачи Завершенные задачи
form.addEventListener("submit", addTask);
tasksList.addEventListener("click", deleteTask);
tasksList.addEventListener("click", doneTask);

// Функции
function addTask(event) {
  // Отменяем отправку формы
  event.preventDefault();

  // Достаем текст задачи из поля ввода
  const taskText = taskInput.value;

  // Описываем задачу в виде объекта
  const newTask = {
    id: Date.now(),
    text: taskText,
    done: false,
  };

  // Добавляем задачу в массив с задачами
  tasks.push(newTask);

  // Сохраняем список задач в хранилище браузера localStorage
  saveToLocalStorage();

  // Рендерим задачу на страницу
  renderTask(newTask);

  // Очищаем поле ввода и возвращаем на него фокус
  taskInput.value = "";
  taskInput.focus();

  checkEmptyList();
}

function deleteTask(event) {
  // Проверяем если клик был НЕ по кнопке "удалить задачу"
  if (event.target.dataset.action !== "delete") return;

  const parentNode = event.target.closest(".list-group-item");

  // Определяем ID задачи
  const id = Number(parentNode.id);

  // Удаляем задачу через фильтрацию массива
  tasks = tasks.filter((task) => task.id !== id);

  // Сохраняем список задач в хранилище браузера localStorage
  saveToLocalStorage();

  // Удаляем задачу из разметки
  parentNode.remove();

  checkEmptyList();
}

function doneTask(event) {
  if (event.target.dataset.action !== "done") return;
  const parentNode = event.target.closest(".list-group-item");

  // Определяем ID задачи
  const id = Number(parentNode.id);

  const task = tasks.find(function (task) {
    if (task.id === id) {
      return true;
    }
  });

  task.done = !task.done;
  // Сохраняем список задач в хранилище браузера localStorage
  saveToLocalStorage();

  const taskTitle = parentNode.querySelector(".task-title");

  taskTitle.classList.toggle("task-title--done");
}

function checkEmptyList() {
  if (tasks.length === 0) {
    const emptyListHTML = `
        <li
            id="emptyList"
            class="list-group-item empty-list bg-white rounded"
          >
            <Image
              src="leaf.svg"
              alt="Empty"
              width="48"
              height="48"
              class="mt-3"
            />
            <div class="empty-list__title ">Список дел пуст</div>
        </li> `;

    tasksList.insertAdjacentHTML("afterbegin", emptyListHTML);
  }

  if (tasks.length > 0) {
    const emptyListEl = document.querySelector("#emptyList");
    emptyListEl ? emptyListEl.remove() : null;
  }
}

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(task) {
  // Формируем CSS класс
  const cssCalss = task.done ? "task-title task-title--done" : "task-title";

  // Формируем разметку для новой задачи
  const taskHTML = `          
        <li id="${task.id}" class="list-group-item">
            <span class="${cssCalss}">${task.text}</span>
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
}
