import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    console.log(this.props.todo.isEdit);
    if (this.props.todo.isEdit === true) {
      return (
        <div class="task-list">
          <div class="task-item task-item--completed item-input" tabindex="0">
            <form action="">
              <input
                class="task-form__input__edit"
                type="text"
                placeholder="What need to be done?"
              />
            </form>
            <div class="cell">
              <button class="btn btn--icon task-item__button" type="button">
                <i class="fas fa-times" />
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="task-list">
            <div
              className={
                "task-item " +
                (this.props.todo.complete ? "task-item--completed" : "")
              }
              onClick={this.props.toggleComplete}
              tabIndex="0"
            >
              <div className="cell">
                <button
                  className={
                    "btn btn--icon " +
                    (this.props.todo.complete
                      ? "task-item__button-completed"
                      : "task-item__button")
                  }
                  type="button"
                >
                  <i className="fas fa-check" />
                </button>
              </div>
              <div className={"cell" + " task-name"}>
                <div
                  className="task-item__title"
                  style={{ paddingLeft: 20 }}
                  tabIndex="0"
                >
                  {this.props.todo.text}
                </div>
              </div>
            </div>
            <div className="task-item">
              <div className="cell padding-cell">
                <button
                  className="btn btn--icon task-item__button"
                  type="button"
                  // onClick={this.props.editTodo(this.todo.id)}
                >
                  <i className="fas fa-pencil-alt" />
                </button>
                <button
                  className="btn btn--icon task-item__button"
                  type="button"
                  onClick={this.props.onDelete}
                >
                  <i className="fas fa-trash" />
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
