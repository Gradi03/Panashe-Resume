import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-8 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        
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

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Connect</h3>
          <div className="flex space-x-4 flex-wrap justify-center md:justify-start mt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-yellow-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-yellow-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-yellow-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-white opacity-40 mt-8" />
      <p className="text-center text-sm text-gray-300 mt-4">© {new Date().getFullYear()} Panashe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
