import React, { Component } from "react";
import { ButtonPrimaryMedium } from "../../Components/Buttons";
import "../../static/sass/SassComponents/CallToAction.scss";

class CallToAction extends Component {
  render() {
    return (
      <div className="cta__grid">
        <div className="cta">
          <div className="cta__info">
            <h3>¡Nombra tu asteroide!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
            <ButtonPrimaryMedium>Details</ButtonPrimaryMedium>
          </div>
          <img className="cta__img" src="" alt="" />
        </div>
      </div>
    );
  }
}

export default CallToAction;
