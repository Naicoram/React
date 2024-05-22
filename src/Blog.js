import React from "react";
import { Link } from "react-router-dom";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <img src="./flux-bleu.png" className="flux-bleu" alt="flux-bleu"></img>
        <div className="title-real">
          <h1>BLOG</h1>
          <p>Retrouver ici quelques articles sur le développement web</p>
          <hr className="separateur-real" />
          <br />
        </div>
        <div className="realistaion">
          <div className="row">
            <div className="col-sm-4 shadow">
              <img src="./1.png" className="freshfood" alt="freshfood"></img>
              <h3 className="title-proj">Coder son site en HTLM/CSS</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className="btn-real">Lire la suite</a>
              <p>Publié le 22 août 2022</p>
            </div>
            <div className="col-sm-4 shadow">
              <img src="./2.png" className="akira" alt="akira"></img>
              <h3 className="title-proj">Vendre ses produits sur le web</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className="btn-real">Lire la suite</a>
              <p>Publié le 20 août 2022</p>
            </div>
            <div className="col-sm-4 shadow">
              <img src="./3.png" className="espace-be" alt="espace-be"></img>
              <h3 className="title-proj">Se potionner sur Google</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className="btn-real">Lire la suite</a>
              <p>Publié le 1 août 2022</p>
            </div>
            <div className="row">
              <div className="col-sm-4 shadow">
                <img src="./4.png" className="freshfood" alt="freshfood"></img>
                <h3 className="title-proj">Coder en responsive design</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn-real">Lire la suite</a>
                <p>Publié le 31 juillet 2022</p>
              </div>
              <div className="col-sm-4 shadow">
                <img src="./5.png" className="akira" alt="akira"></img>
                <h3 className="title-proj">Techniques de référencement</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn-real">Lire la suite</a>
                <p>Publié le 30 juillet 2022</p>
              </div>
              <div className="col-sm-4 shadow">
                <img src="./6.png" className="espace-be" alt="espace-be"></img>
                <h3 className="title-proj">Apprendre a coder</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn-real">Lire la suite</a>
                <p>Publié le 12 juillet 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
