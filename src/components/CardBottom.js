import React from "react";

const CardBottom = ({ image, title, paragraph }) => {
  return (
    <div>
      <div className="card-bottom">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default CardBottom;
