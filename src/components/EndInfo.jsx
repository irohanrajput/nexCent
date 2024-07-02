import React from "react";
import { Link } from "react-router-dom";

const EndInfo = () => {
  return (
    <div
      className="flex flex-col items-center mY-4 p-4 "
      style={{ backgroundColor: "#F5F7FA" }}
    >
      <div>
        <h1 className="text-7xl font-bold text-center max-w-5xl m-2 p-2">
          Pellentesque suscipit fringilla libero eu.
        </h1>
      </div>
      <div className="m-2 p-2">
        <Link>
          <button className="flex items-center ">
            Get a Demo <img src="whiteArrow.svg" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EndInfo;
