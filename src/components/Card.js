import React from "react";
import icon from "../assets/home/icon.png";

const Card = ({ className }) => {
  return (
    <div>
      <div className={className}>
        <div className="h-card">
          <h3>{className}</h3>
          <h5>
            VIEW PROJECTS <span>></span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
