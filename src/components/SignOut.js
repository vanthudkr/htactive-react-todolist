import React from "react";

const SignOut = props => {
  console.log("s", props.page);

  return (
    <li>
      <button className="btn" onClick={() => props.onSignout("")}>
        <a>Sign out</a>
      </button>
    </li>
  );
};

export default SignOut;
