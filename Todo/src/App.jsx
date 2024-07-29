// src/App.jsx
import React, { useState } from "react";
import Todo from "./Component/Todo";
import TodoForm from "./Component/TodoForm";
function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
    setEditTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-900  justify-center items-center flex flex-col">
      <div className="flex flex-col max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Todo App
        </h1>
        <TodoForm
          addTodo={addTodo}
          updateTodo={updateTodo}
          editTodo={editTodo}
        />
        <div className="bg-slate-800 rounded-l">
          <ul className="list-disc pl-5">
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                setEditTodo={setEditTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
