import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Button, Card, CardTitle, Form, FormGroup, Input, Label } from 'reactstrap';

const REGISTER = gql`
  mutation CreateUser($email: String!, $username: String!, $password: String!) {
    createUser(email: $email, username:$username, password: $password)
  }
`;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.storeJWT = this.storeJWT.bind(this);
  }

  storeJWT(jwt) {
    const { onSignIn = () => {}, history } = this.props;
    localStorage.setItem('jwt', jwt.createUser);
    history.push('/users');
    onSignIn();
  }

  handleChange(name) {
    return e => {
      this.setState({
        [name]: e.currentTarget.value
      });
    };
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <Mutation mutation={REGISTER} onCompleted={data => this.storeJWT(data)}>
        {(createUser, { loading, error }) => (
          <Card body>
            {loading && <p> Loading... </p>}
            {error && <p>Error :( Please try again</p>}

            <CardTitle>Register</CardTitle>
            <Form
              onSubmit={e => {
                e.preventDefault();
                if(password == passwordConfirmation) {
                  createUser({ variables: { username, email, password } });
                } else {
                  console.log("fails", error)
                }
              }}
            >
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                id="email"
                value={email}
                name="email"
                onChange={this.handleChange('email')}
              />
            </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  value={username}
                  name="username"
                  onChange={this.handleChange('username')}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  name="password"
                  onChange={this.handleChange('password')}
                />
              </FormGroup>
              <FormGroup>
                <Label for="passwordConfirmation">Password Confirmation</Label>
                <Input
                  type="password"
                  id="passwordConfirmation"
                  value={passwordConfirmation}
                  name="passwordConfirmation"
                  onChange={this.handleChange('passwordConfirmation')}
                />
              </FormGroup>
              <Button color="primary">Register</Button>
            </Form>
          </Card>
        )}
      </Mutation>
    );
  }
}
export default Register;
