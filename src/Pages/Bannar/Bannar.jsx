import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Bannar = () => {
    return (
       <section className="w-full bg-white text-center">
    
      <div className="max-w-6xl mx-auto px-6 pt-20">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 ">
          We Build  <br /><span className="text-purple-600">Productive</span> Apps
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting. Our goal is to turn your ideas into digital
          experiences that truly make an impact.
        </p>

       
        <div className="flex justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg transition cursor-pointer">
            <FaGooglePlay className="text-lg" /> Google Play
          </button>
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg transition cursor-pointer">
            <FaApple className="text-lg text-purple-600 " /> App Store
          </button>
        </div>

       
        <img className='flex mx-auto' src="hero.png" alt="" />
        
      </div>

      
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16">
        <h2 className='text-4xl font-bold pb-6 '>Trusted by Millions, Built for You</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-gray-200 text-sm">Total Downloads</p>
            <h3 className="text-4xl font-bold">29.6M</h3>
            <p className="text-xs text-gray-300 mt-1">21% More Than Last Month</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm">Total Reviews</p>
            <h3 className="text-4xl font-bold">906K</h3>
            <p className="text-xs text-gray-300 mt-1">46% More Than Last Month</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm">Active Apps</p>
            <h3 className="text-4xl font-bold">132+</h3>
            <p className="text-xs text-gray-300 mt-1">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Bannar;