// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbar_elements = [
    "Home",
    "Service",
    "Feature",
    "Product",
    "Testimonials",
    "FAQs",
  ];
  return (
    <div className="p-4 m-4 mt-1 flex items-center justify-around ">
      <div className="flex items-center">
        <img src="nexcent.svg" alt="Nexcent Logo" className="mr-2" />
        <h1 className="text-3xl font-bold">Nexcent</h1>
      </div>
      <div className="flex space-x-12 ">
        {navbar_elements.map((navbar_element, index) => {
          return (
            <ul className=" hover:scale-105 hover:transition-transform ">
              <li key={index}>
                <Link to="/"> {navbar_element} </Link>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="flex justify-around space-x-4 ">
        <button style={{ color: "#43A046" }} className="bg-transparent ">
          <Link to="/login" className="">
            Login
          </Link>
        </button>
        <button>
          <Link to="/signUp" className="">
            Sign up
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
