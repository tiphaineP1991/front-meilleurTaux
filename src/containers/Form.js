import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Url from "../Url";
import { Link } from "react-router-dom";
import cardLine from "../components/CardLine";
import CardLine from "../components/CardLine";
import form from "./Login";

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
          <Link to="/form">
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
              <CardLine element={form.type} subtitle={"Type de bien"} />
              <CardLine element={form.state} subtitle={"Etat du bien"} />
              <CardLine element={form.use} subtitle={"Usage du bien"} />
            </div>
            <div className="formTitle">LE DEMANDEUR : </div>
            <div className="cardLine">
              <CardLine
                element={form.situation}
                subtitle={"Situation du demandeur"}
              />
              <CardLine element={form.email} subtitle={"Email"} />
            </div>
            <div className="formTitle">LOCALISATION : </div>
            <div className="cardLine">
              <CardLine element={form.zipCode} />
            </div>
            <div className="formTitle">MONTANT DE L'EMPRUNT : </div>
            <div className="cardLine">
              <CardLine
                element={form.amount.estimated}
                subtitle={"ACQUISITION"}
              />
              <CardLine element={form.amount.works} subtitle={"TRAVAUX"} />
              <CardLine
                element={form.amount.notarialFees}
                subtitle={"FRAIS DE NOTAIRE"}
              />
              <CardLine element={form.amount.total} subtitle={"TOTAL"} />
            </div>
          </div>
          <div className="delete">
            <Link to="/form">
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
