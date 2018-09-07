import React, { Component } from 'react';

import {
  Button,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <Card body>
        <CardTitle>Login</CardTitle>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              value={this.state.username}
              id="username"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="text"
              value={this.state.password}
              id="password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="primary">Login</Button>
        </Form>
      </Card>
    );
  }
}

export default Login;
