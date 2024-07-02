import React from "react";
import { Link } from "react-router-dom";

const MarketingTile = ({ image, title, link }) => {
  return (
    <div>
      <div className="relative flex justify-center m-4 mb-24 p-4">
        <img className="h-80" src={image} alt="" />

        <div
          className="absolute rounded-xl h-44 w-9/12 m-4 mt-3 p-4 top-56 font-semibold text-xl text-center shadow-lg "
          style={{ backgroundColor: "#F5F7FA", color: "#717171" }}
        >
          {title}
            <Link to={link}>
                <p
                className="m-4 flex justify-center mt-6"
                style={{ color: "#43A046" }}
                >
                ReadMore <img src="arrow.svg" alt="" />
                </p>
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default MarketingTile;
