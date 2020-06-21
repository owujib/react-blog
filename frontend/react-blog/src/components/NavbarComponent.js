import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">React Blog</Link>
        </Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav>
              <Link className="nav-link" to="/blog">
                Post
              </Link>
            </Nav>
          </Nav.Item>
          <Nav.Item>
            <Nav to="/new">
              <Link className="nav-link" to="/new-post">
                Create Post
              </Link>
            </Nav>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}
