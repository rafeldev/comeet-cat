import React, { Component } from 'react';
import CardImg from '../img/heroImg.svg';

import '../static/sass/SassComponents/PrincipalCard.scss';

class PrincipalCard extends Component {
  render() {
    return (
      <div className='Card__container--padre'>
        <div className='Card__container'>
          <img className='Card__img' src={CardImg} alt='cardLogo' />
          <h6>Diametro Aproximado</h6>
          <div className='Card__text'>
            <h2>
              Nombre del <br /> Asteroide
            </h2>
            <h6>Ultimo avisamiento(periodo orbital)</h6>
            <div className='Card__BarProgress'></div>
            <span>proximidad a la tierra</span>
            <div className='Card__footer'>icono icono button</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalCard;
