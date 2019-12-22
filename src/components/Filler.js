import React from "react";

// The filler is a component used in the ProgressBar.
// It receive a perentage sent by the Progress Bar

const Filler = props => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default Filler;
