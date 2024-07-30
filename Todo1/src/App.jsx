import React, { useState } from "react";
import TodoForm from "./Component/TodoForm";
import TodoItem from "./Component/TodoItem"; 

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (todoItemList) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todoItemList,
        completed: false,
      },
    ]);
  };

  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todoItemList: updatedText } : todo
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
    <div className="min-h-screen bg-pink-600 flex justify-center items-center flex-col">
      <TodoForm addTodo={addTodo} updateTodo={updateTodo} editTodo={editTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            setEditTodo={setEditTodo} 
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
