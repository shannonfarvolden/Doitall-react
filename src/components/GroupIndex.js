import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Group from './GroupCard';

const GET_GROUPS = gql`
  {
    Groups {
      id
      title
      description
    }
  }
`;

class GroupIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={GET_GROUPS}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <div>error...</div>;
          return (
            <main className="GroupIndex">
              <h2>Browse Groups</h2>
              <hr />
              <ul>
                {data.Groups.map(group => (
                  <Group title={group.title} description={group.description} />
                ))}
              </ul>
            </main>
          );
        }}
      </Query>
    );
  }
}
export default GroupIndex;
