import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

export default class GroupCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description } = this.props;
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
            <Button>View Details</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
