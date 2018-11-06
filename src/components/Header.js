import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const {user, onSignOut = () => {}} = props;
    return(
      <header className="App-header">
      <h1 className="App-title">Welcome to Doitall</h1>
      {
        user ? ([
          <span key='1'>Hello, {user}</span>,
          <Link key='2' to="/users">Users</Link>,
          <a key='3' href="/" onClick={onSignOut}>Sign Out</a>
        ]) : (
          <Link to="/login">Login</Link>
        )
      }
      </header>
    )
};

export default Header;
