import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ManageCommunity from "./ManageCommunity/ManageCommunity";
import OurClients from "./OurClients";

function Home() {
  return (
    <>
      <div className="flex flex-col" style={{ backgroundColor: "#F5F7FA" }}>
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
