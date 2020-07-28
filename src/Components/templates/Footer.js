import React, { Component } from "react";

import "../../static/sass/SassComponents/Footer.scss";
import ComeetLogo from "../../img/comeet-cat-logo.svg";
import { ButtonPrimaryMedium } from "../molecules/Buttons";

class Footer extends Component {
  render() {
    return (
      <div className="footer__grid">
        <div className="footer">
          <div className="footer__social">
            <p>Proyecto creado en:</p>
            <h4>Platzi Master</h4>
            <p>Tu feedback es muy importante para nosotros:</p>
            <ButtonPrimaryMedium title="Dar Feedback"></ButtonPrimaryMedium>
          </div>
          <div className="footer__project">
            <img src={ComeetLogo} alt="Logo del header" />
            <p>
              Comeet Cat es una aplicación de visualización de asteroides creada
              en el Cohort 3 Team César. Muchas gracias a todos los que
              aportaron su ayuda, siempre habrá un lugar en las estrellas para
              ustedes.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
