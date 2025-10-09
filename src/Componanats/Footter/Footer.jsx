import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
      <footer className="bg-[#011a2c] text-gray-300 py-10 px-5">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start border-b border-gray-600 pb-10 gap-10">
    
    <div className="flex flex-col gap-4 items-start lg:w-1/3">
      <div className="flex items-center">
        <img src="logo.png" alt="Hero.io Logo" className="w-10 h-10 mr-2" />
        <h2 className="text-lg font-semibold tracking-wide">HERO.IO</h2>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Follow Us</h3>
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

    
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm lg:w-2/3">
      <nav>
        <h6 className="text-base font-semibold mb-2">Services</h6>
        <a className="block hover:text-white transition" href="#">Branding</a>
        <a className="block hover:text-white transition" href="#">Design</a>
        <a className="block hover:text-white transition" href="#">Marketing</a>
        <a className="block hover:text-white transition" href="#">Advertisement</a>
      </nav>
      <nav>
        <h6 className="text-base font-semibold mb-2">Company</h6>
        <a className="block hover:text-white transition" href="#">About us</a>
        <a className="block hover:text-white transition" href="#">Contact</a>
        <a className="block hover:text-white transition" href="#">Jobs</a>
        <a className="block hover:text-white transition" href="#">Press kit</a>
      </nav>
      <nav>
        <h6 className="text-base font-semibold mb-2">Legal</h6>
        <a className="block hover:text-white transition" href="#">Terms of use</a>
        <a className="block hover:text-white transition" href="#">Privacy policy</a>
        <a className="block hover:text-white transition" href="#">Cookie policy</a>
      </nav>
    </div>
  </div>


  <div className="text-center mt-6 text-sm text-gray-400">
    © 2025 HERO.IO – All rights reserved
  </div>
</footer>


    );
};

export default Footer;