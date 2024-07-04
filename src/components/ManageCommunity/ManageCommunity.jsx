import React from "react";
import InfoTile from "./InfoTile";
import TilesData from "./TilesData.json";

const ManageCommunity = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="p-4">
        <span>
          <h1
            className="text-5xl text-center font-semibold text-neutral-600 dark:text-gray-300 "
            
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
      <div className="flex pb-9 justify-evenly">
        {TilesData.map((tile, key) => {
          return (
            <InfoTile
              key={key}
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
