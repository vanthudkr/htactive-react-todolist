import React, { Component } from "react";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import TodoItem from "../components/todo/TodoItem";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <div class="content-container">
          <div class="content">
            <TodoForm />
            <TodoList />
            <TodoItem />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
