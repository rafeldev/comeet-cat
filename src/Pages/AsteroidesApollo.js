import React, { Component } from 'react';

import Hero from '../Components/templates/Hero';
import { ListOfApollo } from '../container/AllApollo';
import EstaticInformation from '../Components/templates/EstaticInformation';
import CallToAction from '../Components/templates/CallToAction';

import FilterContext from './FilterContext';

class Home extends Component {
  constructor(props) {
    super();
    this.state = { filter: false };
  }

  componentDidMount() {
    this.setState({ filter: this.props.location.search.includes('filter') });

    window.scroll(0, 0);
  }

  render() {
    return (
      <div>
        <FilterContext.Provider value={this.state.filter}>
          <Hero />
          <h2 className='h2-prueba'>Asteroides Apollo</h2>
          <ListOfApollo />
          <EstaticInformation />
          <CallToAction />
        </FilterContext.Provider>
      </div>
    );
  }
}

export default Home;
