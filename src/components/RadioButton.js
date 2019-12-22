import React from "react";

// The radioButton is a component used in the container Type, Use, State and Situation.
// We give 3 props to the component : the function handleChange, the value and the isChecked
// If you have already answer the question but go back, isChecked will have a value and the button will be orange, if you first arrive on the page, there is nothing in the cookie and all buttons are white.

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
