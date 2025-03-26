import React from 'react';
import { motion } from 'framer-motion';
import PanasheImage from '/src/assets/panashe.jpg'; // Ensure you have an image file to use

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-white text-gray-900 flex flex-col md:flex-row items-center justify-center px-6 md:px-12 space-y-10 md:space-y-0"
    >
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <motion.h2
          className="text-4xl font-extrabold text-blue-600 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hi, I’m Panashe, a Data & AI Analyst with expertise in Business Intelligence, Data Analysis, and Machine Learning. I specialize in leveraging data to drive actionable insights and help businesses make intelligent, data-driven decisions.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          With my experience and passion for data, I collaborate with organizations to design solutions that maximize the value of their data, helping them unlock hidden opportunities.
        </motion.p>
      </div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/3 flex justify-center relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-blue-500">
          <img
            src={PanasheImage}
            alt="Panashe"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;