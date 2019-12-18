import React from "react";

const End = ({ setPage }) => {
  return (
    <div className="page">
      <p>bienvenue sur la page end</p>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("contact")}>Précédent</p>
        </button>
      </div>
    </div>
  );
};

export default End;
