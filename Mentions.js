import React from "react";
import { Link } from "react-router-dom";

class Mention extends React.Component {
  render() {
    return (
      <div>
        <div className="title-contact">
          <h1>MENTIONS LÉGALES</h1>
          <hr className="separateur-real" />
          <br />
        </div>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Éditeur du site
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>40 Rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>06 20 30 40 50</p>
                <p>john.doe@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Hébergeur
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <h6>Always Data</h6>
                <p>91 rue du Faubourg Saint Honoré</p>
                <p>75008 Paris</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Crédits
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <h6>Crédits</h6>
                <p>Site développé par John Doe, étudiant du CEF.</p>
                <p>Les images libres de droit sont issues du site Pixabay.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mention;
