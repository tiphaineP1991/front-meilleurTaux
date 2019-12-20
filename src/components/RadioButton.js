import React from "react";
import Cookies from "js-cookie";

const RadioButton = ({ handleChange, value, isChecked }) => {
  const cookieType = Cookies.get("type");
  const cookieState = Cookies.get("state");
  const cookieUse = Cookies.get("use");
  const cookieSituation = Cookies.get("situation");

  return (
    <label
      className={value !== isChecked ? "radioButton" : "radioButtonOrange"}
    >
      <input
        type="radio"
        value={value}
        checked={isChecked === value}
        onChange={handleChange}
      />
      {value}
    </label>
  );
};

export default RadioButton;
