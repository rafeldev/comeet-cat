import React, { Component } from "react";
import TitlesInfo from "../../Components/TitlesInfo";
import ColaboratorCard from "../../Components/ColaboratorCard";
import "../../static/sass/SassComponents/ColaboratorsContainer.scss";

class ColaboratorContainer extends Component {
  render() {
    return (
      <div className="colaborators-container__grid">
        <div className="colaborators-container">
          <TitlesInfo
            title="Team Comeet Cat"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
          />
          <ColaboratorCard title="Frontend Astronaut" name="Rafael Álvarez" />
          <ColaboratorCard title="Frontend Cosmonaut" name="Héctor Reyes" />
        </div>
      </div>
    );
  }
}

export default ColaboratorContainer;
