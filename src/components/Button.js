import React, { Component } from "react";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {({ color }) => (
          <button
            style={{ backgroundColor: `${color}` }}
            className="btn signin-button"
            type="button"
            onClick={() => this.props.onLogin("home")}
          >
            {this.props.text}
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
