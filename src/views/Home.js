import React, { Component } from "react";
import TodoList from "../components/todo/TodoList";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <TodoList />
      </>
    );
  }
}

export default Home;
