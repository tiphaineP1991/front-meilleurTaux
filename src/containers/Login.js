import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forms = () => {
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
