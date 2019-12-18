import React from "react";
import Logo from "../images/logo-mtx.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="headerWrapper">
        <img className="logo" alt="logo" src={Logo}></img>
        <h2>Crédit immobilier : 5 mn pour obtenir le meilleur taux</h2>
      </div>
    </header>
  );
};

export default Header;
