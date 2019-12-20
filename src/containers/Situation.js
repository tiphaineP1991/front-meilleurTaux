import React from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";
import Footer from "../components/Footer";

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
