import React, { Component } from 'react';
import CardImg from '../img/heroImg.svg';
import { ButtonPurpleSmall } from './Buttons';

import '../static/sass/SassComponents/PrincipalCard.scss';

class PrincipalCard extends Component {
  render() {
    return (
      <div className='Card__container'>
        <img className='Card__img' src={CardImg} alt='cardLogo' />
        <div className='Card__text'>
          <p className='diametro'>Diametro Aproximado</p>
          <hr />
          <h2>
            Nombre del <br /> Asteroide
          </h2>
          <p className='ultimo__avistamieto'>
            Ultimo avisamiento(periodo orbital)
          </p>
          <div id='progressbar'>
            <div></div>
          </div>
          <p className='proximidad'>proximidad a la tierra</p>
          <div className='Card__footer'>
            icono icono <ButtonPurpleSmall title='Ver Detalles' />
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalCard;
