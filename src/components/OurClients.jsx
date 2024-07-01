import React from "react";
import { Link } from "react-router-dom";

const OurClients = () => {
  return (
    <div className="flex flex-col bg-white my-4 p-4">
      <div>
        <span>
          <h1 className="text-3xl  text-center font-semibold" style={{ color: "#4D4D4D" }}>
            Our Clients
          </h1>
        </span>
        <span>
          <h3 className="text-center text-base" style={{ color: "#717171" }}>
            We have been working with some Fortune 500+ clients
          </h3>
        </span>
      </div>
      <div className="flex justify-around">
        <span>
          <Link to="/clients">
            <img src="logoipsum1.svg" alt="Tesla" className="h-16 w-16" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum2.svg" alt="Tesla" className="h-16 w-16" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum3.svg" alt="Tesla" className="h-16 w-16" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum4.svg" alt="Tesla" className="h-16 w-16" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum5.svg" alt="Tesla" className="h-16 w-16" />
          </Link>
        </span>

        <span>
          <Link to="/clients">
            <img src="logoipsum6.svg" alt="Tesla" className="h-16 w-16" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OurClients;
