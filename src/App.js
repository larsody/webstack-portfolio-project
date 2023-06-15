import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Subscribe from "./routes/Subscribe";

import { Route, Routes } from "react-router";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/subscribe" element={<Subscribe />} />
    </Routes>
    </>
  );
}

export default App;