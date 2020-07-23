import React, { Component } from "react";

import "../../static/sass/SassComponents/EstaticInformation.scss";

class EstaticInformation extends Component {
  render() {
    return (
      <div className="container">
        <div className="container__info">
          <div className="container__1">
            <h5>250 Asteroides Apollo</h5>
            <p>Cruzan en la órbita de la tierra</p>
          </div>
          <div className="container__2">
            <h3>¡Entre 1.1 y 1.9 Millones!</h3>
            <p>Total asteroides</p>
          </div>
          <div className="container__1">
            <h5>entre 4,4 km y 9 km</h5>
            <p>Tamaño estimado del Asteroide mas grande</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EstaticInformation;
