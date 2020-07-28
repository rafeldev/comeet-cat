import React, { Component } from "react";

import { DetailsContainer } from "../Components/templates/DetailsContainer";
import {
  DataTransformContainer,
  DataTransformContainerRowReverse,
} from "../Components/templates/DataTransformContainer";
import OtherAsteroids from "../Components/OtherAsteroids";

class Home extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div>
        <DetailsContainer />
        <DataTransformContainer />
        <DataTransformContainerRowReverse />
        <DataTransformContainer />
        <h2 className="h2-prueba">Otros Asteroides</h2>
        <OtherAsteroids />
      </div>
    );
  }
}

export default Home;
