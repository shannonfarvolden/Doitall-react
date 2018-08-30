import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import './App.css';

const apolloClient = new ApolloClient({});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
