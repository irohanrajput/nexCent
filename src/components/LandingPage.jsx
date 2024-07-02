import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ManageCommunity from "./ManageCommunity/ManageCommunity";
import OurClients from "./OurClients";
import Body from "./Body/Body";
import Marketing from "./Marketing/Marketing";
import GetDemo from "./GetDemo";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col" style={{ backgroundColor: "#F5F7FA" }}>
        <Navbar />
        <Hero />
      </div>
      <div>
        <OurClients />
        <ManageCommunity />
      </div>
      <Body />
      <Marketing />
      <GetDemo />
      <Footer/>
    </>
  );
}

export default LandingPage;
