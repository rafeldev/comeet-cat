import React, { Component } from "react";

import Hero from "../Components/templates/Hero";
import FeaturedContainer from "../Components/templates/FeaturedContainer";
import EstaticInformation from "../Components/templates/EstaticInformation";
import { LastAsteroids } from "../container/ListOfAsteroids";
import CertificateContainer from "../Components/molecules/CertificateContainer";
import { ListOfApolloAsteroids } from "../container/ListOfApollo";
import CallToAction from "../Components/templates/CallToAction";

import "../index.css";

class Home extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div>
        <Hero />
        <FeaturedContainer />
        <EstaticInformation />
        <LastAsteroids />
        <CertificateContainer />
        <ListOfApolloAsteroids />
        <CallToAction />
      </div>
    );
  }
}

export default Home;
