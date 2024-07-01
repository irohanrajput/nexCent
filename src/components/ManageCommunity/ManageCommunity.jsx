import React from "react";
import InfoTile from "./InfoTile";
import TilesData from "./assets/TilesData.json";

const ManageCommunity = () => {
  return (
    <div>
      <div>
        <span>
          <h1
            className="text-5xl text-center font-semibold"
            style={{ color: "#4D4D4D" }}
          >
            Manage your entire community in <br /> a single system
          </h1>
          <br />
        </span>
        <span>
          <h3 className="text-center  text-xl" style={{ color: "#717171" }}>
            Who is Nextcent suitable for?
          </h3>
        </span>
      </div>
      <div className="flex justify-evenly">
        {TilesData.map((tile, index) => {
          return (
            <InfoTile
              key={index}
              icon={tile.icon}
              title={tile.title}
              description={tile.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ManageCommunity;
