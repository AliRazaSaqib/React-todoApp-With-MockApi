import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = ({ todos, markComplete, delTodo, updateTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={markComplete}
          delTodo={delTodo}
          updateTodo={updateTodo}
        />
      ))}
    </>
  );
};

// PropTypes
Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
