import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">SOAP</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
             <NavItem>
                <NavLink href="/concept">Concept</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                |
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/podcast">Podcast</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                |
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portfolio">Services</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}