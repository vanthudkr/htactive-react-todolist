import React, { Component } from "react";
import Button from "./Button";

class Content extends Component {
  state = {
    socials: ["google", "fb", "sfsdf"]
  };

  render() {
    return (
      <div className="flexcontainer">
        <div className="signin">
          <h1 className="sign-in__heading">Sign in</h1>
          {this.state.map(s => (
            <Button text={s} />
          ))}
        </div>
      </div>
    );
  }
}

export default Content;
