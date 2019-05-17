import React, { Component } from "react";
import Content from "../components/Content";
import "./Login.css";

class Login extends Component {
  render() {
    return <Content onLogin={this.props.onLogin} />;
  }
}

export default Login;
