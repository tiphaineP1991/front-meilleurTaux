import React from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";
import Footer from "../components/Footer";

const State = ({ setPage, setInputState, inputState }) => {
  // we set the 2 values for the radio button
  const value1 = "Ancien";
  const value2 = "Neuf";

  // we create the function which is used in all page and set the inputState's key with the value chosen byt the user (between the radioButton)
  // we use this function when we choose a value. It also change the state page so we can directly go to the next page
  // we use the spread operator to create a copie of the object and fill it
  const handleChange = event => {
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
          isChecked={inputState.state}
          handleChange={handleChange}
        />
        <RadioButton
          value={value2}
          isChecked={inputState.state}
          handleChange={handleChange}
        />
      </div>
      <Footer
        percentage={25}
        backFunc={() => setPage("type")}
        nextFunc={() => {
          if (inputState.state) {
            setPage("use");
          }
        }}
      />
    </div>
  );
};

export default State;
