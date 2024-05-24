import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async () => {
  return axios.get(`${API_URL}?_limit=10`).then((res) => res.data);
};

export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const addTodo = async (title) => {
  return axios
    .post(API_URL, {
      title,
      completed: false,
    })
    .then((res) => res.data);
};

export const updateTodo = async (id, updatedTodo) => {
  return axios.put(`${API_URL}/${id}`, updatedTodo).then((res) => res.data);
};
