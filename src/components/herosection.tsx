"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";


export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  

  return (
    <div className="relative">
      {/* HERO SECTION */}
<section
  className="relative min-h-screen flex flex-col justify-center items-start
             px-[15%] sm:px-[18%] md:px-[20%] text-white
             bg-cover bg-no-repeat bg-local md:bg-fixed
             bg-[position:20%_65%] sm:bg-[position:50%_60%] lg:bg-[position:50%_55%]"
  style={{
    backgroundImage: "url('bg.jpeg')",
  }}
>
  {/* Falling Petals */}
<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[10%] w-10 h-10 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 180] }}
  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[20%] w-12 h-12 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 270] }}
  transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[30%] w-8 h-8 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 360] }}
  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[40%] w-14 h-14 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 200] }}
  transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[50%] w-9 h-9 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 150] }}
  transition={{ repeat: Infinity, duration: 11, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[60%] w-12 h-12 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 220] }}
  transition={{ repeat: Infinity, duration: 13, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[70%] w-11 h-11 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 180] }}
  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[80%] w-13 h-13 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 300] }}
  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[15%] w-10 h-10 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 200] }}
  transition={{ repeat: Infinity, duration: 17, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[35%] w-9 h-9 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 280] }}
  transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[55%] w-11 h-11 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 250] }}
  transition={{ repeat: Infinity, duration: 13, ease: "linear" }}
/>

<motion.img
  src="petal.png"
  alt="petal"
  className="absolute top-[-100px] left-[75%] w-12 h-12 opacity-60"
  animate={{ y: ["-50vh", "120vh"], rotate: [0, 320] }}
  transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
/>



         {/* Hero Content */}
        <motion.div style={{ y }} className="max-w-4xl w-full relative z-10">
          <h1 className="font-chillax text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug mb-6 drop-shadow-lg">
            <Typewriter
              words={["Wishing you a happy onam"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl font-medium mb-10 text-white/90 drop-shadow-md"
          >
            Celebrate the spirit of unity, culture & tradition ✨
          </motion.p>

          
        </motion.div>
      </section>

      {/* Plain yellow patterned bottom part */}
      <div
        className="h-[100px] w-full"
        style={{
          backgroundColor: "#FFCC00",
          backgroundImage:
            "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}