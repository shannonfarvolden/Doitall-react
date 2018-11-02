import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import {
  Button,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const LOGIN = gql`
  mutation Login ($username: String!, $password: String!) {
    login (username: $username, password: $password)
  }
`

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.storeJWT = this.storeJWT.bind(this);
  }

  storeJWT (jwt) {
    localStorage.setItem('jwt', jwt.login);
    this.props.history.push('/users');
  }

  handleChange (name) {
    return (e) => {
      this.setState({
        [name]: e.currentTarget.value
      })
    };
  }

  render () {
    const { username, password } = this.state;
    return (
      <Mutation mutation={LOGIN} onCompleted={(data) => this.storeJWT(data)}>
        { (login, { loading, error }) => (
          <Card body>
            { loading && <p> Loading... </p> }
            { error && <p>Error :( Please try again</p> } 

            <CardTitle>Login</CardTitle>
            <Form
              onSubmit={e => {
                 e.preventDefault();
                 login({ variables: { username, password} });
               }}
            >
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  value={username}
                  name="username"
                  onChange={this.handleChange("username")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="text"
                  id="password"
                  value={password}
                  name="password"
                  onChange={this.handleChange("password")}
                />
              </FormGroup>
              <Button color="primary">Login</Button>
            </Form>
          </Card>
        )}
      </Mutation>
    );
  }
}
export default Login;
