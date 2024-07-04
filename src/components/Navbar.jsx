import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from './DarkModeToggle';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const navbar_elements = [
    "Home",
    "Service",
    "Feature",
    "Product",
    "Testimonials",
    "FAQs",
  ];
  return (
    <div className="p-4 flex items-center justify-around bg-gray-100 dark:bg-darkBackground dark:text-white">
      <div className="flex items-center">
        <img src="nexcent.svg" alt="Nexcent Logo" className="mr-2" />
        <h1 className="text-3xl font-bold">Nexcent</h1>
      </div>
      <div className="flex space-x-12">
        {navbar_elements.map((navbar_element, index) => (
          <ul key={index} className="hover:scale-105 hover:transition-transform">
            <li>
              <Link to="/"> {navbar_element} </Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <button style={{ color: "#43A046" }} className="bg-transparent">
          <Link to="/login" className="">
            Login
          </Link>
        </button>
        <button>
          <Link to="/signUp" className="">
            Sign up
          </Link>
        </button>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      
        
      </div>
      
    </div>
  );
};

export default Navbar;
