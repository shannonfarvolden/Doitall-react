import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import jwtDecode from 'jwt-decode';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);

  }

  componentDidMount () {
    this.signIn();
  }

  signIn() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const payload = jwtDecode(jwt);
      this.setState({user: payload.username});
    }
  }

  signOut() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      localStorage.removeItem('jwt');
      this.setState({user: null});
    }
  }

  render() {
    const {user} = this.state;
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <BrowserRouter>
            <div>
              <Header user={user} onSignOut={this.signOut}/>
              <div className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login"
                  render={ props => <Login {...props} onSignIn={this.signIn} />
                } />
                <Route exact path="/users" component={UserIndex} />
              </Switch>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    );
  }
}


export default App;
