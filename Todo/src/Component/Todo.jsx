// src/components/Todo.jsx
import React, { useState } from "react";

const Todo = ({ todo, onDelete, onComplete }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleUpdate = () => {
    // Implement update logic here
    alert(`Update todo with ID ${todo.id} to ${updatedTitle}`);
    setEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      {!editing ? (
        <div className="flex items-center space-x-2">
          <span className={todo.completed ? "line-through" : ""}>
            {todo.title}
          </span>
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="rounded px-2 py-1 border"
          />
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded"
            onClick={handleUpdate}
          >
            Save
          </button>
        </div>
      )}
      <div className="flex items-center space-x-2">
        <button
          className="text-green-500 hover:text-green-700"
          onClick={() => onComplete(todo.id)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
