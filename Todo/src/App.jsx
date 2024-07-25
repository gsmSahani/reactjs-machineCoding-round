// src/App.jsx
import React, { useState } from "react";
import Todo from "./Component/Todo";
import TodoForm from "./Component/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-3xl font-bold mb-8">Add Todo</header>
      <main className="bg-white p-4 rounded shadow w-full max-w-md">
        <TodoForm onAddTodo={addTodo} />
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onComplete={toggleComplete}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
