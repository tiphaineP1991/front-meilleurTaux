import React from "react";
import ProgressBar from "../components/ProgressBar";

const Footer = ({ percentage, backFunc, nextFunc }) => {
  return (
    <div className="navButtons">
      <button className="gobackButton">
        <p onClick={backFunc}>Précédent</p>
      </button>
      <ProgressBar percentage={percentage} />
      <button className="nextStepButton" onClick={nextFunc}>
        <p>Suivant</p>
      </button>
    </div>
  );
};

export default Footer;
