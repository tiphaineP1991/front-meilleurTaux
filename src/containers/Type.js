import React, { useState } from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";

const Type = ({ setPage, setInputState, inputState }) => {
  const value1 = "Maison";
  const value2 = "Appartement";
  const [isChecked, setIsChecked] = useState("");

  const handleChange = event => {
    setIsChecked(event.target.value);
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
          isChecked={isChecked}
        />
        <RadioButton
          value={value2}
          handleChange={handleChange}
          isChecked={isChecked}
        />
      </div>
      <div className="navButtons">
        <button className="nextStepButton" onClick={() => setPage("state")}>
          <p>Suivant</p>
        </button>
      </div>
    </div>
  );
};

export default Type;
