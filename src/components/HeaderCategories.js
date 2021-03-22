import React from "react";

const HeaderCategories = ({ headerNames }) => {
  return (
    <div>
      <div className="header-category" id={headerNames.src}>
        <div className="header-category-box">
          <h2>{headerNames.title}</h2>
          <p>{headerNames.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategories;
