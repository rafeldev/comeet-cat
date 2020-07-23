import React, { Component } from "react";

import { ButtonPrimaryMedium } from "../molecules/Buttons";
import Share from "../molecules/Share";
import Hazardous from "../molecules/Hazardous";

import "../../static/sass/SassComponents/AsteroidDetail.scss";
import {
  GiRingedPlanet,
  GiThunderball,
  GiOrbit,
  GiOrbital,
} from "react-icons/gi";

class DetailInfo extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div className="detail-info__container">
        <Hazardous />
        <h3>Datos:</h3>
        <ul>
          <li>
            <GiRingedPlanet className="details-icon" size="1.2em" />
            Diametro:
          </li>
          <li>
            <GiThunderball className="details-icon" size="1.2em" />
            Velocidad Relativa:
          </li>
          <li>
            <GiOrbit className="details-icon" size="1.2em" />
            Periodo Orbital:
          </li>
          <li>
            <GiOrbital className="details-icon" size="1.2em" />
            Tipo de Orbita:
          </li>
        </ul>
        <ButtonPrimaryMedium
          to="/Namin-Asteroid"
          title="Nombra tu asteroide"
        ></ButtonPrimaryMedium>
        <Share />
      </div>
    );
  }
}

export default DetailInfo;
