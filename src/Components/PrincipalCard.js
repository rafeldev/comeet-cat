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
    /* console.log(Array.isArray(this.props.close_approach_data)?this.props.close_approach_data[0] : null); */
    
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
                //con el metodo isArray basicamente lo que hace es validar que sea una array y como solo tiene una propiedad le decimos que la busque en la posicion [0] y luego le pasamos la propiedad :D 
                Array.isArray(this.props.close_approach_data)?this.props.close_approach_data[0].close_approach_date : null
              }
              //aca en orbit me di cuenta que en la tarjeta del centro me botaba NaN y lo que hice fue algo similar solo pregunte que si tiene la data entonces si reenderiza el parseInt y si no ps entonces ponle 0 :D 
              orbit={this.props.orbital_data?.orbital_period?parseInt(this.props.orbital_data?.orbital_period, 0): 0}
              
              //en proximidad a la tierra por que devuelve 0km? :ojos: 
              proximity={parseInt(
                this.props.close_approach_data?.miss_distance?.kilometers
              ), 0}
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
