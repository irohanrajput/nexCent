import React from "react";
import GoalTile from "./GoalTile";

const Achievements = () => {
  const AchievementsData = [
    {
      icon: "src/components/Body/Achievements/assets/Members.png",
      title: "2,245,341",
      description: "Members",
    },
    {
      icon: "src/components/Body/Achievements/assets/Clubs.png",
      title: "46,328",
      description: "Clubs",
    },
    {
      icon: "src/components/Body/Achievements/assets/EventBookings.png",
      title: "828,867",
      description: "Event Bookings",
    },
    {
      icon: "src/components/Body/Achievements/assets/Payments.png",
      title: "1,926,436",
      description: "Payments",
    },
  ]
  return (
    
      <div className="grid grid-cols-2 my-9 p-12"style={{ backgroundColor: "#F5F7FA" }}>
          <div className="flex flex-col justify-center  ml-28 p-8 h-full">
            <span>
              <h1
                className="text-5xl font-semibold"
                style={{ color: "#4D4D4D" }}
              >
                Helping a local
              </h1>
            </span>
            <span>
              <h1
                className="text-5xl font-semibold"
                style={{ color: "#43A046" }}
              >
                business reinvent itself
              </h1>
            </span>
            <span className="my-4 text-lg font-light">
              <h6>
                We reached here with our hard work and dedication
              </h6>
            </span>
          </div>
          <div className="grid grid-cols-2">
            {AchievementsData.map((tile, key) => {
              return (
                <GoalTile 
                key={key}
                icon={tile.icon}
                title={tile.title}
                description={tile.description}
                />
              )
            })
            }
          </div>
        </div>
          
  );
};

export default Achievements;
