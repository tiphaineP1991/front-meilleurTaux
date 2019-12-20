import React, { useState } from "react";
import Footer from "../components/Footer";
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
          value={notarialFees.toFixed(0)}
          func={null}
        />
        <QuestionInput
          question={"Total *"}
          value={total.toFixed(0)}
          func={null}
        />
      </div>
      <Footer
        percentage={89}
        backFunc={() => setPage("location")}
        nextFunc={() => {
          if (estimated > 0) {
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
          }
        }}
      />
    </div>
  );
};

export default Amount;
