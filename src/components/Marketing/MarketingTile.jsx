import React from "react";
import { Link } from "react-router-dom";

const MarketingTile = ({ image, title, link }) => {
  return (
    <div className="relative hover:shadow-2xl hover:transition-transform hover:scale-105 rounded-lg flex justify-center m-8 mb-28">

      <img className="h-80 hover:opacity-80 " src={image} alt="" />

      <Link
        className="absolute rounded-xl h-44 w-9/12 m-4 mt-3 p-4 top-56 font-semibold text-xl text-center shadow-lg hover:shadow-2xl hover:transition-transform hover:scale-105 "
        style={{ backgroundColor: "#F5F7FA", color: "#717171" }}
        to={link}
      >
        {title}
        <p
          className="m-4 flex justify-center mt-6"
          style={{ color: "#43A046" }}
        >
          ReadMore <img src="arrow.svg" alt="" />
        </p>
      </Link>
    </div>
  );
};

export default MarketingTile;
