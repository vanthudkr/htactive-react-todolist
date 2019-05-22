import React from "react";
import shortid from "shortid";
import axios from "axios";

export default class TodoForm extends React.Component {
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
      isEdit: false,
      complete: false
    });
    this.setState({
      text: ""
    });

    const todo = {
      id: shortid.generate(),
      text: this.state.text,
      isEdit: false
    };

    axios
      .post(`http://5ce4ac09c1ee360014725c9c.mockapi.io/todoList`, todo)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="task-form__input"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}
