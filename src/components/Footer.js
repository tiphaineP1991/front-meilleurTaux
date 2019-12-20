import React from "react";
import ProgressBar from "../components/ProgressBar";

const Footer = ({ percentage, backFunc, nextFunc, conditionValue }) => {
  return (
    <div className="navButtons">
      <button className="gobackButton">
        <p onClick={backFunc}>Précédent</p>
      </button>
      <ProgressBar percentage={percentage} />
      {{ conditionValue } ? (
        <button className="nextStepButton" onClick={nextFunc}>
          <p>Suivant</p>
        </button>
      ) : (
        <button className="nextStepButtonUnvalidate">
          <p>Suivant</p>
        </button>
      )}
    </div>
  );
};

export default Footer;
