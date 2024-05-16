'use client'
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header: React.FC = () => {
  const headerHeight = 64; // Adjust this value based on your header height

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="hidden md:flex space-x-4">
          {['about', 'projects', 'experience', 'contact'].map(section => (
            <li key={section} className="relative group">
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                offset={-headerHeight}
                className="block py-2 px-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer"
                activeClass="text-gray-400"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
