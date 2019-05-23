import React from "react";

class TodoForm extends React.Component {
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
    this.props.onSubmit(this.state.text);
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

export default TodoForm;
