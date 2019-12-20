import React, { useState } from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";
import ProgressBar from "../components/ProgressBar";

const Situation = ({ setPage, setInputState, inputState }) => {
  const value1 = "locataire";
  const value2 = "propriétaire";
  const value3 = "bénéficiaire d'un logement de fonction";
  const value4 = "hébergé à titre gratuit";

  const handleChange = event => {
    Cookies.set("situation", event.target.value);
    setInputState({ ...inputState, situation: event.target.value });
    setPage("location");
  };

  return (
    <div className="page">
      <div className="title">
        <p className="pageTitle">votre situation actuelle</p>
        <div className="icon">
          <img className="info" src={Info}></img>
        </div>
      </div>
      <div className="lineButton">
        <RadioButton
          value={value1}
          isChecked={inputState.situation}
          handleChange={handleChange}
        />
        <RadioButton
          value={value2}
          isChecked={inputState.situation}
          handleChange={handleChange}
        />
        <RadioButton
          value={value3}
          isChecked={inputState.situation}
          handleChange={handleChange}
        />
        <RadioButton
          value={value4}
          isChecked={inputState.situation}
          handleChange={handleChange}
        />
      </div>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("use")}>Précédent</p>
        </button>
        <ProgressBar percentage={53} />
        {inputState.situation ? (
          <button
            className="nextStepButton"
            onClick={() => setPage("location")}
          >
            <p>Suivant</p>
          </button>
        ) : (
          <button className="nextStepButtonUnvalidate">
            <p>Suivant</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Situation;
