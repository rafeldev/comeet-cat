import React, { Component, Fragment } from "react";

import diametro from "../../img/diametro.png";
import distancia from "../../img/distancia.png";
import orbita from "../../img/orbita.png";

import "../../static/sass/SassComponents/DataTransformContainer.scss";

class DetailsTransform extends Component {
  render() {
    return (
      <Fragment>
        <div className="Data__container">
          <div className="Data__text">
            <span>¿Qué tan grande es?</span>
            <h1>
              {(
                (parseFloat(
                  this.props.estimated_diameter?.kilometers
                    ?.estimated_diameter_max
                ) *
                  1000) /
                56
              ).toFixed(2)}{" "}
              veces
            </h1>
            <h3>Más grande que un transbordador de 56 metros.</h3>
            <p>
              El diametro es de:{" "}
              {(this.props.estimated_diameter?.kilometers?.estimated_diameter_max).toFixed(
                2
              )}{" "}
              kms
            </p>
          </div>
          <img src={diametro} alt="Illustaración de Comparación" />
        </div>

        <div className="Data__container--Reverse">
          <div className="Data__text">
            <span>¿Cuánto tarda en dar una vuelta al sol?</span>
            <h1>
              {this.props.orbital_data?.orbital_period
                ? (
                    parseInt(this.props.orbital_data?.orbital_period) / 365
                  ).toFixed(2)
                : 0}{" "}
              veces más que la tierra.
            </h1>
            <h3>El periodo orbital de la tierra es de 365 días.</h3>
            <p>
              La orbita del asteroide es de:{" "}
              {this.props.orbital_data?.orbital_period
                ? parseInt(this.props.orbital_data?.orbital_period, 0)
                : 0}{" "}
              días
            </p>
          </div>
          <img src={orbita} alt="Illustaración de Comparación" />
        </div>

        <div className="Data__container">
          <div className="Data__text">
            <span>¿Qué tan cerca de la tierra está?</span>
            <h1>
              {parseInt(
                this.props.close_approach_data ? (
                  (
                    (parseFloat(
                      this.props.close_approach_data.miss_distance?.kilometers
                    ) *
                      1000) /
                    384400000
                  ).toFixed(2)
                ) : (
                  <p>No hay distancia definida</p>
                )
              )}{" "}
              veces más lejos que la luna.
            </h1>
            <h3>La distancia de la tierra a la luna es de 384,400 kms.</h3>
            <p>
              La distancia del asteroide a la tierra es de:{" "}
              {parseInt(
                this.props.close_approach_data ? (
                  this.props.close_approach_data.miss_distance?.kilometers
                ) : (
                  <p>No hay distancia definida</p>
                )
              )}{" "}
              kms
            </p>
          </div>
          <img src={distancia} alt="Illustaración de Comparación" />
        </div>
      </Fragment>
    );
  }
}

export default DetailsTransform;
