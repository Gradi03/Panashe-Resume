import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Data & AI Analyst',
    company: 'DataBalk',
    location: 'Utrecht, Netherlands | Hybrid',
    duration: 'Jan 2024 – Present (1 yr 3 mos)',
    description:
      'Analyzing complex data sets and applying machine learning algorithms to extract insights. Building predictive models and data pipelines.',
    image: '/assets/databalk.jpg',
  },
  {
    role: 'Data Analyst',
    company: 'Cash Crusaders Franchising',
    location: 'Amanzimtoti, KwaZulu-Natal, South Africa | On-site',
    duration: 'Mar 2023 – Feb 2024 (1 yr)',
    description:
      'Performed data analysis and reporting to drive informed business decisions. Created dashboards and automated reporting processes.',
  },
  {
    role: 'Junior Front-House Manager',
    company: "JC's Restaurant",
    location: 'Amanzimtoti, KwaZulu-Natal, South Africa | On-site',
    duration: 'Jan 2021 – Feb 2023 (2 yrs 2 mos)',
    description:
      'Managed daily restaurant operations, customer interactions, staff oversight, and logistics to ensure an excellent dining experience.',
  },
  {
    role: 'Blood Donor Assistant',
    company: 'South African National Blood Service',
    location: 'South Africa',
    duration: '2017 – 2021 (4 yrs)',
    description:
      'Assisted in donor care, ensuring smooth and efficient blood donation processes while educating donors on the importance of blood donation.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Work Experience
        </motion.h2>

        <div className="relative border-l-4 border-blue-500 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-xl rounded-2xl p-6 flex flex-col md:flex-row items-start md:gap-6 backdrop-blur-lg bg-opacity-80"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <span className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-white"></span>
              {exp.image && (
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-xl shadow-md border-2 border-blue-500"
                />
              )}
              <div className="text-left flex-1">
                <h3 className="text-2xl font-bold text-blue-600">{exp.role}</h3>
                <p className="text-lg text-gray-700 font-medium mt-1">{exp.company} ({exp.location})</p>
                <p className="text-md font-semibold text-gray-600 mt-2">{exp.duration}</p>
                <p className="text-gray-700 text-md leading-relaxed mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

       {/* Embedded Video */}
<div className="mt-20 flex justify-center">
  <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl border-4 border-blue-500">
    <iframe
      width="100%"
      height="405"
      src="https://www.youtube.com/embed/wJIfAvE7hWE"
      title="How I Became an AI Engineer"
      frameBorder="0"
      allowFullScreen
      className="rounded-lg"
    ></iframe>
  </div>
</div>

      </div>
    </section>
  );
};

export default Experience;