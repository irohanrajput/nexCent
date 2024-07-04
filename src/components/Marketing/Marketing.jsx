import React from "react";
import MarketingTile from "./MarketingTile";
const Marketing = () => {
  const marketingTilesData = [
    {
      image: "Marketing/WomanWorking.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      link: "/marketing-tile-1",
    },
    {
      image: "Marketing/HandsOnLaptop.png",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      link: "/marketing-tile-2",
    },
    {
      image: "Marketing/HandsOnMacbook.png",
      title: "Revamping the Membership Model with Triathlon Australia",
      link: "/marketing-tile-3",
    },
  ];
  return (
    <div className="pb-24 p-4 py-9 bg-white dark:bg-black" >
      <div className="flex flex-col max-w-12xl">
          <div>
            <h1
              className="text-5xl text-center font-semibold text-defaultText dark:text-gray-300"
            >
              Caring is the new Marketing
            </h1>
            <br />
          </div>
          <div className="flex justify-center">
            <div className="text-center text-xl max-w-3xl " style={{ color: "#717171" }}>
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </div>
          </div>
      </div>
      <div className="flex justify-center">
        {marketingTilesData.map((tile, key) => {
          return (
            <MarketingTile
              image={tile.image}
              title={tile.title}
              link={tile.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Marketing;
