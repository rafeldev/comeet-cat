import React, { Component } from 'react';

import Hero from '../Components/templates/Hero';
import AllCardsContainer from '../Components/ApolloCardsContainer';
import EstaticInformation from '../Components/templates/EstaticInformation';
import CertificateContainer from '../Components/molecules/CertificateContainer';

class AllAsteroid extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
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
