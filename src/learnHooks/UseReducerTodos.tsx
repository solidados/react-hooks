import React from "react";
import { useReducer, useState } from "react";
import TodoComponent from "../components/TodoComponent.tsx";

interface Todo {
  id: number;
  name: string;
  complete: boolean;
}

type Actions =
  | { type: "add-todo"; payload: { name: string } }
  | { type: "toggle-todo"; payload: { id: number } }
  | { type: "remove-todo"; payload: { id: number } };

const ACTIONS = {
  ADD_TODO: "add-todo" as const,
  TOGGLE_TODO: "toggle-todo" as const,
  REMOVE_TODO: "remove-todo" as const,
};

function newTodo(name: string): Todo {
  return { id: Date.now(), name, complete: false };
}

function reducer(todos: Todo[], action: Actions): Todo[] {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo,
      );
    case ACTIONS.REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

const UseReducerTodos = () => {
  const [todos, dispatch] = useReducer(reducer, [] as Todo[]);
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
      setName("");
    }
  };

  const toggleTodo = (todo: Todo) =>
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });

  const removeTodo = (todo: Todo) =>
    dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } });

  return (
    <>
      <h3 className="text-decoration-underline">Todo List: useReducer()</h3>
      <div className="d-flex flex-column p-4 ">
        <form onSubmit={handleSubmit} className="mb-3">
          <label
            htmlFor="todoEntry"
            className="d-block display-6 m-0 text-danger-emphasis"
          >
            What do you plan ToDo?
            <input
              id="todoEntry"
              type="text"
              className="form-control border-0 border-bottom rounded-0 mt-2 text-dark-emphasis"
              style={{ outline: "none", boxShadow: "none" }}
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </form>
        <div className="d-flex flex-column align-items-start">
          {todos.map((todo) => (
            <TodoComponent
              key={todo.id}
              todo={todo}
              onToggle={() => toggleTodo(todo)}
              onDelete={() => removeTodo(todo)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UseReducerTodos;
