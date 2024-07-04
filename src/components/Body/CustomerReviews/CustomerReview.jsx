import React from "react";
import { Link } from "react-router-dom";
import Tesla from "./assets/Tesla.png";

const CustomerReview = () => {
  const logos = [
    "logoipsum1.svg",
    "logoipsum2.svg",
    "logoipsum3.svg",
    "logoipsum4.svg",
    "logoipsum5.svg",
    "logoipsum6.svg",
  ];
  return (
    <div className="flex justify-center">
      <div
        className="grid grid-cols-11 my-4 p-4 bg-gray-100 dark:bg-darkBackground "
      >
        <div className="col-span-4 flex justify-end ">
          <img
            className="p-24 pt-9"
            src={Tesla}
            alt="man holding a lapton in front of a screen"
          />
        </div>

        <div className="col-span-7 flex flex-col items-center w-auto mr-4 ">
          <div>
            <div className="p-4 m-4 ">
              <p className="p-4 text-lg" style={{ color: "#717171" }}>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
                <h1
                  className="font-semibold text-2xl pt-4 "
                  style={{ color: " #43A046" }}
                >
                  Tim Smith
                </h1>
                <h1 className="font-light py-1" style={{ color: "#89939E" }}>
                  British Dragon Boat Racing Association
                </h1>
              </p>
            </div>

            <div className="flex justify-around items-center p-4 m-4">
              {logos.map((logo, index) => {
                return (
                  <span className="hover:transition-transform hover:scale-150">
                    <Link to="/clients">
                      <img src={logo} alt="logo" className="h-14 w-14" />
                    </Link>
                  </span>
                );
              })}

              <Link to="/our-customers">
                <button
                  style={{ color: "#43A046" }}
                  className="bg-transparent flex font-bold rounded-full items-center hover:scale-105  hover:bg-transparent"
                >
                  <Link to="/our-customers" className="">
                    Meet All Customers
                  </Link>
                <img src="arrow.svg" className="mx-2" alt="" />
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
