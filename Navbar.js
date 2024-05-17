import React from "react";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/accueil" className="title-link">
          <h2>JOHN DOE</h2>
        </Link>
        <nav className="Navbar">
          <Link to="/accueil">ACCUEIL &nbsp;</Link>
          <Link to="/services">SERVICES &nbsp;</Link>
          <Link to="/realisation">RÉALISATIONS &nbsp;</Link>
          <Link to="/Blog">BLOG &nbsp;</Link>
          <Link to="/Me contacter">ME CONTACTER</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
