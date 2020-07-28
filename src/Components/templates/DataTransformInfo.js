import React, { Component } from "react";

import "../../static/sass/SassComponents/DataTransformContainer.scss";

class DataTransformInfo extends Component {
  render() {
    return (
      <div className="Data__container-text">
        <div className="Data__text">
          <span>{this.props.question}</span>
          <h1>
            (
            {parseInt(
              this.props.estimated_diameter?.kilometers?.estimated_diameter_max
            ) * 1000}{" "}
            / 56) veces
          </h1>
          <h3>{this.props.description}</h3>
          <p>
            {this.props.info}:{" "}
            {this.props.estimated_diameter?.kilometers?.estimated_diameter_max.toFixed(
              2
            )}{" "}
            kms
          </p>
        </div>
      </div>
    );
  }
}

export default DataTransformInfo;
