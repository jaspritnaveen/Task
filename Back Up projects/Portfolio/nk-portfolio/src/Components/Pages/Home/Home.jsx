import React from "react";
import "./Home.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import img from "../../../Assets/Passport_Photo_Blue.jpeg";

function Home() {
  return (
    <div className="home-page d-flex flex-column flex-md-row align-items-md-center justify-content-center">
      <Container>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col
            xs={12}
            md={6}
            className="text-center text-md-start mb-4 mb-md-0"
          >
            <h1 className="hero-title fw-bold pt-3">
              Hi, I'm <span className="hero-name">Naveenkumar R</span>
            </h1>
            <p className="hero-subtitle mt-3">
              Motivated Computer Science Engineer and Frontend Developer
              passionate about building responsive, user-friendly web
              applications and innovative solutions. Skilled in React.js,
              JavaScript, and modern web technologies, with a strong drive to
              learn and contribute to impactful projects.
            </p>

            <div className="home-button d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <Button variant="outline-primary">My Projects</Button>
              <Button variant="outline-primary">Contact Me</Button>
            </div>

            <div>
              <Button variant="outline-primary" className="mt-3 ps-4 pe-4">
                Download CV
              </Button>
            </div>

            <div className="contact-icon-part">
              <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 pt-3">
                <li>
                  <a
                    href="https://www.linkedin.com/in/jaspritnaveen/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin fs-4"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/jaspritnaveen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github fs-4"></i>
                  </a>
                </li>

                <li>
                  <a href="mailto:jaspritnaveen@gmail.com">
                    <i className="bi bi-envelope-fill fs-4"></i>
                  </a>
                </li>

                <li>
                  <a href="tel:6383146128">
                    <i className="bi bi-telephone fs-4"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          {/* Right Column */}
          <Col xs={12} md={6} className="text-center">
            <div className="profile-image">
              <img
                src={img}
                alt="Naveenkumar"
                className="profile-photo img-fluid rounded"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
