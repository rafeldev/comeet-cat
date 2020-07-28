import React, { Component } from "react";

import { ButtonPrimaryMedium } from "../molecules/Buttons";
import Share from "../molecules/Share";
import { TiWarning, TiWarningOutline } from "react-icons/ti";

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
        <div className="hazardous-container">
          {this.props.is_potentially_hazardous_asteroid ? (
            <TiWarning size="80px" />
          ) : (
            <TiWarningOutline size="80px" />
          )}
        </div>
        <h3>Datos:</h3>
        <ul>
          <li>
            <GiRingedPlanet className="details-icon" size="1.2em" />
            Diametro Estimado:
            <br />
            <h3>
              {this.props.estimated_diameter?.kilometers?.estimated_diameter_max.toFixed(
                2
              )}{" "}
              kms
            </h3>
          </li>

          <li>
            <GiOrbit className="details-icon" size="1.2em" />
            Periodo Orbital: <br />
            <h3>
              {this.props.orbital_data?.orbital_period
                ? parseInt(this.props.orbital_data?.orbital_period, 0)
                : 0}{" "}
              días{" "}
            </h3>
          </li>

          <li>
            <GiThunderball className="details-icon" size="1.2em" />
            Más cercano a la tierra el:
            <br />
            <h3>
              {" "}
              {this.props.close_approach_data.close_approach_date ? (
                this.props.close_approach_data.close_approach_date
              ) : (
                <p>Sin fecha definida</p>
              )}
            </h3>
          </li>

          <li>
            <GiOrbital className="details-icon" size="1.2em" />
            Proximidad a la tierra: <br />
            <h3>
              {parseInt(
                this.props.close_approach_data ? (
                  this.props.close_approach_data.miss_distance?.kilometers
                ) : (
                  <p>No hay distancia definida</p>
                )
              )}{" "}
              kms{" "}
            </h3>
          </li>
        </ul>
        <ButtonPrimaryMedium
          to="/nombrar-asteroide"
          title="Nombra este asteroide"
        ></ButtonPrimaryMedium>
        <Share />
      </div>
    );
  }
}

export default DetailInfo;
