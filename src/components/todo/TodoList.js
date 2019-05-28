import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import ClipLoader from "react-spinners/ClipLoader";
import ErrorBoundary from "../ErrorBoundary";

const TodoList = props => {
  let all = "active";
  let active = "active";
  let complete = "active";
  let numAll = props.todos.filter(todo => todo).length;
  let numActive = props.todos.filter(todo => !todo.complete).length;
  let numComplete = props.todos.filter(todo => todo.complete).length;

  let todos = [];

  if (props.todoToShow === "all") {
    todos = props.todos;
    active = "";
    complete = "";
  } else if (props.todoToShow === "active") {
    todos = props.todos.filter(todo => !todo.complete);
    all = "";
    complete = "";
  } else if (props.todoToShow === "complete") {
    todos = props.todos.filter(todo => todo.complete);
    active = "";
    all = "";
  }
  return (
    <div className="content-container">
      <div className="content">
        {props.loading && <ClipLoader />}
        <TodoForm onSubmit={props.addTodo} />

        <ul className="task-filters">
          <li onClick={() => props.updateTodoToShow("all")}>
            <a className={all} href="#home">
              View All
            </a>
          </li>
          <li onClick={() => props.updateTodoToShow("active")}>
            <a className={active} href="#home">
              Active
            </a>
          </li>
          <li onClick={() => props.updateTodoToShow("complete")}>
            <a className={complete} href="#home">
              Completed
            </a>
          </li>
        </ul>

        {todos.map(todo => (
          <ErrorBoundary key={todo.id}>
            <Todo
              toggleComplete={() =>
                props.toggleComplete(todo.id, todo.complete)
              }
              onDelete={() => props.handleDeleteTodo(todo.id)}
              editTodo={() => props.editTodo(todo.id)}
              todo={todo}
              updateTodo={props.updateTodo}
              closeTodo={() => props.closeTodo(todo.id)}
            />
          </ErrorBoundary>
        ))}
        <div className="divide">
          <span>All: {numAll}</span>
          <span>
            Active:
            {numActive ? Math.round((numActive * 100) / numAll) + "%" : "0%"}
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
  );
};

export default TodoList;
