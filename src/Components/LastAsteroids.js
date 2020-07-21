import React, { Component } from "react";
import TitlesInfo from "./TitlesInfo";
import PrincipalCard from "./PrincipalCard";

import "../static/sass/SassComponents/LastAsteroid.scss";

import { neos } from "../neos.json";

class LastAsteroids extends Component {
  render() {
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
          {neos.slice(0, 3).map((asteroids) => (
            <PrincipalCard
              key={asteroids.neo_reference_id}
              diametrosAprox={
                asteroids.estimated_diameter.kilometers.estimated_diameter_min
              }
              title={asteroids.name}
              orbital={asteroids.close_approach_data.close_approach_date}
              // proximity={
              //   asteroids.orbital_data.orbit_class.orbit_class_description
              // }
              margin="0 16px 0 0"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default LastAsteroids;
