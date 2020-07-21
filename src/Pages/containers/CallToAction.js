import React, { Component } from "react";
import { ButtonPrimaryMedium } from "../../Components/Buttons";
import "../../static/sass/SassComponents/CallToAction.scss";
import heroImg from "../../img/heroImg.svg";

class CallToAction extends Component {
  render() {
    return (
      <div className="cta__grid">
        <div className="cta">
          <div className="cta__info">
            <h3>¡Nombra tu asteroide!</h3>
            <p>
              No pierdas la oportunidad de nombrar tu asteroide. Explora la
              variedad de ellos y descarga tu documento.
            </p>
            <ButtonPrimaryMedium
              to="/Namin-Asteroid"
              title="Descubrir asteroides"
            />
          </div>
          <img className="cta__img" src={heroImg} alt="" />
        </div>
      </div>
    );
  }
}

export default CallToAction;
