import React, { useState } from "react";
import Home from "./views/Home";
import Header from "./components/Header";
import Login from "./views/Login";
import ColorProvider from "./components/ColorProvider";

const App = props => {
  const [page, setPage] = useState("");

  const onLogin = () => {
    setPage("home");
  };

  const onSignout = () => {
    setPage("");
  };

  if (page !== "") {
    return (
      <ColorProvider>
        <div className="container">
          <Header page={page} onSignout={onSignout} />
        </div>
        <Home />
      </ColorProvider>
    );
  } else {
    return (
      <ColorProvider>
        <div className="container">
          <Header
            page={page}
            onLogin={onLogin}
            onChangeColor={props.changeColor}
          />
        </div>
        <Login onLogin={onLogin} color={props.color} />
      </ColorProvider>
    );
  }
};
export default App;
