import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Landing from "./components/Landing";

const apolloClient = new ApolloClient({});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <BrowserRouter>
            <div>
              <Header />
              <div className="container">
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
              </div>
            </div>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
