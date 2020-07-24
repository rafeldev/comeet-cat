import React, { Component } from 'react';

import PrincipalCard from './organisms/PrincipalCard';
import ImgData from '../../src/imgUrl.json';

import '../static/sass/SassComponents/ApolloCardContainer.scss';

class AllCardContainer extends Component {
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
    //mat.random se multiplica por la longitud del array
    //con mat.round redondeamos el numero de mat.random para que nos devuelva entre 1 y 9
    const id = Math.round(Math.random() * ImgData.length);
    //llamamos por el id
    const imagen = ImgData[id];
    //y lo pasamos
    return <PrincipalCard imagen={imagen} {...card} key={index} />;
  };

  render() {
    return (
      <div className='ApolloCardContainer'>
        {this.cardContainer.map((card, index) => this.ponerImagenes())}
      </div>
    );
  }
}

export default AllCardContainer;
