import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  state = {
    text: ""
  };

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={this.textInput}
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
