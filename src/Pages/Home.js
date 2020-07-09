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
        <h2 className='h2-prueba'>Header Container</h2>
        <Header />
        <hr className='hr-prueba' />

        <h2 className='h2-prueba'>Hero Container</h2>
        <Hero />
        <hr className='hr-prueba' />

        <h2 className='h2-prueba'>Data transform container</h2>
        <DataTransformContainer />
        <hr className='hr-prueba' />

        <h2 className='h2-prueba'>Last Asteroids</h2>
        <LastAsteroids />
        <hr className='hr-prueba' />
      </div>
    );
  }
}

export default Home;
