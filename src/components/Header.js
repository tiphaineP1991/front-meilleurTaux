import React from "react";
import Logo from "../images/logo-mtx.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="headerWrapper">
        <Link to="/">
          <div className="logoSection">
            <img className="logo" alt="logo" src={Logo}></img>
            <h2>Crédit immobilier : 5 mn pour obtenir le meilleur taux</h2>
          </div>
        </Link>
        <Link to="/login">
          <button className="buttonBack">BackOffice</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
