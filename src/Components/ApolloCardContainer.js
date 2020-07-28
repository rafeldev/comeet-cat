import React from 'react';
import ImgData from '../../src/imgUrl.json';

import PrincipalCard from './organisms/PrincipalCard';

import '../static/sass/SassComponents/ApolloCardContainer.scss';

export const useLastAsteroid = (getNeos) => {
  let arrayNeo = getNeos.slice(0, 20).map((neo) => {
    const id = Math.round(Math.random() * ImgData.length);
    neo.sourceimg = ImgData[id];

    return neo;
  });

  return arrayNeo;
};

export const ApolloCardContainer = ({ data: { getNeos = [] } } = {}) => {
  let cards = useLastAsteroid(getNeos);
  return (
    <div className='ApolloCardContainer'>
      {cards.map((neo) => (
        <PrincipalCard
          imagen={neo.sourceimg}
          key={neo.neo_reference_id}
          {...neo}
        />
      ))}
    </div>
  );
};
