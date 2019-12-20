import React, { useState } from "react";
import Info from "../images/info.svg";
import ProgressBar from "../components/ProgressBar";

const Amount = ({ setPage, setInputState, inputState }) => {
  const [estimated, setEstimated] = useState(inputState.amount.estimated);
  const [works, setWorks] = useState(inputState.amount.works);

  let notarialFees = 0;
  {
    inputState.state === "Neuf"
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
                setWorks(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="question">
          <p>Frais de notaires *</p>
          <div className="reponse">
            <div className="icon">
              <img className="info" src={Info}></img>
            </div>
            <input type="number" value={notarialFees} readOnly></input>
          </div>
        </div>
        <div className="question">
          <p>total *</p>
          <div className="reponse">
            <div className="icon">
              <img className="info" src={Info}></img>
            </div>
            <input type="number" value={total} readOnly></input>
          </div>
        </div>
      </div>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("location")}>Précédent</p>
        </button>
        <ProgressBar percentage={89} />
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
