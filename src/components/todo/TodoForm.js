import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <input
        class="task-form__input"
        type="text"
        placeholder="What need to be done?"
      />
    );
  }
}

export default TodoForm;
