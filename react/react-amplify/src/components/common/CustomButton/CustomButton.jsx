import React from "react";
import "./style.css";
const CustomButton = (props) => {
  return (
    <button
      className={`mt-10 btn ${props.secondary ? "secondary" : ""}`}
      onClick={props.onClick}
    >
      <span className="button-icon">{props.icon}</span>
      {props.children}
    </button>
  );
};

export default CustomButton;
