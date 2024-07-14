import React from "react";
import { MdDelete } from "react-icons/md";
import { FaUndo } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const TodoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
  return (
    <>
      <li className="flex items-center justify-between p-2 border-b border-gray-300 ">
        <span
          className={`flex-grow  ${
            todo.completed ? "text-green-800 font-bold italic" : ""
          }`}
        >
          {todo.text}
        </span>
        <button
          onClick={() => toggleComplete(index)}
          className={`ml-2 p-1 rounded ${
            todo.completed ? "text-white" : "bg-gray-800"
          } bg-black text-white text-3xl`}
        >
          {todo.completed ? <FaUndo /> : <IoCheckmarkDoneCircle />}
        </button>
        <button
          onClick={() => deleteTodo(index)}
          className="ml-2  p-1 rounded bg-red-600 text-white text-3xl"
        >
          <MdDelete />
        </button>
      </li>
    </>
  );
};

export default TodoItem;
