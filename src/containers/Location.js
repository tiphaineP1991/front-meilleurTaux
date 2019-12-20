import React, { useState, useEffect } from "react";
import Info from "../images/info.svg";
import axios from "axios";
import ProgressBar from "../components/ProgressBar";

const Location = ({ setPage, setInputState, inputState }) => {
  const [zipCode, setzipCode] = useState(inputState.zipCode);
  const [autoComplete, setAutoComplete] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://vicopo.selfbuild.fr/cherche/" + zipCode
    );
    setAutoComplete(response.data.cities);
  };

  useEffect(() => {
    fetchData();
  }, [zipCode]);

  console.log(autoComplete);
  const tab = [];
  for (let i = 0; i < autoComplete.length; i++) {
    const key = autoComplete[i];
    let city = key.city;
    tab.push(city);
  }

  const dropdown = [<option value={undefined}>{undefined}</option>];
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
                value={zipCode}
                placeholder="Entrez votre code postal"
                onChange={event => {
                  setzipCode(event.target.value);
                  fetchData();
                }}
              ></input>
              {zipCode ? (
                <select
                  className="select"
                  value={zipCode}
                  onChange={event => {
                    setzipCode(event.target.value);
                  }}
                >
                  {dropdown}
                </select>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("situation")}>Précédent</p>
        </button>
        <ProgressBar percentage={72} />
        {zipCode ? (
          <button
            className="nextStepButton"
            onClick={() => {
              setPage("amount");
              setInputState({ ...inputState, zipCode: zipCode });
            }}
          >
            <p>Suivant</p>
          </button>
        ) : (
          <button className="nextStepButtonUnvalidate">
            <p>Suivant</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Location;
