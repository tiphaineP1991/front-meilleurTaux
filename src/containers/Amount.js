import React, { useState } from "react";
import Info from "../images/info.svg";

const Amount = ({ setPage, setInputState, inputState, initialState }) => {
  const [estimated, setEstimated] = useState(0);
  const [works, setWork] = useState(0);

  let notarialFees = 0;
  {
    initialState.state === "Neuf"
      ? (notarialFees = estimated * 0.018)
      : (notarialFees = estimated * 0.0738);
  }

  let total = Number(estimated) + Number(works) + notarialFees;

  return (
    <div className="page">
      <div className="title">
        <p className="pageTitle">Où se situe le bien à financer ?</p>
      </div>
      <div className="questions">
        <div className="question">
          <p>Montant estimé de votre acquisition *</p>
          <div className="reponse">
            <div className="icon">
              <img className="info" src={Info}></img>
            </div>
            <input
              type="number"
              value={estimated}
              onChange={event => {
                setEstimated(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="question">
          <p>Montant estimé de vos travaux *</p>
          <div className="reponse">
            <div className="icon">
              <img className="info" src={Info}></img>
            </div>
            <input
              type="number"
              value={works}
              onChange={event => {
                setWork(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="question">
          <p>Fais de notaires *</p>
          <div className="reponse">
            <div className="icon">
              <img className="info" src={Info}></img>
            </div>
            <input type="number" value={notarialFees}></input>
          </div>
        </div>
        <div className="question">
          <p>total *</p>
          <div className="reponse">
            <div className="icon">
              <img className="info" src={Info}></img>
            </div>
            <input type="number" value={total}></input>
          </div>
        </div>
      </div>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("location")}>Précédent</p>
        </button>
        <button
          className="nextStepButton"
          onClick={() => {
            setPage("contact");
            setInputState({
              ...inputState,
              amount: {
                estimated: estimated,
                works: works,
                notarialFees: notarialFees,
                total: total
              }
            });
          }}
        >
          <p>Suivant</p>
        </button>
      </div>
    </div>
  );
};

export default Amount;
