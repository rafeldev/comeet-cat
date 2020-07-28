import React from "react";
import ImgData from "../../src/imgUrl.json";

import PrincipalCard from "./organisms/PrincipalCard";

import "../static/sass/SassComponents/OtherAsteroid.scss";

export const useLastAsteroid = (getNeos) => {
  let arrayNeo = getNeos.slice(3, 7).map((neo) => {
    const id = Math.round(Math.random() * ImgData.length);
    neo.sourceimg = ImgData[id];

    return neo;
  });

  return arrayNeo;
};

export const OtherAsteroids = ({ data: { getNeos = [] } } = {}) => {
  let cards = useLastAsteroid(getNeos);
  return (
    <div className="Card">
      <div className="Card__principal">
        {cards.map((neo) => (
          <PrincipalCard
            imagen={neo.sourceimg}
            key={neo.neo_reference_id}
            {...neo}
          />
        ))}
      </div>
    </div>
  );
};
