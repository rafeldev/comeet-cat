import React, { Component } from "react";
import { Link } from "react-router-dom";

import CardImg from "../img/heroImg.svg";
import IconCardContainer from "./IconsCardContainer";

import { ButtonPurpleSmall } from "./Buttons";
import { TiWarning } from "react-icons/ti";

import "../static/sass/SassComponents/PrincipalCard.scss";

class PrincipalCard extends Component {
  render() {
    return (
      <div className="Card__container">
        <img className="Card__img" src={CardImg} alt="cardLogo" />
        <div className="Card__text">
          <p className="center">{this.props.diametrosAprox}</p>
          <hr />
          <p>Nombre del Asteroide:</p>
          <h2>
            {this.props.title} <br />
          </h2>
          <IconCardContainer date="01-07-2020" orbit="1284" proximity="13345" />
          <div className="Card__footer">
            <div className="Card__footer--icons">
              <TiWarning size="40px" />
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
