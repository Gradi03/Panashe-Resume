import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-50 to-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold text-indigo-600 text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 backdrop-blur-lg bg-opacity-80 border-l-4 border-indigo-500 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div>
            <label className="block text-lg font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

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

export default ContactForm;