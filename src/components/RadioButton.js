import React from "react";

const RadioButton = ({ handleChange, value, isChecked }) => {
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
