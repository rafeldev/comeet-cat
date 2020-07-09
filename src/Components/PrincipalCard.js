import React, { Component } from 'react';
import CardImg from '../img/heroImg.svg';
import { ButtonPurpleSmall } from './Buttons';
import { TiWarning } from 'react-icons/ti';
import { AiOutlineClockCircle } from 'react-icons/ai';

import '../static/sass/SassComponents/PrincipalCard.scss';

class PrincipalCard extends Component {
  render() {
    const styles = {
      margin: this.props.margin,
    };
    return (
      <div style={styles} className='Card__container'>
        <img className='Card__img' src={CardImg} alt='cardLogo' />
        <div className='Card__text'>
          <p className='diametro'>{this.props.diametrosAprox}</p>
          <hr />
          <h2>
            {this.props.title} <br />
          </h2>
          <p className='ultimo__avistamieto'>{this.props.orbital}</p>
          <div id='progressbar'>
            <div></div>
          </div>
          <p className='proximidad'>{this.props.proximity}</p>
          <div className='Card__footer'>
            <div className='Card__footer--icons'>
              <TiWarning size='32px' />
              <AiOutlineClockCircle size='32px' />
            </div>
            <ButtonPurpleSmall margin=' 0 10px 0 0 ' title='Ver Detalles' />
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalCard;
