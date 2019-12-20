import React from "react";
import Info from "../images/info.svg";

const QuestionInput = ({ question, value, func }) => {
  return (
    <div className="question">
      <p>{question}</p>
      <div className="reponse">
        <div className="icon">
          <img className="info" src={Info}></img>
        </div>
        <input type="number" value={value} onChange={func}></input>
      </div>
    </div>
  );
};

export default QuestionInput;
