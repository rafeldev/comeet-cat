import React, { Component } from "react";

import "../../static/sass/SassComponents/DataTransformContainer.scss";

class DataTransformInfo extends Component {
  render() {
    return (
      <div className="Data__container-text">
        <div className="Data__text">
          <span>{this.props.question}</span>
          <h1>{this.props.newData} veces</h1>
          <h3>{this.props.description}</h3>
          <p>
            {this.props.info}: {this.props.dataValue} kms
          </p>
        </div>
      </div>
    );
  }
}

export default DataTransformInfo;
