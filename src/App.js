import React from "react";
import Navbar from "./Navbar.js";
import { Route, Routes } from "react-router-dom";
import Realisation from "./Realisation.js";
import Accueil from "./Accueil.js";
import Services from "./Services.js";
import Contact from "./Contact.js";
import Blog from "./Blog.js";
import Footer from "./Footer.js";
import Mention from "./Mentions.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/realisation" element={<Realisation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mentions" element={<Mention />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
