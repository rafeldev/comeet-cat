import React, { Component } from "react";
import Featured from "../../Components/Featured";

import "../../static/sass/SassComponents/Featured.scss";

class FeaturedContainer extends Component {
  render() {
    return (
      <div className="featured__grid">
        <div className="featured__container">
          <Featured
            title="Visualiza"
            description="La información de asteroides en nuestro sistema solar."
          />
          <Featured
            title="Conoce"
            description="Los asteroides cercanos a la tierra y potencialmente peligrosos."
          />
          <Featured
            title="Nombra"
            description="Tu asteroide favorito y genera un documento con el nombre elejido."
          />
        </div>
      </div>
    );
  }
}

export default FeaturedContainer;
