import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";
import "./styles/commonStyle.css";
import Loading from "./components/Loading";
import { useTodos } from "./hooks/useTodos";
import Error from "./components/Error";

const App = () => {
  const { todos, loading, error, addTodo, markComplete, delTodo, updateTodo } =
    useTodos();

  return (
    <div className="app">
      <AddTodo addTodo={addTodo} />
      {!loading ? (
        <Todos
          todos={todos}
          markComplete={markComplete}
          delTodo={delTodo}
          updateTodo={updateTodo}
        />
      ) : (
        <Loading />
      )}

      {error && <Error text="Something went wrong. Please try again!" />}
    </div>
  );
};

export default App;
