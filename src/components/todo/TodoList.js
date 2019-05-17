import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //supose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <>
        <div className="content-container">
          <div className="content">
            <TodoForm onSubmit={this.addTodo} />
            {this.state.todos.map(todo => (
              <Todo
                key={todo.id}
                toggleComplete={() => this.toggleComplete(todo.id)}
                todo={todo}
              />
            ))}
            <div>
              left: {this.state.todos.filter(todo => !todo.complete).length}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;
