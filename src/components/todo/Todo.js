import React from "react";

export default (props) => (
  <div className="task-list">
    <div className={"task-item " + (props.todo.complete ? "task-item--completed" : "")} onClick={props.toggleComplete} tabindex="0">
      <div className="cell">
        <button className={"btn btn--icon " + (props.todo.complete ? "task-item__button-completed" : "task-item__button")} type="button">
          <i className="fas fa-check" />
        </button>
      </div>
      <div className={"cell" + " task-name"}>
        <div className="task-item__title" tabindex="0">
          {props.todo.text}
        </div>
      </div>
      <div className="cell">
        <button class="btn btn--icon task-item__button" type="button">
          <i class="fas fa-pencil-alt" />
        </button>
        <button class="btn btn--icon task-item__button" type="button">
          <i class="fas fa-trash" />
        </button>
      </div>
    </div>
  </div>
);