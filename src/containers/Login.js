import React, { useState } from "react";
import { Link } from "react-router-dom";

// This page is accessible by clicking on the header button BackOffice.
// There is a password hosted directly in the front
// As so, it is not secure but is still do the job for this exercice

const Forms = () => {
  // we set a state for the password which will take the value of the input.
  // If this input === password, a button appears to go to the back office
  const [password, setPassword] = useState("");

  return (
    <div className="page">
      <div className="title">
        <p className="pageTitle">Entrez le mot de passe pour vous connecter</p>
      </div>
      <div className="connexion">
        <input
          className="passwordInput"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        ></input>
        {password === "tothemoon" ? (
          <Link to="/forms">
            <button className="buttonBack">Se connecter</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Forms;
