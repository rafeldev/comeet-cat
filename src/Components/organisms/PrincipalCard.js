import React, { Component } from "react";
// import { Link } from "react-router-dom";

/* import CardImg from '../../img/heroImg.svg'; */

import IconCardContainer from "../molecules/IconsCardContainer";
import { ButtonPurpleSmall } from "../molecules/Buttons";

import { TiWarning, TiWarningOutline } from "react-icons/ti";

import "../../static/sass/SassComponents/PrincipalCard.scss";

class PrincipalCard extends Component {
  render() {
    return (
      <div className="Card__container">
        <img
          className="Card__img"
          src={this.props?.imagen?.url}
          alt="cardLogo"
        />

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
              // Preguntamos por la data para desplegarla o enviar mensaje de error.
              date={
                this.props.close_approach_data.close_approach_date ? (
                  this.props.close_approach_data.close_approach_date
                ) : (
                  <p>Sin fecha definida</p>
                )
              }
              //Preguntamos si tiene la data entonces reenderiza el parseInt y si no le asigna 0.
              orbit={
                this.props.orbital_data?.orbital_period
                  ? parseInt(this.props.orbital_data?.orbital_period, 0)
                  : 0
              }
              // Preguntamos si la data existe para desplegarla o pasar un mensaje de error. Convertimos el string a entero.
              proximity={parseInt(
                this.props.close_approach_data ? (
                  this.props.close_approach_data.miss_distance?.kilometers
                ) : (
                  <p>No hay distancia definida</p>
                )
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
            <a href={`/?detalle=${this.props._id}`}>
              <ButtonPurpleSmall title="Ver Detalles" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalCard;
