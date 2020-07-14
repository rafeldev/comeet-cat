import React, { Component } from 'react';

import Header from '../Components/Header';
import LastAsteroids from '../Components/LastAsteroids';
import DataTransformContainer from '../Components/DataTransformContainer';
import Hero from '../Components/Hero';

import '../index.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
      </div>
    );
  }
}

export default Home;
