import React, { Component } from "react";
import { ButtonPrimaryMedium } from "./Buttons";
import "../static/sass/SassComponents/TitlesInfo.scss";

class TitlesInfo extends Component {
  render() {
    return (
      <div className="titles-info">
        <h2 className="titles-info__title">{this.props.title}</h2>
        <p className="titles-info__description">{this.props.description}</p>
        <ButtonPrimaryMedium>Details</ButtonPrimaryMedium>
      </div>
    );
  }
}

export default TitlesInfo;
