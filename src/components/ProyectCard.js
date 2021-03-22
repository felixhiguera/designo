import React from "react";

const ProyectCard = ({ card }) => {
  const { src, name, content } = card;
  return (
    <div>
      <div className="proyect-card">
        <div className="proyect-card-img">
          <img src={src} alt="" />
        </div>
        <div className="proyect-card-text">
          <h3>{name}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
