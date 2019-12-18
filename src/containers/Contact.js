import React from "react";

const Contact = ({ setPage }) => {
  return (
    <div className="page">
      <p>bienvenue sur la page contact</p>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("amount")}>Précédent</p>
        </button>
        <button className="nextStepButton" onClick={() => setPage("end")}>
          <p>Suivant</p>
        </button>
      </div>
    </div>
  );
};

export default Contact;
