import React, * as react from 'react';
import { Card, CardTitle, Form, FormGroup, Input, Label, Button } from 'reactstrap';

const CategoriesList = () => {
  var categories = ['Food', 'Programming', 'Books', 'Excercise'];

  const categoryOptions = categories.map(category => <option>{category}</option>);
  return categoryOptions;
};

class GroupCreate extends react.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Card body>
          <CardTitle>Create a group</CardTitle>
          <hr />
          <Form onSubmit={this.saveGroup}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" id="title" name="title" />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="text" id="description" name="description" />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input type="select" id="category" name="category">
                <CategoriesList />
              </Input>
            </FormGroup>
            <FormGroup check>
              <Label for="public" check>
                <Input type="checkbox" id="public" name="public" /> Public
              </Label>
            </FormGroup>
            <Button color="primary">Save</Button>
          </Form>
        </Card>
      </div>
    );
  }
}
export default GroupCreate;
