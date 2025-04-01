import React from 'react';
import { motion } from 'framer-motion';
import PanasheImage from '/src/assets/panashe.jpg'; // Ensure you have an image file to use

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 sm:px-10 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 text-gray-900 flex flex-col md:flex-row items-center justify-center"
    >
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hi, I’m Panashe, a Data & AI Analyst with expertise in Business Intelligence, Data Analysis, and Machine Learning. I specialize in leveraging data to drive actionable insights and help businesses make intelligent, data-driven decisions.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
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
        className="md:w-1/3 flex justify-center relative mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-blue-500">
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
