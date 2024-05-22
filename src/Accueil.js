import React from "react";
import { Link } from "react-router-dom";

class Accueil extends React.Component {
  render() {
    return (
      <div>
        <img
          src="./developpeur-web banner.webp"
          className="img-dev"
          alt="Bannière developpeur web"
        ></img>
        <div className="Title">
          <h1>Bonjour, je suis John Doe</h1>
          <h3>Développeur web full stack</h3>
          <div className="button">
            <a href="#propos" id="savoir-plus">
              En savoir plus
            </a>
          </div>
        </div>
        <div className="cv">
          <div className="row shadow-lg p-4">
            <div className="col-md-6">
              <h3 className="text-left" id="propos">
                A propos
              </h3>
              <hr />
              <br />
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation d'
                <strong>intégrateur-développeur web</strong> au CEF. Au cours de
                cette formation, j'ai pu acquérir des bases solides pour
                travailler dans le domaine du <strong>développement web</strong>
                .
                <br /> <br />
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consolider ma formation de
                <strong> développeur web full stack</strong>
                . <br />
                <br />
                J'accorde une attention particulière à la qualité du code que
                j'écris et je respecte les bonnes pratiques du web.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="./accueil-man.png"
                className="accueil-man"
                alt="photo d'homme devant un pc"
              ></img>
              <div class="container">
                <h3 className="text-left">Mes compétences</h3>
                <p>HTML5 90%</p>
                <div class="progress mb-3">
                  <div
                    class="progress-bar w-90 bg-danger"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>CSS3 80%</p>
                <div class="progress mb-3">
                  <div
                    class="progress-bar w-80 bg-info"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>JAVASCRIPT 70%</p>
                <div class="progress mb-3">
                  <div
                    class="progress-bar w-70 bg-warning"
                    role="progressbar bg-danger"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                PHP 60%
                <div class="progress mb-3">
                  <div
                    class="progress-bar w-60 bg-success"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                REACT 50%
                <div class="progress">
                  <div
                    class="progress-bar w-50"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil;
