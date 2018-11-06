import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USERS = gql`
  {
    Users {
      id
      username
      email
    }
  }
`;

class UserIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  renderUsers() {
    return this.props.data.Users.map(user => {
      return <li key={user.id}>{user.username}</li>;
    });
  }

  render() {
    return (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <div>error...</div>;
          return (
            <main className="UserIndex">
              <h2>Users</h2>
              <ul>
                {data.Users.map(user => (
                  <li key={user.id}>{user.username}</li>
                ))}
              </ul>
            </main>
          );
        }}
      </Query>
    );
  }
}
export default UserIndex;
