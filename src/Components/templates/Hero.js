import React, { Component } from "react";
import { ButtonPrimaryMedium } from "../molecules/Buttons";
import heroImg from "../../img/heroImg.svg";

import "../../static/sass/SassComponents/Hero.scss";

class Hero extends Component {
  render() {
    return (
      <div className="Hero__container">
        <div className="Hero__text">
          <h1 className="Hero__title">
            Objetos cercanos a <br />
            la tierra listos para <br />
            que los descubras
          </h1>
          <ButtonPrimaryMedium
            to='/asteroides'
            title="Descubrir más asteroides"
          />
        </div>
        <div className="Container">
          <div className="Hero__img">
            <img src={heroImg} alt="Welcome to Comeet Cat" />
          </div>
          <div className="Container__gradient"></div>
        </div>
      </div>
    );
  }
}

export default Hero;
