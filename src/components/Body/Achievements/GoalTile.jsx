import React from "react";

const GoalTile = ({ icon, title, description }) => {
  return (
    <div className="flex items-center"style={{ color: "#4D4D4D"}}>
      <span className="bg-transparent m-4">
        <img className="h-14" src={icon} alt="#" />
      </span>
      <span>
        <h1 className="text-center font-bold text-4xl">{title}</h1>
        <p className="text-lg" style={{color:"#717171"}}>{description}</p>
      </span>
    </div>
  );
};

export default GoalTile;
