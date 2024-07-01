import React from "react";
import { Link } from "react-router-dom";

const OurClients = () => {
  return (
    <div className="flex flex-col my-4 p-4">
      <div>
        <span>
          <h1
            className="text-5xl  text-center font-semibold"
            style={{ color: "#4D4D4D" }}
          >
            Our Clients
          </h1>
        </span>
        <span>
          <h3 className="text-center p-4 text-base" style={{ color: "#717171" }}>
            We have been working with some Fortune 500+ clients
          </h3>
        </span>
      </div>
      <div className="flex m-4 p-4 justify-around">
        <span>
          <Link to="/clients">
            <img src="logoipsum1.svg" alt="logo" className="h-14 w-14" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum2.svg" alt="logo" className="h-14 w-14" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum3.svg" alt="logo" className="h-14 w-14" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum4.svg" alt="logo" className="h-14 w-14" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum5.svg" alt="logo" className="h-14 w-14" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum6.svg" alt="logo" className="h-14 w-14" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum3.svg" alt="logo" className="h-14 w-14" />
          </Link>
        </span>
      </div>

      
    </div>
  );
};

export default OurClients;
