import React, { useState, useEffect } from 'react';
import Paginator from 'react-hooks-paginator';

import PrincipalCard from './organisms/PrincipalCard';

import '../static/sass/SassComponents/ApolloCardContainer.scss';
import '../../node_modules/bootstrap-less/bootstrap/bootstrap.less';

export const ApolloCardContainer = ({ data: { getNeos = [] } } = {}) => {
  const [cards, setCards] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const neo = getNeos;

  const pageLimit = 20;

  useEffect(() => {
    setCards(neo.slice(offset, offset + pageLimit));
  }, [offset, neo]);

  console.log(neo.length);

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
