import React, { Component } from "react";

import "../../static/sass/SassComponents/CertificateContainer.scss";

class CertificateContainer extends Component {
  render() {
    return (
      <div className="CertificateNoName">
        <div className="Certificate__text">
          <h1>{this.props.asteroidName}</h1>
          <h4>{this.props.name}</h4>
        </div>
      </div>
    );
  }
}

export default CertificateContainer;
