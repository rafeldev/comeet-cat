import React, { Component } from 'react';
import PrincipalCard from './organisms/PrincipalCard';
import ImgData from '../../src/imgUrl.json';

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
  ponerImagenes = (card, index) => {
    const id = Math.round(Math.random() * ImgData.length);
    const imagen = ImgData[id];
    return <PrincipalCard imagen={imagen} {...card} key={index} />;
  };
  render() {
    console.log('Hola');
    return (
      <div className='ApolloCardContainer'>
        {this.cardContainer.map((card, index) => this.ponerImagenes())}
      </div>
    );
  }
}

export default ApolloCardContainer;
