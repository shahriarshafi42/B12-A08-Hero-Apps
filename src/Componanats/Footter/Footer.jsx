import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
       <footer className="bg-[#011a2c] text-gray-300 py-6 px-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start border-b border-gray-600 pb-4 ">
       
        <div className="flex items-center mb-4 sm:mb-0">
          <img
            src="logo.png" 
            alt="Hero.io Logo"
            className="w-10 h-10 mr-2"
          />
          <h2 className="text-lg font-semibold tracking-wide">HERO.IO</h2>
        </div>

    
        <div className="flex flex-col items-center sm:items-end">
          <h3 className="text-sm font-medium mb-2">Social Links</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-700 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-700 transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

 
      <div className="text-center mt-4 text-sm">
        Copyright © 2025 – All rights reserved
      </div>
    </footer>
    );
};

export default Footer;