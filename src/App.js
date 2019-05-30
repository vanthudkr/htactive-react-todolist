import React, { useState } from "react";
import Home from "./views/Home";
import Header from "./components/Header";
import Login from "./views/Login";
import ColorProvider from "./components/ColorProvider";

const App = props => {
  const [page, setPage] = useState("");

  const onChange = page => {
    setPage("home");
  };

  if (page !== "") {
    return (
      <ColorProvider>
        <div className="container">
          <Header />
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
            onLogin={onChange}
            onChangeColor={props.changeColor}
          />
        </div>
        <Login onLogin={onChange} color={props.color} />
      </ColorProvider>
    );
  }
};
export default App;
