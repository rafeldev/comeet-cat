import React, { Component } from "react";
import Featured from "../../Components/Featured";

class FeaturedContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Featured title="Featured 01" description="Descripción 01" />
        <Featured title="Featured 02" description="Descripción 02" />
        <Featured title="Featured 03" description="Descripción 03" />
      </React.Fragment>
    );
  }
}

export default FeaturedContainer;
