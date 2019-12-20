import React from "react";
import Filler from "../components/Filler";

const ProgressBar = props => {
  let percentage = props.percentage;
  return (
    <div className="progressBar">
      <Filler percentage={percentage} />
    </div>
  );
};

export default ProgressBar;
