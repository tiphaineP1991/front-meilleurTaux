import React, { useState, useEffect } from "react";
import axios from "axios";
import Url from "../Url";
import { Link } from "react-router-dom";

const BackOffice = () => {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(Url.url + "/forms");
      console.log(response.data.forms);
      setForms(response.data.forms);
      setIsLoading(false);
    } catch (error) {
      alert("erreur", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [forms]);

  return (
    <div className="page">
      {isLoading === true ? (
        <p>Chargement en cours</p>
      ) : (
        <div>
          <div className="title">
            <p className="pageTitle">liste des formulaires reçus</p>
          </div>
          <div>
            <div className="table">
              <div className="lineHeader">
                <div className="elem">Ville</div>
                <div className="elem">Email</div>
                <div className="elem">Type de bien</div>
                <div className="elem">Etat du bien </div>
                <div className="elem">Montant total</div>
              </div>
              {forms.map((elem, index) => {
                return (
                  <Link to={"/form/" + elem._id}>
                    <div key={index} className="line">
                      <div className="elem">{elem.zipCode}</div>
                      <div className="elem">{elem.email}</div>
                      <div className="elem">{elem.type}</div>
                      <div className="elem">{elem.state}</div>
                      <div className="elem">{elem.amount.total} €</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackOffice;
