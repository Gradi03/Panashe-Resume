import React from 'react';
import { Link } from 'react-scroll'; 
import { FaTwitter, FaGithub, FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white mt-16 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Navigation Links */}
        <nav>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item.toLowerCase()} 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-yellow-400 cursor-pointer text-lg"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-lg">Email: 
            <a href="mailto:panashe@example.com" className="hover:text-yellow-400">panashemakonimeansbusiness@gmail.com</a>
          </p>
          <p className="text-lg">Phone: 
            <a href="tel:+27 63 054 5612" className="hover:text-yellow-400">+27 63 054 5612
            </a>
          </p>
          <p className="text-lg">Address: 
            Cape Town, South Africa
            
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-6 justify-center md:justify-start">
            {/* <a href="https://twitter.com/panashe" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 text-3xl">
              <FaTwitter />
            </a> */}
            
            <a href="https://linkedin.com/in/panashe-makoni/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 text-3xl">
  <FaLinkedin />
</a>

            <a href="mailto:panashemakonimeansbusiness@gmail.com" className="hover:text-yellow-400 text-3xl">
              <FaEnvelope />
            </a>
            <a href="tel:+27 63 054 5612
" className="hover:text-yellow-400 text-3xl">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line & Copyright */}
      <hr className="border-white-600 mt-8" />
      <div className="text-center py-4 text-white-400 text-sm">
        <p>&copy; 2025 Panashe. All rights reserved.</p>
        <p>Coded by <span className="text-yellow-400 font-semibold">Ninja Tech Design</span></p>
      </div>
    </footer>
  );
};

export default Footer;
