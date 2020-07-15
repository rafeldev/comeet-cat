import React, { Component } from 'react';

import Hero from '../Components/Hero';
import FeaturedContainer from '../Pages/containers/FeaturedContainer';
import EstaticInformation from '../Pages/containers/EstaticInformation';
import LastAsteroids from '../Components/LastAsteroids';
import CertificateContainer from './containers/CertificateContainer';
import ApolloAsteroid from '../Components/ApolloAsteroids';
import CallToAction from './containers/CallToAction';

import '../index.css';

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

/*  */
