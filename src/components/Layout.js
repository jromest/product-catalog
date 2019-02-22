import React from 'react';
import { Link } from '@reach/router';
import { Container, Nav, Navbar, NavItem } from 'reactstrap';

const Layout = ({ children, location }) => (
  <React.Fragment>
    <Navbar tag="header" color="dark" dark expand="xs">
      <Container tag="nav">
        <Nav className="ml-auto" navbar>
          <NavItem active={location.pathname === '/'}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem active={location.pathname === '/manage'}>
            <Link className="nav-link" to="/manage">
              Manage
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
    {children}
  </React.Fragment>
);

export default Layout;
