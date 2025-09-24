"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

/* ---------------- Countdown Component ---------------- */
const Countdown: React.FC = () => {
  const targetDate = new Date("2025-10-18T09:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex flex-row justify-between items-center w-full max-w-4xl px-6 py-6 
                 rounded-full shadow-2xl shadow-black/60 mx-auto border"
      style={{
        backgroundColor: "#E5FFE6",
        borderColor: "#90EE90",
      }}
    >
      {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
        <div
          key={label}
          className="text-center flex-1 min-w-[70px] sm:min-w-[100px]"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            {Object.values(timeLeft)[idx]}
          </p>
          <span className="text-sm sm:text-base text-green-800">{label}</span>
        </div>
      ))}
    </div>
  );
};

/* ---------------- Hero Section ---------------- */
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
          backgroundImage: "url('bg.png')",
        }}
      >
        {/* Hero Content */}
        <motion.div style={{ y }} className="max-w-4xl w-full relative z-10 -mt-12">
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

    
<motion.a
  href="#sessions"   // 👈 scrolls to your Registration section
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
</motion.a>



        </motion.div>

        {/* Countdown */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center z-20">
          <Countdown />
        </div>
      </section>

      {/* Green bottom strip */}
      <div
        className="h-[100px] w-full"
        style={{
          backgroundColor: "#E5FFE6",
          backgroundImage:
            "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
