import React from "react";
import "./Project.css";

import business from "../../../Assets/Projects/business.png";
import milk from "../../../Assets/Projects/milkymist.png";
import travel from "../../../Assets/Projects/villa.png";
import form from "../../../Assets/Projects/form.png";
import portfolio from "../../../Assets/Projects/portfolio.png";
import mexantImg from "../../../Assets/Projects/mexant.png";

const Project = () => {
  return (
    <>
      <section id="projects" className="p-3">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>My Projects</h2>
            <p>
              Here are some of the projects I've worked on during my academic
              journey
            </p>
          </div>

          <div className=" px-4 row g-4 gy-4 ">
            {/* Project 1 */}
            <div className="col-md-6 col-lg-4 p-0 p-md-4">
              <article className="project-card card border-0  h-100 shadow-sm">
                <div className="project-image business-img">
                  <img
                    src={business}
                    alt="Business Website"
                    className="card-img-top"
                  />
                </div>
                <div className="project-info card-body">
                  <h3 className="card-title">Corporate & Business Site</h3>
                  <p className="card-text">
                    Built a polished, responsive business site template with
                    modular components for a consistent user experience.
                  </p>
                  <div className="project-tags mb-4">
                    <span className="badge tag text-dark me-2">HTML</span>
                    <span className="badge tag  text-dark me-2">CSS</span>
                    <span className="badge tag  text-dark me-2">Bootstrap</span>
                    <span className="badge tag  text-dark">
                      Web Development
                    </span>
                  </div>
                  <div className="project-links">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <i className="fas fa-link"></i> View Project
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Project 2 */}
            <div className="col-md-6 col-lg-4 p-0 p-md-4">
              <article className="project-card card border-0 h-100 shadow-sm">
                <div className="project-image">
                  <img src={milk} alt="Milky Mist" className="card-img-top" />
                </div>
                <div className="project-info card-body">
                  <h3 className="card-title">Dairy Products Website</h3>
                  <p className="card-text">
                    Developed a structured and visually appealing website to
                    showcase dairy products using HTML and CSS.
                  </p>
                  <div className="project-tags mb-4">
                    <span className="badge tag text-dark me-2">HTML</span>
                    <span className="badge tag  text-dark me-2">CSS</span>
                    <span className="badge tag  text-dark">
                      Web Development
                    </span>
                  </div>
                  <div className="project-links">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <i className="fas fa-link"></i> View Project
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Project 3 */}
            <div className="col-md-6 col-lg-4 p-0 p-md-4">
              <article className="project-card card border-0 h-100 shadow-sm">
                <div className="project-image">
                  <img
                    src={travel}
                    alt="Travel Agency"
                    className="card-img-top"
                  />
                </div>
                <div className="project-info card-body">
                  <h3 className="card-title">Travel Agency Website</h3>
                  <p className="card-text">
                    Designed and implemented a responsive travel agency website
                    with clean layouts to highlight packages and services.
                  </p>
                  <div className="project-tags mb-4">
                    <span className="badge tag text-dark me-2">HTML</span>
                    <span className="badge tag  text-dark me-2">CSS</span>
                    <span className="badge tag  text-dark me-2">Bootstrap</span>
                    <span className="badge tag  text-dark">
                      Web Development
                    </span>
                  </div>
                  <div className="project-links">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <i className="fas fa-link"></i> View Project
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Project 4 */}
            <div className="col-md-6 col-lg-4 p-0 p-md-4">
              <article className="project-card card border-0 h-100 shadow-sm">
                <div className="project-image">
                  <img
                    src={portfolio}
                    alt="Portfolio"
                    className="card-img-top"
                  />
                </div>
                <div className="project-info card-body">
                  <h3 className="card-title">Portfolio Website</h3>
                  <p className="card-text">
                    Built a React.js portfolio with reusable components and a
                    responsive design to showcase projects, skills, and
                    achievements.
                  </p>
                  <div className="project-tags mb-4">
                    <span className="badge tag text-dark me-2">HTML</span>
                    <span className="badge tag  text-dark me-2">CSS</span>
                    <span className="badge tag  text-dark me-2">Bootstrap</span>
                    <span className="badge tag  text-dark me-2">React Js</span>
                    <span className="badge tag  text-dark">
                      Web Development
                    </span>
                  </div>
                  <div className="project-links">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <i className="fas fa-link"></i> View Project
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Project 5 */}
            <div className="col-md-6 col-lg-4 p-0 p-md-4">
              <article className="project-card card border-0 h-100 shadow-sm">
                <div className="project-image">
                  <img
                    src={form}
                    alt="Form Validation"
                    className="card-img-top"
                  />
                </div>
                <div className="project-info card-body">
                  <h3 className="card-title">Form Validation Project</h3>
                  <p className="card-text">
                    Developed a form validation system using HTML, CSS, and
                    JavaScript to ensure accurate and user-friendly input
                    handling.
                  </p>
                  <div className="project-tags mb-4">
                    <span className="badge tag text-dark me-2">HTML</span>
                    <span className="badge tag  text-dark me-2">CSS</span>
                    <span className="badge tag  text-dark me-2">
                      JavaScript
                    </span>
                    <span className="badge tag  text-dark">
                      Web Development
                    </span>
                  </div>
                  <div className="project-links">
                    <a
                      href="https://learnhub-dc69d.web.app"
                      className="btn btn-outline-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-link"></i> View Project
                    </a>
                  </div>
                </div>
              </article>
            </div>

            {/* Project 6 */}
            <div className="col-md-6 col-lg-4 p-0 p-md-4">
              <article className="project-card card border-0 h-100 shadow-sm">
                <div className="project-image">
                  <img
                    src={mexantImg}
                    alt="Responsive Website Project"
                    className="card-img-top"
                  />
                </div>
                <div className="project-info card-body">
                  <h3 className="card-title">Responsive Business Website</h3>
                  <p className="card-text">
                    Designed and developed a fully responsive multi-page website
                    using modern layout techniques, optimized for mobile
                    devices, and integrated custom content and styles.
                  </p>

                  {/* Technologies used */}
                  <div className="project-tags mb-4">
                    <span className="badge tag text-dark me-2">HTML</span>
                    <span className="badge tag text-dark me-2">CSS</span>
                    <span className="badge tag text-dark me-2">Bootstrap</span>
                    <span className="badge tag text-dark me-2">React JS</span>
                  </div>

                  <div className="project-links d-flex justify-content-between align-items-center align-items-center">
                    <a
                      href="https://your-live-link.com"
                      className="btn btn-outline-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-link me-1"></i> View Project
                    </a>

                    <div className="repo-link">
                      <a
                        href="https://github.com/your-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <i className="bi bi-link me-2 fs-4"></i>
                        GitHub Source
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
