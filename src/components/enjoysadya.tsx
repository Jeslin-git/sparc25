// EnjoySadya.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

import sadyaenjoy from "../components/sadyaenjoy.png";
import kids from "../components/kids.png";
import kidpayasam from "../components/kidpayasam.png";

export default function EnjoySadya() {
  const images = [sadyaenjoy, kids, kidpayasam];

  return (
    <section
      className="py-20 px-6 sm:px-10 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: "#FFCC00" }}
    >
      {/* Animated floating flowers in background (optional small detail) */}
      <motion.div
        className="absolute top-10 left-10 text-5xl"
        animate={{ y: [0, 15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-5xl"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        🌼
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-4xl font-extrabold text-center mb-4 text-green-900"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Celebrating Onam With Sadya
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="text-lg text-center text-green-700 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A feast of flavors, joy, and togetherness
      </motion.p>

      {/* Images grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="rounded-3xl shadow-xl overflow-hidden bg-white transform hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.08, rotate: 1 }}
          >
            <img
              src={img}
              alt={`People enjoying Sadya ${i + 1}`}
              className="w-full h-72 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}




