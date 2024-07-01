// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 m-4 mt-1 flex items-center justify-around ">
      <div className="flex items-center">
        <img src="nexcent.svg" alt="Nexcent Logo" className="mr-2" />
        <h1 className="text-3xl font-bold">Nexcent</h1>
      </div>
      <div>
        <ul className="flex space-x-12  ">
          <li>
            <Link to="/"> Home </Link>
          </li>

          <li>
            <Link to="#"> Service </Link>
          </li>
          <li>
            <Link to="#"> Feature </Link>
          </li>
          <li>
            <Link to="#"> Product </Link>
          </li>
          <li>
            <Link to="#"> Testimonial </Link>
          </li>
          <li>
            <Link to="#"> FAQ </Link>
          </li>
        </ul>
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
