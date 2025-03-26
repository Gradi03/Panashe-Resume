import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Using react-scroll for smooth scrolling to sections

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold tracking-widest">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center">
            <span className="text-yellow-400 text-4xl mr-2">P</span>
            <span className="text-white">anashe</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="home" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">
            Skills
          </Link>
          <Link to="experience" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">
            Experience
          </Link>
          <Link to="education" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">
            Education
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 space-y-4 text-center transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Link to="home" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer block">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer block">
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer block">
          Skills
        </Link>
        <Link to="experience" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer block">
          Experience
        </Link>
        <Link to="education" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer block">
          Education
        </Link>
        <Link to="contact" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer block">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
