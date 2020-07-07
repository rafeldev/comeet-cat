import React, { Component } from "react";
import Featured from "../../Components/Featured";

import "../../static/sass/SassComponents/Featured.scss";

class FeaturedContainer extends Component {
  render() {
    return (
      <div className="featured__grid">
        <div className="featured__container">
          <Featured title="Featured 01" description="Descripción 01" />
          <Featured title="Featured 02" description="Descripción 02" />
          <Featured title="Featured 03" description="Descripción 03" />
        </div>
      </div>
    );
  }
}

export default FeaturedContainer;
