import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-start sm:text-left">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold">About</h3>
          <p className="text-gray-300 mt-2 text-sm">
            Passionate about IT, data, and business intelligence. Always learning and growing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {["home", "about", "skills", "experience", "education", "contact"].map((section) => (
              <li key={section}>
                <a href={`#${section}`} className="hover:text-yellow-400 transition">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="tel:+1234567890" className="block text-gray-300 hover:text-yellow-400">
                📞 +27 63 054 5612
              </a>
            </li>
            <li>
              <a href="mailto:panashemakonimeansbusiness@gmail.com" className="block text-gray-300 hover:text-yellow-400">
                ✉️ panashemakonimeansbusiness@gmail.com
              </a>
            </li>
            <li>
              <span className="block text-gray-300">🌍 Cape Town, South Africa</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Connect</h3>
          <div className="flex space-x-4 flex-wrap justify-start mt-2">
            <a href="https://www.instagram.com/panashee_m/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-yellow-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/panashe-makoni/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-yellow-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-white opacity-40 mt-8" />
      <p className="text-center text-sm text-gray-300 mt-4">
        © {new Date().getFullYear()} Panashe. All rights reserved. Created by{" "}
        <a href="https://ninjatechdesign.netlify.app" className="text-yellow-400 hover:underline">
          Ninja Design Pro
        </a>.
      </p>
    </footer>
  );
};

export default Footer;
