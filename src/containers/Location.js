import React, { useState, useEffect } from "react";
import Info from "../images/info.svg";
import axios from "axios";

const Location = ({ setPage, setInputState, inputState }) => {
  const [codePostal, setCodePostal] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://vicopo.selfbuild.fr/cherche/" + codePostal
    );
    setAutoComplete(response.data.cities);
  };

  useEffect(() => {
    fetchData();
  }, [codePostal]);

  console.log(autoComplete);
  const tab = [];
  for (let i = 0; i < autoComplete.length; i++) {
    const key = autoComplete[i];
    let city = key.city;
    tab.push(city);
  }

  const dropdown = [];
  for (let i = 0; i < tab.length; i++) {
    dropdown.push(<option value={tab[i]}>{tab[i]}</option>);
  }

  return (
    <div className="page">
      <div className="title">
        <p className="pageTitle">Où se situe le bien à financer ?</p>
      </div>
      <div className="questions">
        <div className="question">
          <p>Dans quel pays se situe votre projet ?*</p>
          <div className="reponse">
            <div className="icon">
              <img className="info" src={Info}></img>
            </div>
            <select>
              <option value="France">France</option>
            </select>
          </div>
        </div>
        <div className="question">
          <p>Ville ou code postal *</p>
          <div className="reponse">
            <div className="icon">
              <img className="info" src={Info}></img>
            </div>
            <div className="zipCode">
              <input
                type="text"
                value={codePostal}
                placeholder="Entrez votre code postal"
                onChange={event => {
                  setCodePostal(event.target.value);
                  fetchData();
                }}
              ></input>
              <select
                value={codePostal}
                onChange={event => {
                  setCodePostal(event.target.value);
                }}
              >
                {dropdown}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("situation")}>Précédent</p>
        </button>
        <button
          className="nextStepButton"
          onClick={() => {
            setPage("amount");
            setInputState({ ...inputState, zipCode: codePostal });
          }}
        >
          <p>Suivant</p>
        </button>
      </div>
    </div>
  );
};

export default Location;
