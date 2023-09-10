import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Main/Main";
import ProjectComponent from "./ProjectComponent/ProjectComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<ProjectComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
