import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./redux/containers/AddTodo";
import VisibleTodoList from "./redux/containers/VisibileTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
