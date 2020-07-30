import React, { Component } from 'react';

import Hero from '../Components/templates/Hero';
import { ListOfApollo } from '../container/AllApollo';
import EstaticInformation from '../Components/templates/EstaticInformation';
import CertificateContainer from '../Components/molecules/CertificateContainer';

class AllAsteroid extends Component {
  componentDidMount() {
    window.scroll(0, 620);
  }
  render() {
    return (
      <div>
        <Hero />
        <ListOfApollo />
        <EstaticInformation />
        <CertificateContainer />
      </div>
    );
  }
}

export default AllAsteroid;
