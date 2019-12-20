import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Url from "../Url";
import { Link } from "react-router-dom";

const Form = () => {
  const { id } = useParams();
  const [form, setForm] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(Url.url + "/form/" + id);
      setForm(response.data);
      setIsLoading(false);
    } catch (error) {
      alert("erreur", error.message);
    }
  };

  const deleteData = async () => {
    try {
      const response = await axios.post(Url.url + "/form/delete/" + id);
      if (response.data) {
        alert("le formulaire a bien été supprimé");
      } else {
        alert("vous etes dans le else");
      }
    } catch (error) {
      alert("erreur", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="page">
      {isLoading === true ? (
        <p>Chargement en cours</p>
      ) : (
        <div className="page">
          <Link to="/forms">
            <div className="goBack">
              <button className="goBackButton">Retour</button>
            </div>
          </Link>
          <div className="title">
            <p className="pageTitle">Détails formulaire </p>
          </div>
          <div className="card">
            <div>ID DE LA DEMANDE : {form._id}</div>
            <div className="formTitle">LE BIEN : </div>
            <div className="cardLine">
              <div className="category">
                <div className="subtitle">Type de bien</div>
                <div>{form.type} </div>
              </div>
              <div className="category">
                <div className="subtitle">Etat du bien</div>
                <div>{form.state} </div>
              </div>
              <div className="category">
                <div className="subtitle">Usage du bien</div>
                <div>{form.use} </div>
              </div>
            </div>
            <div className="formTitle">LE DEMANDEUR : </div>
            <div className="cardLine">
              <div className="category">
                <div className="subtitle">Situation du demandeur</div>
                <div>{form.situation} </div>
              </div>
              <div className="category">
                <div className="subtitle">Email</div>
                <div>{form.email} </div>
              </div>
            </div>
            <div className="formTitle">LOCALISATION : </div>
            <div className="cardLine">
              <div className="category">
                <div>{form.zipCode}</div>
              </div>
            </div>
            <div className="formTitle">MONTANT DE L'EMPRUNT : </div>
            <div className="cardLine">
              <div className="category">
                <div className="subtitle">ACQUISITION</div>
                <div>{form.amount.estimated} €</div>
              </div>
              <div className="category">
                <div className="subtitle">TRAVAUX</div>
                <div>{form.amount.works} €</div>
              </div>
              <div className="category">
                <div className="subtitle">FRAIS de NOTAIRE</div>
                <div>{form.amount.notarialFees} €</div>
              </div>
              <div className="category">
                <div className="subtitle">total</div>
                <div>{form.amount.total} €</div>
              </div>
            </div>
          </div>
          <div className="delete">
            <Link to="/forms">
              <span
                className="deleteButton"
                onClick={() => {
                  deleteData();
                }}
              >
                Supprimer ce formulaire
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Form;
