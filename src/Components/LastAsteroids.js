import React, { Component } from 'react';
import TitlesInfo from './TitlesInfo';
import PrincipalCard from './PrincipalCard';

import '../static/sass/SassComponents/LastAsteroid.scss';

class LastAsteroids extends Component {
  render() {
    return (
      <div className='Card'>
        <div className='Container__title'>
          <TitlesInfo
            title='Ultimos Asteroides'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '
          />
        </div>
        <div className='Card__principal'>
          <PrincipalCard
            diametrosAprox='Diametros aproximados'
            title='Nombrel del Asteroide'
            orbital='Ultimo avistamiento'
            proximity='Proximidad a la tierra'
            margin='0 16px 0 0'
          />
          <PrincipalCard
            diametrosAprox='Diametros aproximados'
            title='Nombrel del Asteroide'
            orbital='Ultimo avistamiento'
            proximity='Proximidad a la tierra'
            margin='0 16px 0 0'
          />
          <PrincipalCard
            diametrosAprox='Diametros aproximados'
            title='Nombrel del Asteroide'
            orbital='Ultimo avistamiento'
            proximity='Proximidad a la tierra'
            margin='0 16px 0 0'
          />
        </div>
      </div>
    );
  }
}

export default LastAsteroids;
