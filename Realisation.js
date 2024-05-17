import React from "react";
import { Link } from "react-router-dom";

class Realisation extends React.Component {
  render() {
    return (
      <div>
        <img src="./flux-bleu.png" className="flux-bleu" alt="flux-bleu"></img>
        <div className="title-real">
          <h1>PORTFOLIO</h1>
          <p>Voici quelques-une des mes créations</p>
          <hr className="separateur-real" />
          <br />
          <div className="realistaion">
            <div className="row">
              <div className="col-sm-4 shadow-lg">
                <img
                  src="./freshfood-real.png"
                  className="freshfood"
                  alt="freshfood"
                ></img>
                <h3 className="title-proj">Fresh food</h3>
                <p>Réalisation d'un site avec commande en ligne.</p>
                <a className="btn-real">Voir</a>
                <p>Site réalisé avec PHP et MySQL</p>
              </div>
              <div className="col-sm-4 shadow-lg">
                <img src="./akira-real.png" className="akira" alt="akira"></img>
                <h3 className="title-proj">Restaurant Akira</h3>
                <p>Réalisation d'un site vitrine.</p>
                <a className="btn-real">Voir</a>
                <p>Site réalisé avec Wordpress</p>
              </div>
              <div className="col-sm-4 shadow-lg">
                <img
                  src="./espace-be-real.png"
                  className="espace-be"
                  alt="espace-be"
                ></img>
                <h3 className="title-proj">Espace bien-être</h3>
                <p>
                  Réalisation d'un site vitrine pour un practicien de bien-être.
                </p>
                <a className="btn-real">Voir</a>
                <p>Site réalisé en HTML/CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Realisation;
