import React from "react";
import Home from "./views/Home";
import Header from "./components/Header";
import Login from "./views/Login";
import ColorContext from "./components/ColorContext";

export const { Provider, Consumer } = ColorContext;
class App extends React.Component {
  state = {
    page: "",
    colors: [50, 100, 150]
  };

  formatColor(ary) {
    return "rgb(" + ary.join(", ") + ")";
  }

  chooseColor() {
    for (var i = 0, random = []; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }

  changeColor() {
    this.setState({
      colors: this.chooseColor()
    });
  }

  onChange = page =>
    this.setState({
      page
    });

  render() {
    console.log(this.state.colors);
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
          <ColorContext.Provider value={this.state}>
            <div className="container">
              <Header onChangeColor={this.changeColor} />
            </div>
            <Login onLogin={this.onChange} />
          </ColorContext.Provider>
        </>
      );
    }
  }
}
export default App;
