"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 text-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('bg.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hero Content */}
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight md:leading-tight mb-6 drop-shadow-lg">
          An experience to <br /> shape your future
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-10 text-white/90 drop-shadow-md">
          Two days of insights, innovation & inspiration.
        </p>

        {/* Glassy Button */}
        <button
          className="px-8 sm:px-10 py-2 sm:py-3 rounded-full font-bold text-green-900 border border-white/60 shadow-lg transition duration-300"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(200,255,200,0.6))";
            e.currentTarget.style.color = "#064e3b"; // darker green
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,128,0,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))";
            e.currentTarget.style.color = "#14532d"; // reset to dark green
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
          }}
        >
          Register Now
        </button>
      </div>

      {/* Big SPARC 2025 */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/80 text-5xl sm:text-7xl md:text-9xl lg:text-[9rem] font-extrabold tracking-tight">
        SPARC 2025
      </div>
    </section>
  );
}
