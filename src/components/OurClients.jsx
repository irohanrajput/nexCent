import React from "react";
import { Link } from "react-router-dom";

const OurClients = () => {
  const logos = [
    "logoipsum1.svg",
    "logoipsum2.svg",
    "logoipsum3.svg",
    "logoipsum4.svg",
    "logoipsum5.svg",
    "logoipsum6.svg",
    "logoipsum3.svg",
  ];
  return (
    <div className="flex flex-col my-4 p-4 bg-white dark:bg-black">
      <div>
        <span>
          <h1
            className="text-5xl text-neutral-600 dark:text-gray-200 text-center font-semibold"
          >
            Our Clients
          </h1>
        </span>
        <span>
          <h3
            className="text-center p-4 text-base"
            style={{ color: "#717171" }}
          >
            We have been working with some Fortune 500+ clients
          </h3>
        </span>
      </div>

      <div
        className="flex m-4 p-4 animate-  justify-around"
        
      >
        {logos.map((logo) => {
          return (
            <span className=" hover:transition-transform hover:scale-150 " >
              <Link to="/clients">
                <img src={logo} alt="logo" className="h-14 w-14" />
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default OurClients;
