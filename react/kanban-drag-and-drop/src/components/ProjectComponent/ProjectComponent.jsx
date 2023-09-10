import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectComponent.css";

function ProjectComponent() {
  const [dragObjectId, setDragObjectId] = useState("");
  const dragEnter = (e, id) => {
    e.preventDefault();
    document.querySelector(`#${id}`).classList.add("drag-enter");
  };
  const dragLeave = (e, id) => {
    e.preventDefault();
    document.querySelector(`#${id}`).classList.remove("drag-enter");
  };
  const onDrop = (e, id) => {
    e.preventDefault();
    const box = document.querySelector(`#${dragObjectId}`);
    document.querySelector(`#${id}`).classList.remove("drag-enter");
    document.querySelector(`#${id}`).appendChild(box);
  };
  return (
    <div className="container-left">
      <h2>Project Title</h2>
      <div className="completion-container">
        <span style={{ marginRight: "40px" }}>Completion</span>
        <ProgressBar />
      </div>
      <div className="content-container">
        <div
          onDragLeave={(e) => dragLeave(e, "to-do")}
          onDragEnter={(e) => dragEnter(e, "to-do")}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, "to-do")}
          className="tags-container"
          id="to-do"
        >
          <span>To-Do</span>
          <ProjectCard
            id="pc-24"
            onDragEnter={() => setDragObjectId("pc-24")}
          />
        </div>
        <div
          onDragLeave={(e) => dragLeave(e, "in-progress")}
          onDragEnter={(e) => dragEnter(e, "in-progress")}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, "in-progress")}
          className="tags-container"
          id="in-progress"
        >
          <span>In Progress</span>
        </div>
        <div
          onDragLeave={(e) => dragLeave(e, "done")}
          onDragEnter={(e) => dragEnter(e, "done")}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, "done")}
          className="tags-container"
          id="done"
        >
          <span>Done</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
