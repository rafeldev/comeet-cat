import React, { Component } from "react";

import DetailName from "../Components/organisms/DetailName";
import FormAsteroid from "../Components/FormAsteroid";

import "../static/sass/SassComponents/FormAsteroid.scss";

class Home extends Component {
  render() {
    return (
      <div className="details-container">
        <DetailName nameAsteroid="Nombre del asteroide" />
        <FormAsteroid />
      </div>
    );
  }
}

export default Home;
