import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle("");
  };

  const onChange = (e) => setTitle(e.target.value);

  return (
    <form onSubmit={onSubmit} className="add-todo-form">
      <input
        type="text"
        name="title"
        className="add-todo-input"
        placeholder="Add Todo ..."
        value={title}
        onChange={onChange}
      />
      <button type="submit" className="add-todo-button">
        Add
      </button>
    </form>
  );
};

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
