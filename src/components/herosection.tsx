"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]); // parallax effect

  return (
<section
  className="relative min-h-screen flex flex-col justify-center items-start 
             px-[15%] sm:px-[18%] md:px-[20%] text-white bg-cover bg-no-repeat overflow-hidden
             bg-[position:20%_center] sm:bg-[position:50%_center] lg:bg-center"
  style={{
    backgroundImage: "url('bg.png')",
    backgroundAttachment: "fixed",
  }}
>




      {/* Hero Content */}
      <motion.div
        style={{ y }} // parallax scroll
        className="max-w-4xl w-full relative z-10"
      >
        <h1 className="font-chillax text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug mb-6 drop-shadow-lg">
          <Typewriter
            words={["An experience to shape your future"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl font-medium mb-10 text-white/90 drop-shadow-md"
        >
          Two days of insights, innovation & inspiration.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(34,197,94,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 sm:px-10 py-2 sm:py-3 rounded-full font-bold text-green-900 border border-white/60 shadow-lg transition duration-300"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          }}
        >
          Register Now
        </motion.button>
      </motion.div>
    </section>
  );
}
