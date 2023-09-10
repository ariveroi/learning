import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/logo";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <>
      <Logo />
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Navbar />
      </Router>
    </>
  );
};
