import React from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";
import Footer from "../components/Footer";

const Use = ({ setPage, setInputState, inputState }) => {
  // we set the 3 values for the radio button
  const value1 = "résidence principale";
  const value2 = "résidence secondaire";
  const value3 = "investissement locatif";

  // we create the function which is used in all page and set the inputState's key with the value chosen byt the user (between the radioButton)
  // we use this function when we choose a value. It also change the state page so we can directly go to the next page
  // we use the spread operator to create a copie of the object and fill it
  const handleChange = event => {
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
          isChecked={inputState.use}
          handleChange={handleChange}
        />
        <RadioButton
          value={value2}
          isChecked={inputState.use}
          handleChange={handleChange}
        />
        <RadioButton
          value={value3}
          isChecked={inputState.use}
          handleChange={handleChange}
        />
      </div>
      <Footer
        percentage={38}
        backFunc={() => setPage("state")}
        nextFunc={() => {
          if (inputState.use) {
            setPage("situation");
          }
        }}
      />
    </div>
  );
};

export default Use;
