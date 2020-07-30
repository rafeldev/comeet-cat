import React, { useState, useEffect } from 'react';
import Paginator from 'react-hooks-paginator';

import PrincipalCard from './organisms/PrincipalCard';
import FilterContext from '../Pages/FilterContext';

import '../static/sass/SassComponents/ApolloCardContainer.scss';
import '../../node_modules/bootstrap-less/bootstrap/bootstrap.less';
import { useContext } from 'react';

export const ApolloCardContainer = ({ data: { getNeos = [] } } = {}) => {
  const [cards, setCards] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [neo, setNeo] = useState([]);

  const filter = useContext(FilterContext);

  const pageLimit = 20;

  useEffect(() => {
    setCards(neo.slice(offset, offset + pageLimit));
  }, [offset, neo]);

  useEffect(() => {
    let neo = [];
    if (filter) {
      neo = getNeos.filter(
        (item) => item.is_potentially_hazardous_asteroid === filter
      );
    } else {
      neo = getNeos;
    }
    setNeo(neo);
  }, [filter, getNeos]);

  console.log(filter);
  return (
    <div className='ApolloCardContainer'>
      {cards.map((neo) => (
        <PrincipalCard
          imagen={neo.sourceimg}
          key={neo.neo_reference_id}
          {...neo}
        />
      ))}
      <Paginator
        totalRecords={neo.length}
        pageLimit={pageLimit}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
