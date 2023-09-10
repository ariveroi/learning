import React from "react";
import "./ProgressBar.css";

function ProgressBar() {
  const progress = 90;
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    width: `${progress}%`,
    height: "100%",
    margin: "0 auto",
    borderRadius: "10px",
    backgroundColor: "#00bcd4",
    zIndex: "10",
  };
  return (
    <div className="progress-bar-container">
      <div style={style}></div>
      <div className="progress-bar"></div>
    </div>
  );
}

export default ProgressBar;
