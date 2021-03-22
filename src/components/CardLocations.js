import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const CardLocations = ({ src, title, button }) => {
  return (
    <div>
      <div className="about-location-card">
        <div>
          <img src={src} alt="" />
        </div>
        <div className="about-location-card-title">
          <h2>{title}</h2>
          <Link to={button} className="Link">
            <button>SEE LOCATION</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardLocations;
