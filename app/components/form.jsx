export default function FormCreate() {
  return (
    <>
      {/* Form */}
      <div className="card flex flex-col bg-slate-100 p-2 rounded">
        <div className="card-header text-green-700 mb-2">
          Добавить новую задачу
        </div>
        <div className="card-body">
          <form id="form">
            <div className="form-group">
              <input
                type="text"
                className="form-control w-full border-2 border-green-300 hover:border-green-400 active:border-green-500z outline-green-600 transition duration-150 ease-out hover:ease-in p-2 mb-3"
                id="taskInput"
                placeholder="Текст задачи"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary bg-green-600 hover:bg-green-700 transition duration-150 ease-out hover:ease-in p-2 rounded text-white"
            >
              Добавить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
