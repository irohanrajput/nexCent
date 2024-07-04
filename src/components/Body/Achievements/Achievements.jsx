import React from "react";
import GoalTile from "./GoalTile";
import AchievementsData from "./achievements.json";
import CountUp from "react-countup";

const Achievements = () => {
  return (
    <div
      className="grid grid-cols-2 my-9 p-12 bg-gray-100 dark:bg-darkBackground "
    >
      <div className="flex flex-col  justify-center  ml-28 p-8 h-full">
        <span>
          <h1 className="text-5xl dark:text-gray-300 font-semibold" text-neutral-600 dark:text-gray-200 >
            Helping a local
          </h1>
        </span>
        <span>
          <h1 className="text-5xl font-semibold" style={{ color: "#43A046" }}>
            business reinvent itself
          </h1>
        </span>
        <span className="my-4 text-lg font-light">
          <h6>We reached here with our hard work and dedication</h6>
        </span>
      </div>
      <div className="grid grid-cols-2">
        {AchievementsData.map((tile, key) => {
          return (
            <GoalTile
              key={key}
              icon={tile.icon}
              title=<CountUp end={tile.title} duration={2.75} />
              description={tile.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
