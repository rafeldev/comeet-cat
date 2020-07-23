import React, { Component } from "react";

import TitlesInfo from "../organisms/TitlesInfo";
import PrincipalCard from "../organisms/PrincipalCard";

import "../../static/sass/SassComponents/LastAsteroid.scss";

class LastAsteroids extends Component {
  render() {
    return (
      <div className="Card">
        <div className="Container__title">
          <TitlesInfo
            to="/Astroides-Apollo"
            title="Asteroides Apollo"
            description="Asteroides que cruzan con la órbita de la tierra y son potencialmente peligrosos. "
          />
        </div>
        <div className="Card__principal">
          <PrincipalCard
            diametrosAprox="Diametros aproximados"
            title="Nombrel del Asteroide"
            orbital="Ultimo avistamiento"
            proximity="Proximidad a la tierra"
            margin="0 16px 0 0"
          />
          <PrincipalCard
            diametrosAprox="Diametros aproximados"
            title="Nombrel del Asteroide"
            orbital="Ultimo avistamiento"
            proximity="Proximidad a la tierra"
            margin="0 16px 0 0"
          />
          <PrincipalCard
            diametrosAprox="Diametros aproximados"
            title="Nombrel del Asteroide"
            orbital="Ultimo avistamiento"
            proximity="Proximidad a la tierra"
            margin="0 16px 0 0"
          />
        </div>
      </div>
    );
  }
}

export default LastAsteroids;
