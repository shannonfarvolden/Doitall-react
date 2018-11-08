import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.isOpen
    });
  }

  render() {
    const { user, onSignOut = () => {} } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Doitall</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {user ? (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Hello,
                    {user}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={Link} to="/">
                      Groups
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={Link} to="/" onClick={onSignOut}>
                      Sign Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <NavItem>
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
