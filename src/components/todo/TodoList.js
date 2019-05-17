import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
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
      <div className="content-container">
        <div className="content">
          <TodoForm onSubmit={this.addTodo} />
          {this.state.todos.map(todo => (
            <div key={todo.id}>{todo.text}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
