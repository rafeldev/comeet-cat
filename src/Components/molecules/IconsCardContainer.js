import React, { Component, Fragment } from "react";

import "../../static/sass/SassComponents/PrincipalCard.scss";
import { GiOrbit, GiCalendar, GiEarthAmerica } from "react-icons/gi";

class IconCardContainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="iconCard__container">
          <GiCalendar className="iconCard__icon" size="56px" />
          <div className="iconCard__text">
            <p>Más cercano a la tierra el:</p>
            <h5>{this.props.date}</h5>
          </div>
        </div>
        <div className="iconCard__container">
          <GiOrbit className="iconCard__icon" size="56px" />
          <div className="iconCard__text">
            <p>Periodo Orbital:</p>
            <h5>{this.props.orbit} días</h5>
          </div>
        </div>
        <div className="iconCard__container">
          <GiEarthAmerica className="iconCard__icon" size="56px" />
          <div className="iconCard__text">
            <p>Proximidad a la tierra:</p>
            <h5>{this.props.proximity} km</h5>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default IconCardContainer;
