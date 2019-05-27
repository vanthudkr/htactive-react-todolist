import React, { Component } from "react";

class Button extends Component {
  render() {
    console.log(this.props.color);
    console.log(this.props.text);
    if (this.props.changeColor === true) {
      return (
        <button
          className={"btn signin-button" + this.props.color}
          type="button"
          onClick={() => this.props.onLogin("home")}
        >
          {this.props.text}
        </button>
      );
    } else {
      return (
        <button
          className="btn signin-button"
          type="button"
          onClick={() => this.props.onLogin("home")}
        >
          {this.props.text}
        </button>
      );
    }
  }
}
export default Button;
