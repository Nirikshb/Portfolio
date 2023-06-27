import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="projects-container">
      <div
        className={`book-page-effect ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="page page-front">
          <span className="logo">Logo</span>
        </div>
        <div className="page page-back">
          <span className="tech-stack">Tech Stack</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
