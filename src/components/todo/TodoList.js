import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import axios from "axios";

const api = "http://5ce4ac09c1ee360014725c9c.mockapi.io/todoList";

class TodoList extends Component {
  state = {
    todos: [],
    todoToshow: "all"
  };

  addTodo = todo => {
    axios
      .post(api, {
        text: todo
      })
      .then(res => {
        this.setState({
          todos: [res.data, ...this.state.todos]
        });
      });
  };

  async componentDidMount() {
    const res = await axios.get(api);
    const todos = res.data;
    todos.sort((a, b) => (+b.id > +a.id ? 1 : -1));
    this.setState({
      todos
    });
  }

  updateTodo = (text, id) => {
    const todo = {
      text: text,
      isEdit: false
    };

    axios.put(`${api}/${id}`, todo).then(res => {
      console.log(res);
      console.log(res.data);
    });
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

  toggleComplete = (id, complete) => {
    axios
      .put(`${api}/${id}`, {
        complete: !complete
      })
      .then(res => {
        const data = res.data;

        this.setState({
          todos: this.state.todos.map(todo => {
            if (todo.id === data.id) {
              return data;
            }
            return todo;
          })
        });
      });
  };

  closeTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
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

  handleDeleteTodo = async todo => {
    await axios.delete(`${api}/${todo.id}`).then(res => {
      console.log(res);
      console.log(res.data);
      const data = res.data;
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== data.id)
      });
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
    let all = "active";
    let active = "active";
    let complete = "active";
    let numAll = this.state.todos.filter(todo => todo).length;
    let numActive = this.state.todos.filter(todo => !todo.complete).length;
    let numComplete = this.state.todos.filter(todo => todo.complete).length;

    let todos = [];

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
                <a className={all} href="#home">
                  View All
                </a>
              </li>
              <li onClick={() => this.updateTodoToshow("active")}>
                <a className={active} href="#home">
                  Active
                </a>
              </li>
              <li onClick={() => this.updateTodoToshow("complete")}>
                <a className={complete} href="#home">
                  Completed
                </a>
              </li>
            </ul>

            {todos.map(todo => (
              <Todo
                key={todo.id}
                toggleComplete={() =>
                  this.toggleComplete(todo.id, todo.complete)
                }
                onDelete={() => this.handleDeleteTodo(todo)}
                editTodo={this.editTodo}
                todo={todo}
                updateTodo={this.updateTodo}
                closeTodo={this.closeTodo}
              />
            ))}
            <div className="divide">
              <span>All: {numAll}</span>
              <span>
                Active:
                {numActive
                  ? Math.round((numActive * 100) / numAll) + "%"
                  : "0%"}
              </span>
              <span>
                Completed:
                {numComplete
                  ? Math.round((numComplete * 100) / numAll) + "%"
                  : "0%"}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;
