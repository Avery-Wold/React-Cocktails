import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.scss';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = () => {
    this.setState(state => ({
      collapsed: !this.state.collapsed
    }));
  }

  render() {
    return (
      <div className="navbar navbar-expand-md bg-dark navbar-dark">
        <Navbar >
          <NavbarBrand href="/" className="title">Making Cocktails With Avery</NavbarBrand>
          <div className="pull-right">
          <NavbarToggler onClick={this.toggleNavbar} className="navbar-collapse"/>
          <Collapse isOpen={!this.state.collapsed} >
            <Nav navbar>
              <NavItem>
                <NavLink href="https://github.com/Avery-Wold/React-Masters-Spring-2019">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
