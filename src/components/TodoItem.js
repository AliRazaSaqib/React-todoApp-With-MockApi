import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, markComplete, delTodo, updateTodo }) => {
  const { id, title, completed } = todo;

  const handleUpdate = () => {
    const updatedTitle = prompt("Enter new title", title);
    if (updatedTitle) {
      updateTodo(id, { ...todo, title: updatedTitle });
    }
  };

  return (
    <div style={getStyle(completed)}>
      <p>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => markComplete(id)}
        />{" "}
        {title}
        <button onClick={() => delTodo(id)} style={btnStyle}>
          Delete
        </button>
        <button onClick={handleUpdate} style={btnStyle}>
          Update
        </button>
      </p>
    </div>
  );
};

// Styles
const getStyle = (completed) => {
  return {
    background: "black",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: completed ? "line-through" : "none",
  };
};

const btnStyle = {
  background: "#ff3d00",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "8px",
  cursor: "pointer",
  float: "right",
  marginLeft: "12px",
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
