import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, setEditTodo }) => {
  return (
    <>
      <div className="flex p-4 rounded-lg shadow-md">
        <li className="flex items-center bg-slate-200 rounded-lg py-1 px-4 w-full flex-shrink-0">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="w-6 h-6 mr-4"
          />
          <span
            className={`text-xl ${
              todo.completed ? "font-bold italic text-green-600" : ""
            } flex-grow`}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {todo.todoItemList}
          </span>
          <div className="flex space-x-4 ml-4">
            <button
              onClick={() => setEditTodo(todo)}
              className="bg-purple-500 text-white rounded-md px-4 py-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white rounded-md px-4 py-2"
            >
              Delete
            </button>
          </div>
        </li>
      </div>
    </>
  );
};

export default TodoItem;
