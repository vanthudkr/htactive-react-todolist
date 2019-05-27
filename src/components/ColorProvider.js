import React, { Component } from "react";
import ColorContext from "../contexts/ColorContext";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "yellow", "blue", "green", "purple", "pink"],
      color: ""
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor = () => {
    const { colors } = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      color: color
    });
  };

  render() {
    return (
      <ColorContext.Provider
        value={{
          color: this.state.color,
          changeColor: this.changeColor
        }}
      >
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}
