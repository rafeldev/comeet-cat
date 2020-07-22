import React from "react";
import TitlesInfo from "./TitlesInfo";
import PrincipalCard from "./PrincipalCard";

import "../static/sass/SassComponents/LastAsteroid.scss";

import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

const neos = graphql(gql`
  query {
    getNeos {
      neo_reference_id
      name
    }
  }
`);

const LastAsteroidsComponent = (props) => {
  console.log(props);
  return (
    <div className="Card">
      <div className="Container__title">
        <TitlesInfo
          to="/AllAsteroid"
          title="Últimos Asteroides"
          description="Descubré los últimos asteroides descubiertos. "
        />
      </div>
      <div className="Card__principal">
        {[1, 2, 3].map((id) => (
          <PrincipalCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export const LastAsteroids = neos(LastAsteroidsComponent);
