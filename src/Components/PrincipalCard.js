import React, { Component } from "react";
import { Link } from "react-router-dom";

import CardImg from "../img/heroImg.svg";
import IconCardContainer from "./IconsCardContainer";

import { ButtonPurpleSmall } from "./Buttons";
import { TiWarning, TiWarningOutline } from "react-icons/ti";

import "../static/sass/SassComponents/PrincipalCard.scss";

class PrincipalCard extends Component {
  render() {
    // Nos devuelve undefined. Tal vez porque el close_approach_data devuelve un Array.
    console.log(this.props.close_approach_data?.close_approach_date);
    return (
      <div className="Card__container">
        <img className="Card__img" src={CardImg} alt="cardLogo" />
        <div className="Card__text">
          {
            <p className="center">
              Diametro Estimado: <br />
              {this.props.estimated_diameter?.kilometers?.estimated_diameter_max.toFixed(
                2
              )}{" "}
              kms
            </p>
          }
          <hr />
          <p>Nombre del Asteroide:</p>
          <h2>
            {this.props.name} <br />
          </h2>
          {
            <IconCardContainer
              date={
                this.props.close_approach_data?.close_approach_date ? (
                  this.props.close_approach_data?.close_approach_date
                ) : (
                  <p>Sin data</p>
                )
              }
              orbit={parseInt(this.props.orbital_data?.orbital_period, 10)}
              proximity={parseInt(
                this.props.close_approach_data?.miss_distance?.kilometers
              )}
            />
          }
          <div className="Card__footer">
            <div className="Card__footer--icons">
              {this.props.is_potentially_hazardous_asteroid ? (
                <TiWarning size="40px" />
              ) : (
                <TiWarningOutline size="40px" />
              )}
            </div>
            <Link to="/Detail">
              <ButtonPurpleSmall title="Ver Detalles" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalCard;
