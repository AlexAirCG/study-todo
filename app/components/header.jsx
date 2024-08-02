export default function Header() {
  return (
    <div className="container">
      <div className="display-4 mb-2">ToDo приложение</div>
      <div className="h4 mb-5">список дел на сегодня</div>

      {/* List of tasks */}
      <div className="card mb-4">
        <ul id="tasksList" className="list-group list-group-flush">
          <li
            id="emptyList"
            className="list-group-item empty-list bg-white rounded"
          >
            <img src="leaf.svg" alt="Empty" width="48" className="mt-3" />
            <div className="empty-list__title ">Список дел пуст</div>
          </li>

          <li className="list-group-item d-flex justify-between task-item bg-white p-2 mt-2 rounded">
            <span className="task-title">Купить молоко</span>
            <div class="task-item__buttons bg-white">
              <button className="btn-action" type="button" data-action="done">
                <img src="tick.svg" alt="Done" width="18" height="18" />
              </button>
              <button
                type="button"
                data-action="delete"
                className="btn-action bg-white"
              >
                <img src="cross.svg" alt="Done" width="18" height="18" />
              </button>
            </div>
          </li>
        </ul>
      </div>

      {/* Form */}
      <div className="card bg-light">
        <div className="card-header">Добавить новую завачу</div>
        <div className="card-body">
          <form id="form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="taskInput"
                placeholder="Текст задачи"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                Что делаем, сколько времени тратим, какой результат получаем
              </small>
            </div>
            <button type="submit" className="btn btn-primary btn-lg active">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
