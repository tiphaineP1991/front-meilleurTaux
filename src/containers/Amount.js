import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import QuestionInput from "../components/QuestionInput";

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
        <QuestionInput
          question={"Montant estimé de votre acquisition *"}
          value={estimated}
          func={event => {
            setEstimated(event.target.value);
          }}
        />
        <QuestionInput
          question={"Montant estimé de vos travaux "}
          value={works}
          func={event => {
            setWorks(event.target.value);
          }}
        />
        <QuestionInput
          question={"Frais de notaire *"}
          value={notarialFees.toFixed(2)}
          func={null}
        />
        <QuestionInput
          question={"Total *"}
          value={total.toFixed(2)}
          func={null}
        />
      </div>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("location")}>Précédent</p>
        </button>
        <ProgressBar percentage={89} />
        {estimated > 0 ? (
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
        ) : (
          <button className="nextStepButtonUnvalidate">
            <p>Suivant</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Amount;
