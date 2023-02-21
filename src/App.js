import React from "react";
import BuildHeader from "./components/header.js";
import BuildHero from "./components/hero.js";
import BuildAbout from "./components/about.js";

function App() {
  return (
    <div className="App">
      <BuildHeader />
      <BuildHero />
      <BuildAbout />
    </div>
  );
}

export default App;
