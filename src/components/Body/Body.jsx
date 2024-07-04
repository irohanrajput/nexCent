import React from "react";
import  {Link}  from "react-router-dom";
import Achievements from "./Achievements/Achievements";
import CustomerReview from "./CustomerReviews/CustomerReview";
import guyswithmobile from "./assets/Guyswithmobile.png"
import GirlTouchingMobile from "./assets/GirlTouchingMobile.png"

const Body = () => {
  return (
    <div className="bg-white text-neutral-600 dark:text-gray-300 dark:bg-black">
      <div className="grid grid-cols-5 my-4 p-4">
        <div className="col-span-2 flex p-4 m-4 ml-32 justify-center ">
          <img
            src={guyswithmobile}
            alt="two people looking at screen"
          />
        </div>
        <div className="col-span-3 w-5/6 ">
          <div className="flex flex-col justify-center p-4  h-full">
            <span>
              <h1
                className="text-5xl p-4 font-semibold"
              >
                The unseen of spending three years at Pixelgrade
              </h1>
            </span>
            <span className="text-lg">
              <h6 className="p-4" style={{ color: "#717171" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </h6>
            </span>
            <span>
              <button className="m-4">
                <Link to="/learnMore">Learn More</Link>
              </button>
            </span>
          </div>
        </div>
      </div>

      <Achievements />

      <div className="grid grid-cols-5 my-4 p-4 ">
        <div className="col-span-2 flex p-4 m-4 ml-32 justify-center ">
          <img
            src={GirlTouchingMobile}
            alt="man holding a lapton in front of a screen"
          />
        </div>
        
        <div className="col-span-3 w-5/6 ">
          <div className="flex flex-col justify-center p-4  h-full">
            <span>
              <h1
                className="text-5xl p-4 font-semibold text-neutral-600 dark:text-gray-300 "
                
              >
                How to design your site footer like we did
              </h1>
            </span>

            <span className="text-lg">
              <h6 className="p-4" style={{ color: "#717171" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </h6>
            </span>

            <span>
              <button className="m-4">
                <Link to="/learnMore">Learn More</Link>
              </button>
            </span>
          </div>
        </div>
      </div>
      <CustomerReview/>
    </div>
  );
};

export default Body;
