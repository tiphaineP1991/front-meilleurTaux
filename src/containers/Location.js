import React, { useState, useEffect } from "react";
import Info from "../images/info.svg";
import axios from "axios";
import Footer from "../components/Footer";

const Location = ({ setPage, setInputState, inputState }) => {
  // We create a state zipCode which is set with the data of the global state, if empty, zipCode will be empty, if not, it will take the value you set
  const [zipCode, setzipCode] = useState(inputState.zipCode);
  // we create an empty tab to stock the values received with the API Vicopo
  const [autoComplete, setAutoComplete] = useState([]);

  // We create a function to get the values of the city or zipCode we write on the input
  // We use an API called Vicopo by using the axios.get and adding the value of the state zipCode
  const fetchData = async () => {
    const response = await axios.get(
      "https://vicopo.selfbuild.fr/cherche/" + zipCode
    );
    setAutoComplete(response.data.cities);
  };

  useEffect(() => {
    fetchData();
  }, [zipCode]);

  // We create an empty tab
  const tab = [];
  // We loop on autoComplete data to look for the correspondant value in the list
  for (let i = 0; i < autoComplete.length; i++) {
    const key = autoComplete[i];
    let code = key.code;
    let city = key.city;

    // We fill the empty tab with city found on the loop and it's zipCode
    tab.push(city + "-" + code);
  }

  // We create a select with the value of the tab
  const dropdown = [
    <option value={undefined}>Sélectionnez votre ville</option>
  ];
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
      <Footer
        percentage={72}
        backFunc={() => setPage("situation")}
        nextFunc={() => {
          if (zipCode !== "") {
            setPage("amount");
            setInputState({ ...inputState, zipCode: zipCode });
          }
        }}
      />
    </div>
  );
};

export default Location;
