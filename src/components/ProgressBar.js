import React from "react";
import Filler from "../components/Filler";

// The ProgressBar is a component filled with an other component Filler
// It send a percentage received in the footer to the filler
const ProgressBar = ({ percentage }) => {
  return (
    <div className="progressBar">
      <Filler percentage={percentage} />
    </div>
  );
};

export default ProgressBar;
