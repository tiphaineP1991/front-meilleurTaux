import React, { useState } from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";
import ProgressBar from "../components/ProgressBar";

const Use = ({ setPage, setInputState, inputState }) => {
  const value1 = "résidence principale";
  const value2 = "résidence secondaire";
  const value3 = "investissement locatif";
  const [isChecked, setIsChecked] = useState("");

  const handleChange = event => {
    setIsChecked(event.target.value);
    Cookies.set("use", event.target.value);
    setInputState({ ...inputState, use: event.target.value });
    setPage("situation");
  };

  return (
    <div className="page">
      <div className="title">
        <p className="pageTitle">Usage du bien</p>
        <div className="icon">
          <img className="info" src={Info}></img>
        </div>
      </div>
      <div className="lineButton">
        <RadioButton
          value={value1}
          isChecked={isChecked}
          handleChange={handleChange}
        />
        <RadioButton
          value={value2}
          isChecked={isChecked}
          handleChange={handleChange}
        />
        <RadioButton
          value={value3}
          isChecked={isChecked}
          handleChange={handleChange}
        />
      </div>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("state")}>Précédent</p>
        </button>
        <ProgressBar percentage={36} />
        <button className="nextStepButton" onClick={() => setPage("situation")}>
          <p>Suivant</p>
        </button>
      </div>
    </div>
  );
};

export default Use;
