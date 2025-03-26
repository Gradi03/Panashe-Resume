import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaCloud, FaChartLine, FaCog, FaFileExcel } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white text-gray-900 text-center">
      <motion.h2
        className="text-5xl font-extrabold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Key Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Skill Cards */}
        {[
          { icon: <FaPython />, title: 'Data Analysis (Python, Power BI)', desc: 'Leveraging Python and Power BI for advanced data insights and visualizations.' },
          { icon: <FaChartLine />, title: 'Machine Learning & Predictive Analytics', desc: 'Implementing machine learning models for predictive analysis and decision-making.' },
          { icon: <FaDatabase />, title: 'SQL & Database Management', desc: 'Optimizing SQL databases for efficient storage and retrieval of data.' },
          { icon: <FaCloud />, title: 'Cloud Technologies (Microsoft Azure)', desc: 'Deploying scalable solutions and applications using Azure Cloud services.' },
          { icon: <FaCog />, title: 'ETL Processes & Data Integration', desc: 'Designing and automating ETL pipelines for seamless data integration.' },
          { icon: <FaFileExcel />, title: 'Data Quality Assurance & Reporting', desc: 'Ensuring data accuracy and generating insightful reports for stakeholders.' }
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="text-blue-600 text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-center text-lg text-gray-700">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;