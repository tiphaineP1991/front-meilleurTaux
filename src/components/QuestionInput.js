import React from "react";
import Info from "../images/info.svg";

// The question input is a component used in the page amount
// Composed with a question and an anwer with an input
// It received props with question, value and func

const QuestionInput = ({ question, value, func }) => {
  return (
    <div className="question">
      <p>{question}</p>
      <div className="reponse">
        <div className="icon" alt="iconInfo">
          <img className="info" src={Info}></img>
        </div>
        <input type="number" value={value} onChange={func}></input>
      </div>
    </div>
  );
};

export default QuestionInput;
