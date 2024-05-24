import { useState, useEffect } from "react";
import {
  fetchTodos,
  deleteTodo as apiDeleteTodo,
  addTodo as apiAddTodo,
  updateTodo as apiUpdateTodo,
} from "../api/api";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos()
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const markComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setLoading(true);
    setError(null);
    apiDeleteTodo(id)
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const addTodo = (title) => {
    setLoading(true);
    setError(null);
    apiAddTodo(title)
      .then((newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const updateTodo = (id, updatedTodo) => {
    setLoading(true);
    setError(null);
    apiUpdateTodo(id, updatedTodo)
      .then((newTodo) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? newTodo : todo))
        );
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return { todos, loading, error, addTodo, markComplete, delTodo, updateTodo };
};
