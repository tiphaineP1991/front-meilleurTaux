import React, { useState } from "react";
import Info from "../images/info.svg";
import Email from "../images/email.jpg";
import axios from "axios";
import Url from "../Url";
import Footer from "../components/Footer";
import Cookies from "js-cookie";

const Contact = ({ setPage, inputState, setInputState, setId }) => {
  // We create 2 states to set up the emailAdress and to check that the input type checkbox's value equal true
  const [email, setEmail] = useState("");
  const [isChecked, setIsCheck] = useState(inputState.notification);

  // We do an axios request to post all information in the global state and set the id with the response
  const fetchData = async () => {
    try {
      const response = await axios.post(Url.url + "/form/create", {
        ...inputState
      });
      setId(response.data._id);
    } catch (error) {
      alert("inscription non valide");
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
      <Footer
        percentage={93}
        backFunc={() => setPage("amount")}
        nextFunc={() => {
          if (isChecked === true && inputState.email) {
            setPage("end");
            fetchData();
            Cookies.remove("returnData");
          }
        }}
      />
    </div>
  );
};

export default Contact;
