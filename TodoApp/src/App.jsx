import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

import TodoList from "./Component/TodoApp/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, { text: todo, completed: false }]);
      setTodo("");
    }
  };
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <>
      <div className="min-h-screen bg-slate-400 flex justify-center items-center">
        <div className="bg-slate-200 max-w-md w-full p-6 rounded-lg ">
          <h1 className="text-center mb-4 font-bold">Todo React App</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add your to do task here...."
              className="rounded-lg flex-grow p-4 border-b border-gray-700 color-red"
            />
            <button
              onClick={addTodo}
              className="bg-white border-b-4 border-gray-700 rounded-lg mx-3"
            >
              <IoMdAddCircle className="text-4xl mx-3" />
            </button>
          </div>
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
};

export default App;
