import React, { useState } from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";
import ProgressBar from "../components/ProgressBar";

const State = ({ setPage, setInputState, inputState }) => {
  const value1 = "Ancien";
  const value2 = "Neuf";
  const [isChecked, setIsChecked] = useState("");

  const handleChange = event => {
    setIsChecked(event.target.value);
    Cookies.set("state", event.target.value);
    setInputState({ ...inputState, state: event.target.value });
    setPage("use");
  };

  return (
    <div className="page">
      <div className="title">
        <p className="pageTitle">Etat du bien</p>
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
      </div>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("type")}>Précédent</p>
        </button>
        <ProgressBar percentage={24} />
        <button className="nextStepButton" onClick={() => setPage("use")}>
          <p>Suivant</p>
        </button>
      </div>
    </div>
  );
};

export default State;
