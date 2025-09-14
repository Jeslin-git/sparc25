// src/App.tsx
import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import Timeline from "./components/timeline";
import Registration from "./components/Registration";
import About from "./components/About";
import "tailwindcss";
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* You also have a "Home" link. You can add an ID to HeroSection */}
      <div id="home">
        <HeroSection />
      </div>
  

      {/* Timeline Section with ID */}
      <div id="timeline">
        <Timeline/>
      </div>

      {/* Registration Section with ID */}
      <div id="sessions"> {/* Your Navbar link is "Sessions", so the id should match */}
        <Registration />
      </div>

    {/* About Section with ID */}
      <div id="about">
        <About />
      </div>

    </div>
  );
};

export default App;