import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import OurClients from "./OurClients";
import ManageCommunity from "./ManageCommunity/ManageCommunity";

function Home() {
  return (
    <>
      <div className="flex flex-col  " style={{ backgroundColor: "#F5F7FA" }}>
        <Navbar />
        <Hero />
      </div>
      <div >
        <OurClients />
        <ManageCommunity />
      </div>
    </>
  );
}

export default Home;
