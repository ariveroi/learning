import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./style.css";
const NavigationLink = (props) => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === props.to) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location]);

  return (
    <li className={`nav-link ${active ? "active" : ""}`}>
      <div className="nav-icon">{props.icon}</div>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
};

export default NavigationLink;
