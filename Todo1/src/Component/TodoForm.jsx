import React, { useEffect, useState } from "react";

const TodoForm = ({ addTodo, updateTodo, editTodo }) => {
  const [todoItemList, setTodoItemList] = useState("");

  useEffect(() => {
    if (editTodo) {
      setTodoItemList(editTodo.todoItemList);
    } else {
      setTodoItemList("");
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = todoItemList.trim();
    if (trimmedValue) {
      if (editTodo) {
        updateTodo(editTodo.id, trimmedValue);
      } else {
        addTodo(trimmedValue);
      }
      setTodoItemList(""); // Clear the input field after submission
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={todoItemList}
          placeholder="Add Todo..."
          onChange={(e) => setTodoItemList(e.target.value)}
          aria-label="Todo item"
          className="p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          aria-label={editTodo ? "Update Todo" : "Add Todo"}
        >
          {editTodo ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
