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

      {/* Hero Section */}
      <HeroSection />
       
 <Timeline/>
    <Registration /> 
      <About />
    </div>
  );
};

export default App;
