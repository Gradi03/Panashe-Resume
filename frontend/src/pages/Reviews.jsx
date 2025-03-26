import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Reviews = () => {


  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-50 to-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6">
     

        {/* Reviews Section */}
        <section className="mt-16">
          <motion.h3
            className="text-4xl font-extrabold text-indigo-600 text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Colleague Reviews
          </motion.h3>
          <div className="space-y-8">
            {[
              { name: 'John Doe', review: 'A highly skilled and dedicated professional. Always delivers top-notch work!' },
              { name: 'Jane Smith', review: 'Great team player and problem solver. Pleasure to work with!' },
              { name: 'Michael Johnson', review: 'Incredibly talented and consistently exceeds expectations.' },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-500"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h4 className="text-xl font-semibold text-indigo-600">{review.name}</h4>
                <p className="text-gray-700 mt-2">"{review.review}"</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Reviews;