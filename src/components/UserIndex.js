import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class UserIndex extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: []
    };
  }

  renderUsers() {
    return this.props.data.Users.map(user => {
      return (
        <li key={user.id}>{user.username}</li>
      );
    })
  }

  render () {
    console.log("props", this.props.data)
    if(this.props.data.loading) {
      return (<div>loading...</div>)
    }



    return (
      <main className="UserIndex">
        <h2>Users</h2>
        <ul>
          {this.renderUsers()}
        </ul>
      </main>
    );
  }
}

const query = gql`
  {
    Users {
      id
      username
      email
    }
  }
`

export default graphql(query)(UserIndex);
