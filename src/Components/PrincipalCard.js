import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CardImg from '../img/heroImg.svg';
import IconCardContainer from './IconsCardContainer';

import { ButtonPurpleSmall } from './Buttons';
import { TiWarning } from 'react-icons/ti';

import '../static/sass/SassComponents/PrincipalCard.scss';

class PrincipalCard extends Component {
  render() {
    return (
      <div className='Card__container'>
        <img className='Card__img' src={CardImg} alt='cardLogo' />
        <div className='Card__text'>
          {
            <p className='center'>
              {
                this.props.estimated_diameter?.kilometers
                  ?.estimated_diameter_max
              }
            </p>
          }
          <p className='center'>{this.props.neo_reference_id}</p>
          <hr />
          <p>Nombre del Asteroide:</p>
          <h2>
            {this.props.name} <br />
          </h2>
          {
            <IconCardContainer
              date={this.props.close_approach_data?.close_approach_date}
              orbit={this.props.orbital_data?.orbital_period}
              proximity={
                this.props.close_approach_data?.miss_distance?.kilometers
              }
            />
          }
          <div className='Card__footer'>
            <div className='Card__footer--icons'>
              <TiWarning size='40px' />
            </div>
            <Link to='/Detail'>
              <ButtonPurpleSmall title='Ver Detalles' />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalCard;
