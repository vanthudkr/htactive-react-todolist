import React, { Component } from "react";
import generate from "@babel/generator";
import shortid from "shortid";

class TodoForm extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: "     "
    });
  };

  render() {
    return (
      <from onSubmit={this.handleSubmit}>
        <input
          className="task-form__input"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="What need to be done?"
        />
        <button onclick={this.handleChange}>Add Todo</button>
      </from>
    );
  }
}

export default TodoForm;
