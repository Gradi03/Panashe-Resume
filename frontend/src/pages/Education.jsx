import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle, ShieldCheck, Server, Database, BarChart, Globe, Lock, Cloud } from 'lucide-react';

const educationData = [
  {
    title: 'Postgraduate Diploma in IT Management',
    institution: 'MANCOSA',
    duration: '2024 – 2025',
    logo: '/assets/logos/mancosa logo.jpg',
    icon: <GraduationCap className="text-blue-600 w-6 h-6" />,
  },
  {
    title: 'Bachelor of Information & Communication Technology',
    institution: 'Durban University of Technology',
    duration: '2020 – 2022',
    logo: '/assets/logos/dut.jpg',
    icon: <CheckCircle className="text-green-600 w-6 h-6" />,
  },
  {
    title: 'High School Diploma',
    institution: 'Scottburgh High School',
    duration: '2015 – 2019',
    logo: '/assets/logos/scrotburgh.png',
    icon: <ShieldCheck className="text-purple-600 w-6 h-6" />,
  },
  {
    title: 'Microsoft Certified: Azure Administrator Associate',
    institution: 'Microsoft',
    duration: '2023',
    logo: '/assets/logos/microsoft.png',
    icon: <Cloud className="text-blue-500 w-6 h-6" />,
  },
  {
    title: 'Great Learning - Project Management',
    institution: 'Great Learning',
    duration: '2023',
    logo: '/assets/logos/greatlearning.png',
    icon: <Server className="text-orange-500 w-6 h-6" />,
  },
  {
    title: 'Great Learning - SQL for Data Science',
    institution: 'Great Learning',
    duration: '2023',
    logo: '/assets/logos/greatlearning.png',
    icon: <Database className="text-yellow-500 w-6 h-6" />,
  },
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    institution: 'Microsoft',
    duration: '2023',
    logo: '/assets/logos/microsoft.png',
    icon: <BarChart className="text-indigo-500 w-6 h-6" />,
  },
  {
    title: 'IELTS Academic',
    institution: 'IELTS',
    duration: '2023',
    logo: '/assets/logos/ielts.png',
    icon: <Globe className="text-red-500 w-6 h-6" />,
  },
  {
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    institution: 'Microsoft',
    duration: '2023',
    logo: '/assets/logos/microsoft.png',
    icon: <Lock className="text-gray-500 w-6 h-6" />,
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-br from-blue-50 to-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-blue-600 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Education & Certifications
        </motion.h2>

        <div className="relative border-l-4 border-blue-500 pl-8 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-xl rounded-2xl p-6 backdrop-blur-lg bg-opacity-90 border-l-4 border-blue-500 flex items-start gap-4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <span className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-white"></span>
              {edu.icon}
              <div>
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl shadow-2xl border-4 border-blue-500 mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">{edu.title}</h3>
                <p className="text-md sm:text-lg text-gray-700 font-medium mt-1">{edu.institution}</p>
                <p className="text-sm sm:text-md font-semibold text-gray-600 mt-2">{edu.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
