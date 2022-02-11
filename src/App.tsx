import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import IconsBar from "./Components/IconsBar/IconsBar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Projects />
      <IconsBar />
    </div>
  );
}

export default App;
