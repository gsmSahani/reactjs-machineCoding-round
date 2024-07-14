import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <>
      <ol className="list-decimal list-inside pl-5">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
           
          />
        ))}
      </ol>
    </>
  );
};

export default TodoList;
