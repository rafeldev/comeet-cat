import React, { Component } from 'react';

import DetailName from '../Components/organisms/DetailName';
import FormAsteroid from '../Components/organisms/FormAsteroid';

import '../static/sass/SassComponents/FormAsteroid.scss';

class Home extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div className='details-container'>
        <DetailName nameAsteroid='Nombre del asteroide' />
        <FormAsteroid />
      </div>
    );
  }
}

export default Home;
