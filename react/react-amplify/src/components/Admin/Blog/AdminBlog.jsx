import React, { useEffect, useState, createRef } from "react";

import Content from "../../Content/Content";

import "./style.css";
import Header from "../../common/Header/Header";
import Breadcrum from "../../common/Breadcrumb/Breadcrum";
import { Link } from "react-router-dom";

const AdminBlog = () => {
  const [html, setHtml] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("rendering");
  }, []);

  const handleSave = (html) => {
    console.log(html);
    setBlogs((oldArray) => [html, ...oldArray]);
  };

  return (
    <Content>
      <Header title="Blogs" link="New Blog" href="/admin/new/blog" />
      <Breadcrum>
        <Link to="/admin">Admin</Link>
        <span>Blogs</span>
      </Breadcrum>
      <div className="header">
        {/* <h1>Admin Blog</h1>
        <Link to="/admin/new/blog" className="primary-link">
          New Blog
        </Link> */}
      </div>
      <div className="blog-posts">
        <h2>Exisiting blog posts</h2>
        {/* {blogs.map((blog, idx) => (
          <div></div>
        ))} */}
      </div>
    </Content>
  );
};

export default AdminBlog;
