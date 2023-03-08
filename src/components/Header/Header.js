import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  const [expanded, setExpanded] = useState(false)

  const toggleNav = () => {
    setExpanded(!expanded)
  }
  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Link to="/">
        <Navbar.Brand>Peter Shaughnessy Portfolio</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Link to="/about" onClick={toggleNav}>About Me</Link> */}
          <Link to="/portfolio" onClick={toggleNav}>Portfolio</Link>
          <Link to="/contact" onClick={toggleNav}>Contact</Link>
          <NavDropdown title="Resume" id="basic-nav-dropdown">
            <NavDropdown.Item href="/resume.pdf" target="blank" rel="noopener noreferrer">Download Resume
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
