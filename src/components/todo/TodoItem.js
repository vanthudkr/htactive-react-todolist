import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div className="task-list">
        <div className="task-item" tabindex="0">
          <div className="cell">
            <button className="btn btn--icon task-item__button" type="button">
              <i className="fas fa-check" />
            </button>
          </div>
          <div className={"cell" + " task-name"}>
            <div className="task-item__title" tabindex="0">
              kokoko
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
        <div className="task-item task-item--completed" tabindex="0">
          <div className="cell">
            <button
              className="btn btn--icon task-item__button-completed"
              type="button"
            >
              <i className="fas fa-check" />
            </button>
          </div>
          <div className={"cell" + " task-name"}>
            <div className="task-item__title" tabindex="0">
              kmokm
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
  }
}

export default TodoItem;
