import { useState } from "react";

export default function ToDo() {
  const [error, setError] = useState("");

  const [todos, setTodos] = useState([
    "illo expedita consequatur quia in",
    "Cras justo odio",
    "quo adipisci enim quam ut ab",
    "vero rerum temporibus dolor",
  ]);
  const [todo, setTodo] = useState([]);

  const inputOnchange = (evt) => {
    setTodo(evt.target.value);
  };

  const ClickToAddTodo = (e) => {
    if (todo.length == 0) {
      setError("Cannot be empty");
      return;
    }
    setTodos([...todos, todo]);
    setTodo("");
  };

  const ClickToRemoveTodo = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  return (
    <div className="row justify-content-md-center todo-wrap">
      <div className="col-4">
        <div className="todo-form mb-5">
          <div className="mb-3">
            <label className="form-label">Add Todo</label>
            <input
              type="text"
              placeholder="Add Todo"
              value={todo}
              required
              id="todo"
              className="form-control"
              onChange={inputOnchange}
            />
            {error && <div className="error">{error}</div>}
          </div>
          <button onClick={ClickToAddTodo} className="btn btn-primary">
            Submit
          </button>
        </div>
        <h3>My Todos List</h3>
        <ol className="list-group list-group-numbered">
          {todos.langth && <div>test</div>}
          {todos.map((todo, index) => {
            {
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">{todo}</div>
                  <span
                    onClick={() => ClickToRemoveTodo(todo)}
                    className="badge bg-primary rounded-pill"
                  >
                    X
                  </span>
                </li>
              );
            }
          })}
        </ol>
      </div>
    </div>
  );
}
