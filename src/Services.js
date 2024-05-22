import React from "react";
import { Link } from "react-router-dom";

class Services extends React.Component {
  render() {
    return (
      <div>
        <img src="./flux-bleu.png" className="flux-bleu" alt="flux-bleu"></img>
        <div className="title-real">
          <h1>MON OFFRE DE SERVICES</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir.</p>
          <hr className="separateur-real" />
          <br />
        </div>
        <div className="service">
          <div className="row">
            <div className="col-sm-4 shadow">
              <img
                src="./ux-design.png"
                className="uxdesign"
                alt="ux-design"
              ></img>
              <h5 className="title-serv">UX DESIGN</h5>
              <p>
                L'<strong>UX DESIGN</strong> est une méthode de conception
                centrée sur l'utilisateur.Son but est d'offrir une exprérience
                de navigation optimale a l'internaute
              </p>
            </div>
            <div className="col-sm-4 shadow">
              <img src="./devweb.png" className="devweb" alt="devweb"></img>
              <h5 className="title-serv">DÉVELOPPEMENT WEB</h5>
              <p>
                Le <strong>développement de sites web</strong> repose sur
                l'utilisationdes languages HTML, CSS, JavaScript et PHP.
              </p>
            </div>
            <div className="col-sm-4 shadow">
              <img
                src="./referencement.png"
                className="referencement"
                alt="referencement"
              ></img>
              <h5 className="title-serv">RÉFÉRENCEMENT</h5>
              <p>
                Le <strong>réferencement naturel d'un site</strong>, aussi
                appelé SEO, consiste à mettre des techniques en oeuvre pour
                améliorer sa position dans les résultats des moteurs de
                recherche.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
