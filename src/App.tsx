// src/App.tsx
import React from "react";

import HeroSection from "./components/herosection";
import BananaLeaf from "./components/BananaLeaf";
import EnjoySadya from "./components/enjoysadya";
import "tailwindcss";
import './index.css';


const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      

      {/* Hero Section */}
      <HeroSection />
       
 <BananaLeaf/>
    <EnjoySadya /> 
    </div>
  );
};

export default App;
