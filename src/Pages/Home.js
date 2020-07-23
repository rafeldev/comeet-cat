import React, { Component } from "react";

import Hero from "../Components/templates/Hero";
import FeaturedContainer from "../Components/templates/FeaturedContainer";
import EstaticInformation from "../Components/templates/EstaticInformation";
import { LastAsteroids } from "../container/ListOfAsteroids";
import CertificateContainer from "../Components/molecules/CertificateContainer";
import ApolloAsteroid from "../Components/templates/ApolloAsteroids";
import CallToAction from "../Components/templates/CallToAction";

import "../index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <FeaturedContainer />
        <EstaticInformation />
        <LastAsteroids />
        <CertificateContainer />
        <ApolloAsteroid />
        <CallToAction />
      </div>
    );
  }
}

export default Home;
