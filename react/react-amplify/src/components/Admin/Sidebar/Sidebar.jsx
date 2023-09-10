import React from "react";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { TbLayoutNavbar } from "react-icons/tb";
import "./style.css";
import NavigationLink from "../../common/NavigationLink/NavigationLink";

const Sidebar = (props) => {
  return (
    <div className="admin-sidebar">
      <ul>
        <NavigationLink icon={<ImBlog />} to="/admin/blog">
          Blog
        </NavigationLink>
        <NavigationLink icon={<TbLayoutNavbar />} to="/admin/navbar">
          Navbar
        </NavigationLink>
      </ul>
      <button onClick={props.signOut}>Sign out</button>
    </div>
  );
};

export default Sidebar;
