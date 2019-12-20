import React from "react";
import Filler from "../components/Filler";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progressBar">
      <Filler percentage={percentage} />
    </div>
  );
};

export default ProgressBar;
