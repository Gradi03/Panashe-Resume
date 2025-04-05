import React from 'react';
import { motion } from 'framer-motion';
import panden from '../assets/panden.jpg'; 
import classmates from '../assets/panmate.jpg'; 
import panashedb1 from '../assets/panashedb1.jpg'; 
import panashedb from '../assets/panashedb.jpg'; 
import databalk from '../assets/databalk.png'; 
import cashCrusadersLogo from '/assets/logos/cashcrusaders.jpg';
import jcLogo from '/assets/logos/jc.jpg'; 
import Blood from '/assets/logos/sanbs.png';

// SwiperJS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const experiences = [
  {
    role: 'Data & AI Analyst',
    company: 'DataBalk',
    location: 'Utrecht, Netherlands | Hybrid',
    duration: 'Jan 2024 – Present (1 yr 3 mos)',
    description:
      'Analyzing complex data sets and applying machine learning algorithms to extract insights. Building predictive models and data pipelines.',
    logo: databalk,
  },
  {
    role: 'Data Analyst',
    company: 'Cash Crusaders Franchising',
    location: 'Amanzimtoti, KwaZulu-Natal, South Africa | On-site',
    duration: 'Mar 2023 – Feb 2024 (1 yr)',
    description:
      'Performed data analysis and reporting to drive informed business decisions. Created dashboards and automated reporting processes.',
    logo: cashCrusadersLogo,
  },
  {
    role: 'Junior Front-House Manager',
    company: "JC's Restaurant",
    location: 'Amanzimtoti, KwaZulu-Natal, South Africa | On-site',
    duration: 'Jan 2021 – Feb 2023 (2 yrs 2 mos)',
    description:
      'Managed daily restaurant operations, customer interactions, staff oversight, and logistics to ensure an excellent dining experience.',
    logo: jcLogo,
  },
  {
    role: 'Blood Donor Assistant',
    company: 'South African National Blood Service',
    location: 'South Africa',
    duration: '2017 – 2021 (4 yrs)',
    description:
      'Assisted in donor care, ensuring smooth and efficient blood donation processes while educating donors on the importance of blood donation.',
    logo: Blood,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Work Experiences
        </motion.h2>

        {/* Experience Timeline */}
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
              <span className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-white-300"></span>

              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-4 border-2 border-blue-500 rounded-md"
                />
              )}

              <div className="text-left flex-1 mt-4 sm:mt-0">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">{exp.role}</h3>
                <p className="text-md sm:text-lg text-gray-700 font-medium mt-1">
                  {exp.company} ({exp.location})
                </p>
                <p className="text-md font-semibold text-gray-600 mt-2">{exp.duration}</p>
                <p className="text-gray-700 text-sm sm:text-md leading-relaxed mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Separated Video Section --- */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            How I Became an AI Engineer
          </h3>
          <div className="mx-auto max-w-3xl rounded-xl overflow-hidden shadow-2xl border-4 border-blue-500">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/wJIfAvE7hWE"
              title="How I Became an AI Engineer"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* --- Swiper Carousel --- */}
        <div className="mt-24 max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <img
                src="/assets/scottburghhigh.png"
                alt="Scottburgh high 100% matric pass rate in 2019"
                className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-blue-500"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={panden}
                alt="Panashe and deno"
                className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-blue-500"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={classmates}
                alt="Panashes's high school classmate"
                className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-blue-500"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={panashedb1}
                alt="Panashe"
                className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-blue-500"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={panashedb}
                alt="Panashe at databalk"
                className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-blue-500"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Experience;
