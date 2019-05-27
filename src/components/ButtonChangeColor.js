import React, { Component } from "react";

class ButtonChangeColor extends Component {
  render() {
    console.log(this.props.colors);
    return (
      <button onClick={this.onChangeColor}>
        <i className="fas fa-palette" />
      </button>
    );
  }
}

export default ButtonChangeColor;
