import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <Button outline color="primary" tag={Link} to="/groups/create">
      Create a Group
    </Button>{' '}
  </div>
);

export default Landing;
