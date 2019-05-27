import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isEdit: PropTypes.boolean,
    complete: PropTypes.boolean
  }).isRequired, // product nhan vao phai la array .isRequied la yeu cau phai co
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  editTodo: PropTypes.func,
  toggleComplete: PropTypes.func,
  updateTodo: PropTypes.func,
  addTodo: PropTypes.func
};

const defaultProps = {
  onDelete: () => {},
  editTodo: () => {},
  toggleComplete: () => {},
  updateTodo: () => {},
  addTodo: () => {},
  onClick: () => {}
};

export default class Todo extends Component {
  state = {
    text: this.props.todo.text
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text) {
      this.props.updateTodo(this.state.text, this.props.todo.id);
    }
  };

  handleClose = event => {
    event.preventDefault();
    this.setState({ text: this.props.todo.text });
    this.props.closeTodo(this.props.todo.id);
  };

  render() {
    if (this.props.todo.isEdit === true) {
      return (
        <div className="task-edit">
          <div
            className="task-item task-item--completed item-input"
            tabIndex="0"
          >
            <form className="style-form" onSubmit={this.handleSubmit}>
              <input
                name="text"
                className="task-form__input__edit"
                type="text"
                placeholder="To do"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </form>
            <div className="cell padding-left-cell-edit">
              <button
                className="btn btn--icon task-item__button"
                type="button"
                onClick={this.handleClose}
              >
                <i className="fas fa-times" />
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
              <div className="cell task-name">
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
                  onClick={this.props.editTodo}
                >
                  <i className="fas fa-pencil-alt" />
                </button>
                <button
                  className="btn btn--icon task-item__button"
                  type="button"
                  onClick={() =>
                    window.confirm("Are you sure?") && this.props.onDelete()
                  }
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

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;
