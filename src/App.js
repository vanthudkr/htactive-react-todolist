import React from "react";
import Home from "./views/Home";
import Header from "./components/Header";
import Login from "./views/Login";

class App extends React.Component {
  state = {
    page: ""
  };
  onChange = page =>
    this.setState({
      page
    });
  render() {
    if (this.state.page !== "") {
      return (
        <>
          <div className="container">
            <Header />
          </div>
          <Home />
        </>
      );
    } else {
      return (
        <>
          <div className="container">
            <Header />
          </div>
          <Login onLogin={this.onChange} />
        </>
      );
    }
  }
}
export default App;
