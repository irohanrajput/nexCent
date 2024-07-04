import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center text-white h-screen p-9">
      <span className="max-w-6xl m-4 p-4">
        <h1 className="text-6xl text-center">
          Sorry, but this page does not exist.
          or we might be building this right now for you!!. <br /> you might want to head back to
          the home page.
        </h1>
      </span>
      <span className="m-4 p-4">
        <Link to="/">
          <button>Back to Home ???? </button>
        </Link>
      </span>
    </div>
  );
};

export default PageNotFound;
