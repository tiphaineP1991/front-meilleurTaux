import React from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";
import Footer from "../components/Footer";

const Type = ({ setPage, setInputState, inputState }) => {
  // we set the 2 values for the radio button
  const value1 = "Maison";
  const value2 = "Appartement";

  // we create the function which is used in all page and set the inputState's key with the value chosen byt the user (between the radioButton)
  // we use this function when we choose a value. It also change the state page so we can directly go to the next page
  // we use the spread operator to create a copie of the object and fill it
  const handleChange = event => {
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
      <Footer
        percentage={12}
        nextFunc={() => {
          if (inputState.type) {
            setPage("state");
          }
        }}
      />
    </div>
  );
};

export default Type;
