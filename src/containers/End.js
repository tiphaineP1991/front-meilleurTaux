import React from "react";
import axios from "axios";

const End = ({ setPage, id }) => {
  return (
    <div className="page">
      <div className="title">
        <p className="pageTitle">Et voilà, le formulaire est terminé !</p>
      </div>
      <div>
        <p>Votre id est : {id}</p>
      </div>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("contact")}>Précédent</p>
        </button>
      </div>
    </div>
  );
};

export default End;
