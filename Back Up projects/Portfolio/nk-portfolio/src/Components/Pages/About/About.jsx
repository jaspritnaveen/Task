import React from "react";
import "./About.css";
import img from "../../../Assets/about.jpg";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <>
      <div className="about-page p-3">
        <div className="text-center mb-5">
          <h2>About Me</h2>
          <p>
            Get to know more about my background, education, and professional
            journey
          </p>
        </div>

        <div className="container  d-flex ">
          <div className="row w-100">
            {/* Left Column – Image */}
            <div className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
              <img
                src={img}
                alt="Naveenkumar"
                className="about-img img-fluid rounded"
              />
            </div>

            {/* Right Column – Content */}
            <div className="col-12 col-md-7">
              <h3>Who am I?</h3>

              <p className="about-intro">
                I am an inquisitive and sincere individual, always eager to
                expand my skills and knowledge. Having completed my B.E. in
                Computer Science and Engineering, I am skilled in HTML, CSS,
                JavaScript, Bootstrap, and React.js. As a driven computer
                science engineer, I am dedicated to utilizing my technical
                expertise to drive innovation and make meaningful contributions
                to impactful projects.
              </p>

              <ul className="list-unstyled quick-info">
                <li>
                  <strong>Name:</strong> Naveenkumar R
                </li>
                <li>
                  <strong>Role:</strong> Frontend Developer
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:jaspritnaveen12@gmail.com">
                    jaspritnaveen12@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+916383146128">+91 63831 46128</a>
                </li>
                <li>
                  <strong>Address:</strong> Thandukkaranpalayam, Avinashi,
                  Tiruppur, Tamil Nadu, India – 641655
                </li>
                <li>
                  <strong>Date of Birth:</strong> March 12, 2004
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a href="https://linkedin.com/in/jaspritnaveen">
                    linkedin.com/in/jaspritnaveen
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a href="https://github.com/jaspritnaveen">
                    github.com/jaspritnaveen
                  </a>
                </li>

                <Button variant="outline-primary" className="mt-3">
                  Download Resume
                </Button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
