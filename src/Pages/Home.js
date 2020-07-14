import React, { Component } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import '../index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
      </div>
    );
  }
}

export default Home;
