import React, { useContext } from "react";
import ColorContext from "../contexts/ColorContext";

export default props => {
  const { color } = useContext(ColorContext);
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn signin-button"
      type="button"
      onClick={() => props.onLogin("home")}
    >
      {props.text}
    </button>
  );
};
