import React from "react";
import BuildHeader from "./components/header.jsx";
import BuildHero from "./components/hero.jsx";
import BuildAbout from "./components/about.jsx";
import BuildMyProjects from "./components/projects.jsx";

function App() {
  return (
    <div className="App">
      <BuildHeader />
      <BuildHero />
      <BuildAbout />
      <BuildMyProjects />
    </div>
  );
}

export default App;
