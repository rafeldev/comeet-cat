import React from 'react';

import { TitlesInfo } from '../organisms/TitlesInfo';
import PrincipalCard from '../organisms/PrincipalCard';

import '../../static/sass/SassComponents/LastAsteroid.scss';

import ImgData from '../../imgUrl.json';

export const useLastAsteroid = (getNeos) => {
  let arrayNeo = getNeos.slice(4, 7).map((neo) => {
    const id = Math.round(Math.random() * ImgData.length);
    neo.sourceimg = ImgData[id];

    return neo;
  });

  return arrayNeo;
};

export const ListOfApolloAsteroidsComponent = ({
  data: { getNeos = [] },
} = {}) => {
  let cards = useLastAsteroid(getNeos);
  console.log(getNeos);
  return (
    <div className='Card'>
      <div className='Container__title'>
        <TitlesInfo
          value='Ver Asteroides'
          to='/asteroides-apollo?filter=true'
          title='Asteroides Apollo'
          description='Asteroides que cruzan con la órbita de la tierra y son potencialmente peligrosos. '
        />
      </div>
      <div className='Card__principal'>
        {cards.map((neo) => (
          <PrincipalCard key={neo.neo_reference_id} {...neo} />
        ))}
      </div>
    </div>
  );
};
