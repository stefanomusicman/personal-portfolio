import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import IconsBar from "./Components/IconsBar/IconsBar";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import ParticlesBackground from "./Components/ParticlesBackground/ParticlesBackground";

function App() {
  return (
    <React.Fragment>
      <ParticlesBackground />
      <NavBar />
      <HeroSection />
      <Projects />
      <AboutMe />
      <IconsBar />
    </React.Fragment>
  );
}

export default App;
