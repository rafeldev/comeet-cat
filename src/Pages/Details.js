import React, { Component } from 'react';

import DetailsContainer from '../Pages/containers/DetailsContainer';
import {
  DataTransformContainer,
  DataTransformContainerRowReverse,
} from '../Components/DataTransformContainer';
import OtherAsteroids from '../Components/OtherAsteroids';

class Home extends Component {
  render() {
    return (
      <div>
        <DetailsContainer />
        <DataTransformContainer />
        <DataTransformContainerRowReverse />
        <DataTransformContainer />
        <h2 className='h2-prueba'>Otros Asteroides</h2>
        <OtherAsteroids />
      </div>
    );
  }
}

export default Home;
