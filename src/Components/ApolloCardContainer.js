import React, {useState} from "react";
import ImgData from "../../src/imgUrl.json";
import Paginator from "react-hooks-paginator"

import PrincipalCard from "./organisms/PrincipalCard";

import "../static/sass/SassComponents/ApolloCardContainer.scss";
import "../../node_modules/bootstrap-less/bootstrap/bootstrap.less";


export const useLastAsteroid = (getNeos) => {
  let arrayNeo = getNeos.slice(0, 20).map((neo) => {
    const id = Math.round(Math.random() * ImgData.length);
    neo.sourceimg = ImgData[id];

    return neo;
  });

  return arrayNeo;
};

export const ApolloCardContainer = ({ data: { getNeos = [] } } = {}) => {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  

  let cards = useLastAsteroid(getNeos);

  const data = [1, 2, 3, 4, 5, 6,];
  return (
    <div className="ApolloCardContainer">
      
      {cards.map((neo) => (
        <PrincipalCard 
          imagen={neo.sourceimg}
          key={neo.neo_reference_id}
          {...neo}
        />
      ))}
      <Paginator 
        totalRecords={data.length}
        pageLimit={4}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
