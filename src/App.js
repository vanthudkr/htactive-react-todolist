import React from "react";
import Home from "./views/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Home />
    </>
  );
}

export default App;
