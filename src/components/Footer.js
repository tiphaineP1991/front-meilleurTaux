import React from "react";
import ProgressBar from "../components/ProgressBar";

// The footer is the navigation.
// Composed with 2 buttons and a progress bar.
// First button is to go back with a function that set the state Page
// The second button is a button to go next with a function that setInput State and set Page
// The progressBar is a component which take one props a percentage
// The Footer is imported on every containers of "/" except end

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
