import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkNavy text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com/panashe" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 19c2.4 1 5.6 1 8 0m0 0c2.4-1 4-3.8 4-7V7c0-4-4-4-4-4h-4c-4 0-4 4-4 4v5c0 3.2 2.4 6 5.2 6h.8"></path>
            </svg>
          </a>
          <a href="https://github.com/panashe" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.29 0-2.43-.53-3.24-1.37m6.33-.88C15.9 7.75 14.5 9.16 14 10.5c-1 1.66 0 2.9 1.22 3.43M3 12c0 1.1.9 2 2 2h6v2H5a2 2 0 00-2 2V7c0-1.1.9-2 2-2h6v2H5z"></path>
            </svg>
          </a>
          <a href="mailto:panashe@example.com" className="text-white hover:text-yellow-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v4.5m0 0l3-3m-3 3L9 7.5m15 7.5c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3h18c1.7 0 3 1.3 3 3v10z"></path>
            </svg>
          </a>
        </div>

        {/* Copyright and Email */}
        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Panashe. All rights reserved.</p>
          <p>Email: <a href="mailto:panashe@example.com" className="text-white hover:text-yellow-400">panashe@example.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
