import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch JSON data
  useEffect(() => {
    axios
      .get("/projects.json")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => {
        setError("Failed to load data. Please try again.");
        console.error(err);
      });
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <button onClick={() => navigate(-1)} className="back-button">Back</button> 
        <h1 className="page-title">Projects</h1>
        <div className="placeholder"></div>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card-grid">
            <div className="one">
              <p className="disclaimer">{project.disclaimer}</p>
            </div>
            <div className="two">
              <img src={project.img} alt={`${project.name}`} />
            </div>
            <div className="three">
              <h2>{project.name}</h2>
            </div>
            <div className="four">
              <p>{project.description}</p>
            </div>
            <div className="five">
              <div className="links">
                <a className="link" href={project.live_demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a className="link" href={project.repository} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
                {project.backend && ( // Only render this link if project.backend exists
                  <a className="link" href={project.backend} target="_blank" rel="noopener noreferrer">
                    Backend
                  </a>
                )}
              </div>
            </div>
            <div className="six">
              <ul>
                {project.technologies.map((tech, index) => (
                <li className="techs" key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Works;
