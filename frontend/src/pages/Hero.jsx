import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Data & AI Analyst', 'Business Intelligence Expert', 'Machine Learning Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-white via-white to-gray-50 text-gray-900 px-6 py-12 relative overflow-hidden"
    >
      {/* Overlay for extra design (optional) */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Dot Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-2 h-2 rounded-full bg-blue-300 opacity-50 absolute"
            initial={{ opacity: 0.4, y: -50 }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
              y: [0, 20, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
              delay: 0.5,
            }}
            style={{ top: '20%', left: '25%' }}
          />
          <motion.div
            className="w-4 h-4 rounded-full bg-indigo-400 opacity-50 absolute"
            initial={{ opacity: 0.4, y: -50 }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 3,
              delay: 1.5,
            }}
            style={{ top: '60%', left: '50%' }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-pink-300 opacity-50 absolute"
            initial={{ opacity: 0.4, y: -50 }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
              y: [0, 30, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2.5,
              delay: 1,
            }}
            style={{ top: '40%', left: '75%' }}
          />
          <motion.div
            className="w-5 h-5 rounded-full bg-green-400 opacity-50 absolute"
            initial={{ opacity: 0.4, y: -50 }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
              delay: 0.2,
            }}
            style={{ top: '80%', left: '15%' }}
          />
        </div>
      </div>

      <div className="relative text-center mx-auto space-y-6 md:w-2/3 lg:w-1/2">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Panashe
        </motion.h1>

        {/* Role Text */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={roleIndex}
            className="text-3xl md:text-5xl font-semibold text-blue-600 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {roles[roleIndex]}
          </motion.h2>
        </AnimatePresence>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          With a strong background in data analysis, machine learning, and business intelligence, I help organizations unlock the power of their data and drive intelligent decision-making.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          className="mt-8 px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-xl hover:scale-110 hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Explore My Work <ArrowDown className="ml-2 transform rotate-90" />
        </motion.button>
      </div>

    </section>
  );
};

export default Hero;
