import React, { Component } from 'react';

import Hero from '../Components/templates/Hero';
import ApolloCardContainer from '../Components/ApolloCardContainer';
import EstaticInformation from '../Components/templates/EstaticInformation';
import CallToAction from '../Components/templates/CallToAction';

class Home extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div>
        <Hero />
        <h2 className='h2-prueba'>Asteroides Apollo</h2>
        <ApolloCardContainer />
        <EstaticInformation />
        <CallToAction />
      </div>
    );
  }
}

export default Home;
