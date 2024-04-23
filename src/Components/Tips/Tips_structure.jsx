import React from "react";

const Tips_structure = ({ image, title, description }) => {
  return (
    <div className="tips__element tip__element">
      <img src={image} alt="" />
      <span>
        <h2>{title}</h2>
        <p>{description}</p>
      </span>
    </div>
  );
};

export default Tips_structure;
