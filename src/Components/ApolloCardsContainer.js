import React, { Component } from 'react';

import PrincipalCard from './PrincipalCard';

import '../static/sass/SassComponents/ApolloCardContainer.scss';

class ApolloCardContainer extends Component {
  cardContainer = [
    {
      diametrosAprox: 'Diametro aproximado',
      title: 'nombre del asteroide',
      orbital: 'orbita',
      proximity: 'Proximidad',
    },
    {
      diametrosAprox: 'Diametro aproximado',
      title: 'nombre del asteroide',
      orbital: 'orbita',
      proximity: 'Proximidad',
    },
    {
      diametrosAprox: 'Diametro aproximado',
      title: 'nombre del asteroide',
      orbital: 'orbita',
      proximity: 'Proximidad',
    },
    {
      diametrosAprox: 'Diametro aproximado',
      title: 'nombre del asteroide',
      orbital: 'orbita',
      proximity: 'Proximidad',
    },
    {
      diametrosAprox: 'Diametro aproximado',
      title: 'nombre del asteroide',
      orbital: 'orbita',
      proximity: 'Proximidad',
    },
    {
      diametrosAprox: 'Diametro aproximado',
      title: 'nombre del asteroide',
      orbital: 'orbita',
      proximity: 'Proximidad',
    },
    {
      diametrosAprox: 'Diametro aproximado',
      title: 'nombre del asteroide',
      orbital: 'orbita',
      proximity: 'Proximidad',
    },
    {
      diametrosAprox: 'Diametro aproximado',
      title: 'nombre del asteroide',
      orbital: 'orbita',
      proximity: 'Proximidad',
    },
  ];

  render() {
    return (
      <div className='ApolloCardContainer'>
        {this.cardContainer.map((card, index) => (
          <PrincipalCard {...card} key={index} />
        ))}
      </div>
    );
  }
}

export default ApolloCardContainer;
