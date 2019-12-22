import React, { useState } from "react";
import Footer from "../components/Footer";
import QuestionInput from "../components/QuestionInput";

const Amount = ({ setPage, setInputState, inputState }) => {
  // We create 2 states, one for the first input estimated amount of the acquisition and one for the works
  const [estimated, setEstimated] = useState(inputState.amount.estimated);
  const [works, setWorks] = useState(inputState.amount.works);

  // We create a constant to calculate the notarialFees 1.8% if the value "state" = neuf o" 7.38% if it is "ancien"
  let notarialFees = 0;
  {
    inputState.state === "Neuf"
      ? (notarialFees = estimated * 0.018)
      : (notarialFees = estimated * 0.0738);
  }

  // We create a constant to calculate the total amount of the 3 inputs and transform all value in Number
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
