import React from "react";
import "./ProjectCard.css";
import { useNavigate } from "react-router-dom";

import ProgressBar from "../ProgressBar/ProgressBar";

function ProjectCard(props) {
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/project");
  };
  const dragEnter = (e) => {
    e.preventDefault();
    //here is where we can change tag properties?
    console.log("drag enter");
    props.onDragEnter();
  };
  return (
    <button
      draggable="true"
      onDragEnter={(e) => dragEnter(e)}
      onClick={() => redirect()}
      className="project-card"
      id={props.id || ""}
    >
      <h3>Project Title</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
        magnam atque officiis assumenda?
      </p>
      <ProgressBar />
    </button>
  );
}

export default ProjectCard;
