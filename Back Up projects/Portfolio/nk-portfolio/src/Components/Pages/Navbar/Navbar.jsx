import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";

// Main NavigationBar component
function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3">
      <Container>
        {/* Logo and brand */}
        <Navbar.Brand href="/" className="brand-logo">
          NK
        </Navbar.Brand>
        <Navbar.Brand href="/" className="brand-name">
          Naveenkumar
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-lg-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
