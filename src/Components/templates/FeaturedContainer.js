import React, { Component } from "react";

import Featured from "../molecules/Featured";
import "../../static/sass/SassComponents/Featured.scss";
import Asteroide01 from "../../ImgAsteroids/Asteroide 11.png";
import Asteroide02 from "../../ImgAsteroids/Asteroide 08.png";
import Asteroide03 from "../../ImgAsteroids/Asteroide 10.png";

class FeaturedContainer extends Component {
  render() {
    return (
      <div className="featured__grid">
        <div className="featured__container">
          <Featured
            title="Visualiza"
            description="La información de asteroides en nuestro sistema solar."
            img={Asteroide01}
          />
          <Featured
            title="Conoce"
            description="Los asteroides cercanos a la tierra y potencialmente peligrosos."
            img={Asteroide02}
          />
          <Featured
            title="Nombra"
            description="Tu asteroide favorito y genera un documento con el nombre elejido."
            img={Asteroide03}
          />
        </div>
      </div>
    );
  }
}

export default FeaturedContainer;
