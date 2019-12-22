import React from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";
import Footer from "../components/Footer";

const Situation = ({ setPage, setInputState, inputState }) => {
  // we set the 4 values for the radio button

  const value1 = "locataire";
  const value2 = "propriétaire";
  const value3 = "bénéficiaire d'un logement de fonction";
  const value4 = "hébergé à titre gratuit";

  // we create the function which is used in all page and set the inputState's key with the value chosen byt the user (between the radioButton)
  // we use this function when we choose a value. It also change the state page so we can directly go to the next page
  // we use the spread operator to create a copie of the object and fill it
  const handleChange = event => {
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
      <Footer
        percentage={53}
        backFunc={() => setPage("use")}
        nextFunc={() => {
          if (inputState.situation) {
            setPage("location");
          }
        }}
      />
    </div>
  );
};

export default Situation;
