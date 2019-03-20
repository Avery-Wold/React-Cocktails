import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.scss';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
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
          <NavbarToggler onClick={this.toggleNavbar} className="navbar-collapse" pullRight/>
          <Collapse isOpen={!this.state.collapsed} >
            <Nav navbar>
              {/* <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem> */}
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

// import React, { Component } from 'react';
// import '../App.scss';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// export default class Header extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           collapsed: true
//         };

//         this.toggleNavbar = this.toggleNavbar.bind(this);
//     }

//     toggleNavbar() {
//         this.setState({
//           collapsed: !this.state.collapsed
//         });
//     }

//     render() {
//         return (
//             <header className="App-header">
//                 <h1 className="title">
//                 Making Cocktails with Avery
//                 </h1>
//             </header>
//         )
//     }
// }
