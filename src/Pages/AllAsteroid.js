import React, { Component } from 'react';

import Hero from '../Components/templates/Hero';
import AllCardContainer from '../Components/ApolloCardContainer';
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
        <AllCardContainer />
        <EstaticInformation />
        <CertificateContainer />
      </div>
    );
  }
}

export default AllAsteroid;
