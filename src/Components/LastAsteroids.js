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
      estimated_diameter {
        kilometers {
          estimated_diameter_max
        }
      }
      is_potentially_hazardous_asteroid
      close_approach_data {
        close_approach_date
        # miss_distance {
        #   kilometers
        # }
      }
      orbital_data {
        orbital_period
      }
    }
  }
`);

const LastAsteroidsComponent = ({ data: { getNeos = [] } } = {}) => {
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
        {getNeos.slice(0, 3).map((neo) => (
          <PrincipalCard key={neo.neo_reference_id} {...neo} />
        ))}
      </div>
    </div>
  );
};

export const LastAsteroids = neos(LastAsteroidsComponent);
