import React from "react";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="fond-contact.jpg" className="fond-contact" />
        </div>
        <div className="title-contact">
          <h1>ME CONTACTER</h1>
          <p>
            Pour me contacter en vue d'un entretien ou d'une futur
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <hr className="separateur-real" />
          <br />
          <div>
            <div className="contact">
              <div className="row shadow-lg p-4">
                <div className="col-md-6">
                  <h3 className="text-start">Formulaire de contact</h3>
                  <hr />
                  <br />
                  <form className="formulaire">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Votre nom"
                      aria-label="default input example"
                    />
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Votre adresse email"
                      aria-label="default input example"
                    />
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Votre numéro de téléphone"
                      aria-label="default input example"
                    />
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Sujet"
                      aria-label="default input example"
                    />
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Votre message"
                      aria-label="default input example"
                    />
                    <p className="btn">Envoyer</p>
                  </form>
                </div>
                <div className="col-md-6">
                  <h3 className="text-start">Mes coordonnées</h3>
                  <hr />
                  <br />
                  <p className="text-start">
                    40 Rue Laure Diebold,69009 Lyon, France
                  </p>
                  <p className="text-start">06 20 30 40 50</p>
                  <img src="./map.png" className="map" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
