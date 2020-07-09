import React, { Component } from 'react';

import Header from '../Components/Header';
import LastAsteroids from '../Components/LastAsteroids';
import DataTransformContainer from '../Components/DataTransformContainer';
import Hero from '../Components/Hero';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <DataTransformContainer />
        <LastAsteroids />
      </div>
    );
  }
}

export default Home;
