import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Landing from './components/Landing';
import UserIndex from './components/UserIndex';

const link = new HttpLink({ uri: '/graphql' });

const client = new ApolloClient({
  link
  // other options like cache
});

console.log('clinet', client);

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/users" component={UserIndex} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  </ApolloProvider>
);

export default App;
