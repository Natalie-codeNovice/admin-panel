// src/components/Layout.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function Layout({ children }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/users">Users</Nav.Link>
              <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
              <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="mt-4">
        <Row>
          <Col md={2} className="bg-light p-3">
            <h5>Sidebar</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/users">User Management</Nav.Link>
              <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
              <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
            </Nav>
          </Col>
          <Col md={10}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
