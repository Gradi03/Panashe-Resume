import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: 'Postgraduate Diploma in IT Management',
    institution: 'MANCOSA',
    duration: '2024 – 2025',
    logo: '/assets/logos/mancosa logo.jpg', // Path to the logo
  },
  {
    title: 'Bachelor of Information & Communication Technology',
    institution: 'Durban University of Technology',
    duration: '2020 – 2022',
    logo: '/assets/logos/dut.jpg', // Path to the logo
  },
  {
    title: 'High School Diploma',
    institution: 'Scottburgh High School',
    duration: '2015 – 2019',
    logo: '/assets/logos/scrotburgh.png', // Path to the logo
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-br from-blue-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold text-blue-600 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>

        <div className="relative border-l-4 border-blue-500 pl-8 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-xl rounded-2xl p-6 backdrop-blur-lg bg-opacity-80 border-l-4 border-blue-500"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <span className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-white"></span>
              {/* School Logo */}
              <img
                src={edu.logo} // Dynamically load the logo from the data
                alt={edu.institution}
                // className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full mb-4 border-2 border-indigo-500"
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl shadow-2xl border-4 border-blue-500"
              loading="lazy"
              />
              <h3 className="text-2xl font-bold text-blue-600">{edu.title}</h3>
              <p className="text-lg text-gray-700 font-medium mt-1">{edu.institution}</p>
              <p className="text-md font-semibold text-gray-600 mt-2">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
