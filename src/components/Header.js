import React from "react";
import Logo from "./Logo";
import ButtonColor from "./ButtonColor";
import SignOut from "./SignOut";

export default props => {
  console.log("page", props.page);
  const pages = props.page;

  if (pages === "") {
    return (
      <div className="item item1">
        <h1 className="header__title">Todo React</h1>
        <ul className="header__actions">
          <Logo />
          <ButtonColor />
        </ul>
      </div>
    );
  } else {
    return (
      <div className="item item1">
        <h1 className="header__title">Todo React</h1>
        <ul className="header__actions">
          <Logo />
          <SignOut page={props.page} onSignout={props.onSignout} />
        </ul>
      </div>
    );
  }
};
