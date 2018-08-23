import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MuiThemeProvider>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
