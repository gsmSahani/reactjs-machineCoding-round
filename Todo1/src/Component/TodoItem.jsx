import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, setEditTodo }) => {  
  return (
    <li
      className={`flex justify-center ${
        todo.completed ? "font-bold italic text-green-600" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.todoItemList}</span>
      <button onClick={() => setEditTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
