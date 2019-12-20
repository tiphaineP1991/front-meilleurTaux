import React from "react";

const CardLine = ({ element, subtitle }) => {
  return (
    <div className="category">
      <div className="subtitle">{subtitle}</div>
      <div>{element}</div>
    </div>
  );
};

export default CardLine;
