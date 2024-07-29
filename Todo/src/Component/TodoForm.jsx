import React, { useEffect, useState } from "react";

const TodoForm = ({ addTodo, updateTodo, editTodo }) => {
  const [text, setText] = useState("");

  // Set the text when editTodo is changed (i.e., when editing)
  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
    } else {
      setText(""); // Clear text if no editTodo is provided
    }
  }, [editTodo]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      if (editTodo) {
        // Update existing TODO
        updateTodo(editTodo.id, text);
      } else {
        // Add new TODO
        addTodo(text);
      }
      setText(""); // Clear text field after submit
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded-l px-2 py-1 flex-1"
        placeholder="Add Todo"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded-r"
      >
        {editTodo ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
