import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class UserIndexPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount () {
    // const users = await User.all();
  }

  renderUsers() {
    return this.props.data.users.map(user => {
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
      <main className="UserIndexPage">
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
    users {
      id
      username
      email
    }
  }
`

export default graphql(query)(UserIndexPage);
// export default UserIndexPage;
