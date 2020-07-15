import React, { Component, useEffect } from 'react';
import { ButtonPrimaryMedium } from './Buttons';
import heroImg from '../img/heroImg.svg';

import '../static/sass/SassComponents/Hero.scss';

class Hero extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div className='Hero__container'>
        <div className='Hero__text'>
          <h1 className='Hero__title'>
            Objetos cercanos a <br />
            la tierra listos para <br />
            que los descubras
          </h1>
          <ButtonPrimaryMedium to='/AllAsteroid' title='Descubrir Asteroides' />
        </div>
        <div className='Container'>
          <div className='Hero__img'>
            <img src={heroImg} alt='Hero Image' />
          </div>
          <div className='Container__gradient'></div>
        </div>
      </div>
    );
  }
}

export default Hero;
