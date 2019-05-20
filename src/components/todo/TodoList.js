import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    todos: [
      { id: 1, text: "React", isEdit: false },
      { id: 2, text: "React basic", isEdit: false }
    ],
    todoToshow: "all"
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

  updateTodoToshow = s => {
    this.setState({
      todoToshow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  editTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //supose to update
          return {
            ...todo,
            isEdit: true
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToshow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToshow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToshow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <>
        <div className="content-container">
          <div className="content">
            <TodoForm onSubmit={this.addTodo} />

            <ul className="task-filters">
              <li onClick={() => this.updateTodoToshow("all")}>
                <a className="active" href="#">
                  View All
                </a>
              </li>
              <li onClick={() => this.updateTodoToshow("active")}>
                <a href="#">Active</a>
              </li>
              <li>
                <a onClick={() => this.updateTodoToshow("complete")} href="#">
                  Completed
                </a>
              </li>
            </ul>

            {todos.map(todo => (
              <Todo
                key={todo.id}
                toggleComplete={() => this.toggleComplete(todo.id)}
                onDelete={() => this.handleDeleteTodo(todo.id)}
                editTodo={this.editTodo}
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
