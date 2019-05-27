import React, { Component } from "react";
import Button from "./Button";

class Content extends Component {
  state = {
    socials: ["google", "github", "twitter"]
  };

  render() {
    return (
      <div className="flexcontainer">
        <div className="signin">
          <h1 className="sign-in__heading">Sign in</h1>
          {this.state.socials.map((s, key) => (
            <Button key={key} text={s} onLogin={this.props.onLogin} />
          ))}
          <button
            className="btn signin-button margin-top-button"
            type="buttuon"
          >
            Change color
          </button>
        </div>
      </div>
    );
  }
}

export default Content;
