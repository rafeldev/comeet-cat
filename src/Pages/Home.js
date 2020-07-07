import React, { Component } from "react";

import Header from "../Components/Header";
import FeaturedContainer from "./containers/FeaturedContainer";
import ColaboratorCard from "../Components/ColaboratorCard";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <FeaturedContainer />
        <ColaboratorCard title="Frontend Cosmonaut" name="Héctor Reyes" />
      </div>
    );
  }
}

export default Home;
