import React, { Component } from "react";

import DetailName from "../../Components/organisms/DetailName";
import DetailInfo from "../organisms/DetailInfo";

import "../../static/sass/SassComponents/AsteroidDetail.scss";

class DetailsContainer extends Component {
  render() {
    return (
      <div className="details-container">
        <DetailName />
        <DetailInfo />
      </div>
    );
  }
}

export default DetailsContainer;
