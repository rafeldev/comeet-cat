import React, { Component } from 'react';

import '../static/sass/SassPages/Home.scss';

import Header from '../Components/Header';
import PrincipalCard from '../Components/PrincipalCard';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='Card'>
          <PrincipalCard />
        </div>
      </div>
    );
  }
}

export default Home;
