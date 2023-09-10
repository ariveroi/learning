import React from "react";
import "./Main.css";

import ProjectCard from "../ProjectCard/ProjectCard";

function Main() {
  return (
    <div className="container">
      <div className="section">
        <h2>Active Projects</h2>
        <div className="projects-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className="section">
        <h2>Completed Projects</h2>
        <div className="projects-container">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Main;
