import React, { Component } from "react";

import Header from "../Components/Header";
import FeaturedContainer from "./containers/FeaturedContainer";
import ColaboratorContainer from "./containers/ColaboratorsContainer";
import CallToAction from "./containers/CallToAction";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <FeaturedContainer />
        <ColaboratorContainer />
        <CallToAction />
      </div>
    );
  }
}

export default Home;
