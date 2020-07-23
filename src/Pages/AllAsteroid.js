import React, { Component } from "react";

import Hero from "../Components/templates/Hero";
import AllCardsContainer from "../Components/ApolloCardsContainer";
import EstaticInformation from "../Pages/containers/EstaticInformation";
import CertificateContainer from "./containers/CertificateContainer";

class AllAsteroid extends Component {
  render() {
    return (
      <div>
        <Hero />
        <AllCardsContainer />
        <EstaticInformation />
        <CertificateContainer />
      </div>
    );
  }
}

export default AllAsteroid;
