import React, { Component } from "react";

import { TiWarning } from "react-icons/ti";
import "../../static/sass/SassComponents/AsteroidDetail.scss";

class Hazardous extends Component {
  render() {
    return (
      <div className="hazardous-container">
        <TiWarning className="hazardous-icon" size="4em" />
      </div>
    );
  }
}

export default Hazardous;
