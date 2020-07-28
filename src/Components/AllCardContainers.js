import  { useState } from 'react';

import PrincipalCard from './organisms/PrincipalCard';
import {ButtonPrimarySmall} from '../Components/molecules/Buttons'
import ImgData from '../../src/imgUrl.json';

import '../static/sass/SassComponents/ApolloCardContainer.scss';

const INITIAL_PAGE = 0

export const useLastAsteroid = (getNeos) => {

  const [page, setPage] = useState(INITIAL_PAGE);


  let arrayNeo = getNeos.slice(0, 20).map((neo) => {
    const id = Math.round(Math.random() * ImgData.length);
    neo.sourceimg = ImgData[id];

    return neo;
  });

  return arrayNeo;
};


export const ApolloCardContainer = ({ data: { getNeos = [] } } = {}) => {
  let cards = useLastAsteroid(getNeos)
  return (
    <div className='ApolloCardContainer'>
      {cards.map((neo) => ( 
        <PrincipalCard 
          imagen={neo.sourceimg}
          key={neo.neo_reference_id}
          {...neo}
        />
      ))}
      <ButtonPrimarySmall title='ver màs' />
    </div>
  );
}  ;
  
  


