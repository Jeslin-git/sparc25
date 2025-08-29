"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-start px-[15%] sm:px-[18%] md:px-[20%] 
                 text-white bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('bg.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Content */}
      <div className="max-w-4xl w-full">
        {/* Typewriter Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-chillax text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug sm:leading-tight md:leading-tight mb-6 drop-shadow-lg"
        >
          <Typewriter
            words={["An experience to shape your future"]}
            loop={false}
            cursor
            cursorStyle="|"   // straight line cursor
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg sm:text-xl md:text-2xl font-medium mb-10 text-white/90 drop-shadow-md"
        >
          Two days of insights, innovation & inspiration.
        </motion.p>

        {/* Glassy Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 sm:px-10 py-2 sm:py-3 rounded-full font-bold text-green-900 border border-white/60 shadow-lg transition duration-300"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(200,255,200,0.6))";
            e.currentTarget.style.color = "#064e3b";
            e.currentTarget.style.boxShadow =
              "0 6px 18px rgba(0,128,0,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))";
            e.currentTarget.style.color = "#14532d";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(0,0,0,0.4)";
          }}
        >
          Register Now
        </motion.button>
      </div>

      {/* Floating background accents */}
      <motion.div
        className="absolute -top-32 -left-20 w-64 h-64 bg-green-400/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
    </section>
  );
}
