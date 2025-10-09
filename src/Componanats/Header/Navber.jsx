import React from 'react';
import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router';
const Navber = () => {
   const [open, setOpen] = useState(false);
    return (
       <header className="bg-white border-b border-gray-200 shadow-sm">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4 font-semibold">
    <NavLink to={'/'}>
      <div className="flex items-center space-x-2">
      <img
        src="/logo.png"
        alt="Hero.io Logo"
        className="w-8 h-8"
      />
      <h1 className="text-lg font-semibold text-gray-800">HERO.IO</h1>
    </div>
    </NavLink>

    <nav className="hidden md:flex items-center space-x-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 pb-1"
            : "text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-400 transition-all duration-200 pb-1"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 pb-1"
            : "text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-400 transition-all duration-200 pb-1"
        }
      >
        Apps
      </NavLink>

      <NavLink
        to="/Installedapps"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 pb-1"
            : "text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-400 transition-all duration-200 pb-1"
        }
      >
        Installation
      </NavLink>
    </nav>

    <div className="hidden md:flex">
     <NavLink to={'https://github.com/shahriarshafi42'}>
       <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-md text-sm transition cursor-pointer">
        <FaGithub className="text-white" />
        Contribute
      </button>
     </NavLink>
    </div>

    <div className="md:hidden">
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <FaTimes className="text-gray-800 text-xl" />
        ) : (
          <FaBars className="text-gray-800 text-xl" />
        )}
      </button>
    </div>
  </div>

  {open && (
    <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 flex flex-col space-y-3">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 pb-1"
            : "text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-400 transition-all duration-200 pb-1"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 pb-1"
            : "text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-400 transition-all duration-200 pb-1"
        }
      >
        Apps
      </NavLink>

      <NavLink
        to="/Installedapps"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 border-b-2 border-purple-600 pb-1"
            : "text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-400 transition-all duration-200 pb-1"
        }
      >
        Installation
      </NavLink>

      <button className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm transition">
        <FaGithub />
        Contribute
      </button>
    </div>
  )}
</header>

    );
};

export default Navber;