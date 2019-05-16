import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div class="task-list">
        <div class="task-item" tabindex="0">
          <div class="cell">
            <button class="btn btn--icon task-item__button" type="button">
              <i class="fas fa-check" />
            </button>
          </div>
          <div class={"cell" + " task-name"}>
            <div class="task-item__title" tabindex="0">
              kokoko
            </div>
          </div>
          <div class="cell">
            <button class="btn btn--icon task-item__button" type="button">
              <i class="fas fa-pencil-alt" />
            </button>
            <button class="btn btn--icon task-item__button" type="button">
              <i class="fas fa-trash" />
            </button>
          </div>
        </div>
        <div class="task-item task-item--completed" tabindex="0">
          <div class="cell">
            <button
              class="btn btn--icon task-item__button-completed"
              type="button"
            >
              <i class="fas fa-check" />
            </button>
          </div>
          <div class={"cell" + " task-name"}>
            <div class="task-item__title" tabindex="0">
              kmokm
            </div>
          </div>
          <div class="cell">
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
