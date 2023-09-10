import React from "react";
import "./breadcrumbs.css";
const Breadcrum = (props) => {
  const links = props.children.map((child, idx) => <li key={idx}>{child}</li>);
  return <ul className="breadcrumbs-container">{links}</ul>;
};

export default Breadcrum;
