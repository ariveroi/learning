import React from "react";
import { Link } from "react-router-dom";
import Breadcrum from "../../common/Breadcrumb/Breadcrum";
import Header from "../../common/Header/Header";
import Content from "../../Content/Content";
import TextEditor from "./Editor/TextEditor";

const NewBlog = () => {
  return (
    <Content>
      <Header title="New Blog Post" />
      <Breadcrum>
        <Link to="/admin">Admin</Link>
        <Link to="/admin/blog">Blogs</Link>
        <span>New</span>
      </Breadcrum>
      <TextEditor />
    </Content>
  );
};

export default NewBlog;
