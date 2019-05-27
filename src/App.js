import React from "react";
import Home from "./views/Home";
import Header from "./components/Header";
import Login from "./views/Login";
import ColorProvider from "./components/ColorProvider";

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
          <ColorProvider>
            <div className="container">
              <Header onChangeColor={this.changeColor} />
            </div>
            <Login onLogin={this.onChange} color={this.state.color} />
          </ColorProvider>
        </>
      );
    }
  }
}
export default App;
