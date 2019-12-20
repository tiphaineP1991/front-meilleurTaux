import React, { useState } from "react";
import Info from "../images/info.svg";
import Email from "../images/email.jpg";
import axios from "axios";
import Url from "../Url";
import ProgressBar from "../components/ProgressBar";
import Cookies from "js-cookie";

const Contact = ({ setPage, inputState, setInputState, setId }) => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsCheck] = useState(inputState.notification);

  const fetchData = async () => {
    try {
      const response = await axios.post(Url.url + "/form/create", {
        ...inputState
      });
      setId(response.data._id);
    } catch (error) {
      alert("inscription non valide");
      console.log("erreur ======>", error.message);
    }
  };

  return (
    <div className="page">
      <div className="title">
        <p className="pageTitle">Vos coordonnées</p>
      </div>
      <div className="emailSection">
        <div className="orangeCard">
          Un devis vous sera envoyé par mail avec un récapitulatif de votre
          demande.
        </div>
        <img src={Email} className="imgComputer"></img>
      </div>
      <div className="questions">
        <div className="question">
          <p>Adresse email emprunteur *</p>
          <div className="reponse">
            <div className="icon">
              <img className="info" src={Info}></img>
            </div>
            <input
              type="text"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
                setInputState({ ...inputState, email: event.target.value });
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="conditions">
        <input
          require="true"
          type="checkbox"
          value={isChecked}
          onChange={event => {
            setIsCheck(event.target.checked);
            setInputState({
              ...inputState,
              notification: event.target.checked
            });
          }}
        ></input>
        <label className="notification">
          J'accepte de recevoir par email des propositions de MeilleurTaux.com *
        </label>
      </div>
      <div className="navButtons">
        <button className="gobackButton">
          <p onClick={() => setPage("amount")}>Précédent</p>
        </button>
        <ProgressBar percentage={93} />
        {isChecked === true && inputState.email ? (
          <button
            className="nextStepButton"
            onClick={() => {
              setPage("end");
              fetchData();
              Cookies.remove("returnData");
            }}
          >
            <p>Valider</p>
          </button>
        ) : (
          <button className="nextStepButtonUnvalidate">
            <p>Valider</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Contact;
