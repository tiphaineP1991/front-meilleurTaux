import React from "react";

const CardLine = ({ element, subtitle }) => {
  // We create a componant that passes 2 props the name of the subtitle and the element to display
  return (
    <div className="category">
      <div className="subtitle">{subtitle}</div>
      <div>{element}</div>
    </div>
  );
};

export default CardLine;
