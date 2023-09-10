import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <Link className="header-link" to={props.href}>
        {props.link}
      </Link>
    </div>
  );
};

export default Header;
