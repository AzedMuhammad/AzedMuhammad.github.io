/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Education from "./components/EducationCard";
import EducationAbout from "./pages/EducationAbout";
import Footer from "./components/Footer";
import TechStack from "./pages/TechStack";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/About" Component={About} />
        <Route path="/EducationAbout" Component={EducationAbout} />
        <Route path="/Footer" Component={Footer} />
        <Route path="/Techstack" Component={TechStack} />
      </Routes>
    </div>
  );
}

export default App;
