import React, { Component } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FeaturedContainer from "./containers/FeaturedContainer";
import ColaboratorContainer from "./containers/ColaboratorsContainer";
import CallToAction from "./containers/CallToAction";
import DetailsContainer from "./containers/DetailsContainer";

import "../index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="h2-prueba">Header Container</h2>
        <Header />
        <hr />
        <h2 className="h2-prueba">Featured Container</h2>
        <FeaturedContainer />
        <hr />
        <h2 className="h2-prueba">Colaborators Container & Card</h2>
        <ColaboratorContainer />
        <hr />
        <h2 className="h2-prueba">Call to Action</h2>
        <CallToAction />
        <hr />
        <h2 className="h2-prueba">Details Container & Info</h2>
        <DetailsContainer />
        <hr />
        <h2 className="h2-prueba">Footer</h2>
        <Footer />
        <hr />
      </div>
    );
  }
}

export default Home;
