import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./redux/containers/AddTodo";
import VisibleTodoList from "./redux/containers/VisibileTodoList";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";

const App = () => (
  <div>
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
