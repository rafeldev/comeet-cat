import React from 'react';
import TitlesInfo from '../organisms/TitlesInfo';
import PrincipalCard from '../organisms/PrincipalCard';

import '../../static/sass/SassComponents/LastAsteroid.scss';

export const LastAsteroidsComponent = ({ data: { getNeos = [] } } = {}) => {
  return (
    <div className='Card'>
      <div className='Container__title'>
        <TitlesInfo
          to='/AllAsteroid'
          title='Últimos Asteroides'
          description='Descubré los últimos asteroides descubiertos. '
        />
      </div>
      <div className='Card__principal'>
        {getNeos.slice(0, 3).map((neo) => (
          <PrincipalCard key={neo.neo_reference_id} {...neo} />
        ))}
      </div>
    </div>
  );
};
