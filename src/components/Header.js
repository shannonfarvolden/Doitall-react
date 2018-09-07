import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">Welcome to Doitall</h1>
    <Link to="/login">Login</Link>
    <Link to="/users">User List</Link>
  </header>
);

export default Header;
