import React from "react";
import { Link } from "react-router-dom";

const Lessons = () => {
  return (
    <div>
      <div className="grid h-full w-full grid-cols-7 m-4 p-4 py-28">
        <div className="col-span-4">
          <div className="flex flex-col justify-center  ml-24 p-8 h-full">
            <div>
              <h1
                className="text-7xl font-semibold"
                style={{ color: "#4D4D4D" }}
              >
                Lessons and insights
              </h1>
            </div>
            <div>
              <h1
                className="text-7xl font-semibold"
                style={{ color: "#43A046" }}
              >
                from 8 years
              </h1>
            </div>
            <div className="my-4 text-lg">
              <h6 className="" style={{ color: "#717171" }}>
                Where to grow your business as a photographer: site or social
                media?
              </h6>
            </div>
            <div>
              <button>
                <Link to="/signUp" className="">
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-center ">
          <img
            src="manAndScreen.svg"
            alt="man holding a lapton in front of a screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Lessons;
