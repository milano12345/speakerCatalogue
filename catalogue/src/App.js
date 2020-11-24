import React from "react";
import Footer from "./components/Footer";
// import AddTodo from "./redux/containers/AddTodo";
// import VisibleTodoList from "./redux/containers/VisibileTodoList";
// import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Catalogue from "./components/Catalogue";
import Cover from "./components/Coverflow";
import Description from "./components/Description";
import NavBar from "./components/NavBar";
import Payment from "./components/Payment";

const App = () => (
  <div>
    <Header />
    <NavBar />
    <Catalogue />
    <Payment />
    <Footer />
  </div>
);

export default App;
