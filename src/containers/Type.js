import React, { useState } from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";
import ProgressBar from "../components/ProgressBar";

const Type = ({ setPage, setInputState, inputState }) => {
  const value1 = "Maison";
  const value2 = "Appartement";

  const handleChange = event => {
    Cookies.set("type", event.target.value);
    setInputState({ ...inputState, type: event.target.value });
    setPage("state");
  };

  return (
    <div className="page">
      <div className="title">
        <p className="pageTitle">Type de bien</p>
        <div className="icon">
          <img className="info" src={Info}></img>
        </div>
      </div>
      <div className="lineButton">
        <RadioButton
          value={value1}
          handleChange={handleChange}
          isChecked={inputState.type}
        />
        <RadioButton
          value={value2}
          handleChange={handleChange}
          isChecked={inputState.type}
        />
      </div>
      <div className="navButtons">
        <ProgressBar percentage={12} />
        <button className="nextStepButton" onClick={() => setPage("state")}>
          <p>Suivant</p>
        </button>
      </div>
    </div>
  );
};

export default Type;
