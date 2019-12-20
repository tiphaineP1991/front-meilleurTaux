import React from "react";
import RadioButton from "../components/RadioButton";
import Info from "../images/info.svg";
import Cookies from "js-cookie";
import Footer from "../components/Footer";

const Use = ({ setPage, setInputState, inputState }) => {
  const value1 = "résidence principale";
  const value2 = "résidence secondaire";
  const value3 = "investissement locatif";

  const handleChange = event => {
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
