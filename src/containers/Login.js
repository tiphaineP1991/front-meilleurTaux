import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forms = () => {
  const [password, setPassword] = useState("");

  return (
    <div>
      <p>Entrer le mot de passe pour vous connecter</p>
      <input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      ></input>
      {password === "tothemoon" ? (
        <Link to="/forms">
          <button className="connexion">Se connecter</button>
        </Link>
      ) : null}
    </div>
  );
};

export default Forms;
