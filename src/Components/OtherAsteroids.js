import React, { Component } from "react";
import PrincipalCard from "./organisms/PrincipalCard";

import "../static/sass/SassComponents/OtherAsteroid.scss";

class LastAsteroids extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  cardContainer = [
    {
      diametrosAprox: "Diametro aproximado",
      title: "nombre del asteroide",
      orbital: "orbita",
      proximity: "Proximidad",
    },
    {
      diametrosAprox: "Diametro aproximado",
      title: "nombre del asteroide",
      orbital: "orbita",
      proximity: "Proximidad",
    },
    {
      diametrosAprox: "Diametro aproximado",
      title: "nombre del asteroide",
      orbital: "orbita",
      proximity: "Proximidad",
    },
    {
      diametrosAprox: "Diametro aproximado",
      title: "nombre del asteroide",
      orbital: "orbita",
      proximity: "Proximidad",
    },
  ];

  render() {
    return (
      <div className="Card">
        <div className="Card__principal">
          {this.cardContainer.map((card, index) => (
            <PrincipalCard margin="0 16px 0 0" {...card} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default LastAsteroids;
