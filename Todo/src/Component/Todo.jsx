import React from "react";

const Todo = ({ todo, toggleComplete, deleteTodo, setEditTodo }) => {
  return (
    <>
      <li
        className={`flex  justify-between ${
          todo.completed ? "line-through italic font-bold text-purple-700" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            toggleComplete(todo.id);
          }}
          className="form-checkbox"
        />
        <div>
          <span className="flex text-white "> {todo.text}</span>
        </div>
        {/* button */}
        <div className="flex justify-between gap-3 mr-3">
          <button
            onClick={() => setEditTodo(todo)}
            className="text-blue-500 hover:underline "
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default Todo;
