import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import { Book } from "lucide-react"; // Importing the Book icon for "learn more"

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const vantaRef = useRef(null);
  const roles = [
    "Data & AI Analyst",
    "Business Intelligence Expert",
    "Machine Learning Enthusiast",
  ];

  useEffect(() => {
    const vantaEffect = CLOUDS({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      backgroundColor: 0xffffff,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
  ref={vantaRef}
  id="home"
  className="relative min-h-screen h-auto flex flex-col justify-center items-center text-gray-900 px-4 sm:px-6 py-12 overflow-hidden"
>
  <div className="relative text-center mx-auto space-y-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Hi, I'm Panashe
    </motion.h1>

    <AnimatePresence mode="wait">
      <motion.h2
        key={roleIndex}
        className="text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        {roles[roleIndex]}
      </motion.h2>
    </AnimatePresence>

    <motion.p
      className="text-base sm:text-lg md:text-xl text-black-700 max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      With a strong background in data analysis, machine learning, and business intelligence, I help organizations unlock the power of their data and drive intelligent decision-making.
    </motion.p>

    <motion.button
      className="mt-6 sm:mt-8 px-4 sm:px-6 md:px-10 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
    >
      Learn More <Book className="ml-2" />
    </motion.button>
  </div>
</section>

  );
};

export default Hero;
