import React from "react";
import Cookies from "js-cookie";

const End = ({ setPage, id }) => {
  return (
    <div className="page">
      <div className="title">
        <p className="pageTitle">Et voilà, le formulaire est terminé !</p>
      </div>
      <div className="end">
        <p>Votre id est : {id}</p>
      </div>
      <div className="homeReturn">
        <button className="goBackButton">
          <p
            onClick={() => {
              setPage("home");
              Cookies.remove("returnPage");
            }}
          >
            Retour
          </p>
        </button>
      </div>
    </div>
  );
};

export default End;
