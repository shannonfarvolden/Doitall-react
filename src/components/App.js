import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import './App.css';
import Header from './Header';
import Login from './Login';
import Landing from './Landing';
import UserIndexPage from './pages/UserIndexPage';

const link = new HttpLink({ uri: '/graphql' });

const client = new ApolloClient({
  link,
  // other options like cache
});

console.log("clinet", client);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <BrowserRouter>
            <div>
              <Header />
              <div className="container">
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/users" component={UserIndexPage} />
              </div>
            </div>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
