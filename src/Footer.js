import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div>
            <h5>John Doe</h5>
            <p>
              40 Rue Laure Diebold <br />
              69009 Lyon, France
              <br />
              Téléphone: 06 20 30 40 50
            </p>
            <div className="logo-footer">
              <img src="./github.png" />
              <img src="./twitter.png" />
              <img src="./linkedin.png" />
            </div>
          </div>
          <div>
            <h5>Lien utiles</h5>
            <ul>
              <li>
                <Link to="/accueil">Accueil</Link>
              </li>
              <li>
                <Link to="/accueil">A propos</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Me contacter</Link>
              </li>
              <li>
                <Link to="/mentions">Mentions légales</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Mes dernières réalisations</h5>
            <ul>
              <li>Fresh food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
            </ul>
          </div>
          <div>
            <h5>Mes derniers articles</h5>
            <ul>
              <li>Coder son site en HTLM/CSS</li>
              <li>Vendre ses produits sur le web</li>
              <li>Se positionner sur Google</li>
            </ul>
          </div>
        </div>
        <div className="John-footer">
          <h5>Design by John Doe</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
