import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import stringify from "querystring";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };
  render() {
    return (
      <>
        <div className="content-container">
          <div className="content">
            <TodoForm onSubmit={this.addTodo} />
            {JSON.stringify(this.state.todos)}
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;
