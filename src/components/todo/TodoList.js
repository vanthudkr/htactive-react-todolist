import React, { Component } from "react";
import TodoForm from "./TodoForm";
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

  updateTodo = (text, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //supose to update
          return {
            ...todo,
            text: text,
            isEdit: false,
            complete: false
          };
        } else {
          return todo;
        }
      })
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

  closeTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //supose to update
          return {
            ...todo,
            isEdit: false
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
    let all = "active";
    let active = "active";
    let complete = "active";
    let numAll = this.state.todos.filter(todo => todo).length;
    let numActive = this.state.todos.filter(todo => !todo.complete).length;
    let numComplete = this.state.todos.filter(todo => todo.complete).length;

    if (this.state.todoToshow === "all") {
      todos = this.state.todos;
      active = "";
      complete = "";
    } else if (this.state.todoToshow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
      all = "";
      complete = "";
    } else if (this.state.todoToshow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
      active = "";
      all = "";
    }

    return (
      <>
        <div className="content-container">
          <div className="content">
            <TodoForm onSubmit={this.addTodo} />

            <ul className="task-filters">
              <li onClick={() => this.updateTodoToshow("all")}>
                <a className={all} href="#">
                  View All
                </a>
              </li>
              <li onClick={() => this.updateTodoToshow("active")}>
                <a className={active} href="#">
                  Active
                </a>
              </li>
              <li onClick={() => this.updateTodoToshow("complete")}>
                <a className={complete} href="#">
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
                updateTodo={this.updateTodo}
                closeTodo={this.closeTodo}
              />
            ))}
            <div className="divide">
              <span>
                All:{" "}
                {numAll ? Math.round((numAll * 100) / numAll) + "%" : "Null"}
              </span>
              <span>
                Active:{" "}
                {numActive
                  ? Math.round((numActive * 100) / numAll) + "%"
                  : "Null"}
              </span>
              <span>
                Completed:{" "}
                {numComplete
                  ? Math.round((numComplete * 100) / numAll) + "%"
                  : "Null"}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;
