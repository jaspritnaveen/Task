import React from "react";
import "./Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer p-4 bg-dark  text-white">
        <div className="footer-brand d-flex justify-content-center align-items-center gap-3">
          <Navbar.Brand href="/" className="brand-logo">
            NK
          </Navbar.Brand>
          <Navbar.Brand href="/" className="brand-name">
            Naveenkumar
          </Navbar.Brand>
        </div>

        <Nav className="justify-content-center gap-lg-4 footer-navigation m-3">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#project">Project</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>

        <div>
          <Row xs={12} className="text-center m-3">
            <Col>© 2025 Naveenkumar R. All Rights Reserved</Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
