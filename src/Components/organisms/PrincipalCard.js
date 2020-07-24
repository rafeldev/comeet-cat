import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* 
import CardImg from '../../img/heroImg.svg'; */
import IconCardContainer from '../molecules/IconsCardContainer';
import { ButtonPurpleSmall } from '../molecules/Buttons';

import { TiWarning, TiWarningOutline } from 'react-icons/ti';

import '../../static/sass/SassComponents/PrincipalCard.scss';

class PrincipalCard extends Component {
  render() {
    return (
      <div className='Card__container'>
        <img
          className='Card__img'
          src={this.props?.imagen?.url}
          alt='cardLogo'
        />

        <div className='Card__text'>
          {
            <p className='center'>
              Diametro Estimado: <br />
              {this.props.estimated_diameter?.kilometers?.estimated_diameter_max.toFixed(
                2
              )}{' '}
              kms
            </p>
          }
          <hr />
          <p>Nombre del Asteroide:</p>
          <h2>
            {this.props.name} <br />
          </h2>
          {
            <IconCardContainer
              date={
                //Con el metodo isArray validamos que sea una arraytraemos la [0] y luego la propiedad con el dato necesario.
                Array.isArray(this.props.close_approach_data)
                  ? this.props.close_approach_data[0].close_approach_date
                  : null
              }
              //Preguntamos si tiene la data entonces reenderiza el parseInt y si no le asigna 0.
              orbit={
                this.props.orbital_data?.orbital_period
                  ? parseInt(this.props.orbital_data?.orbital_period, 0)
                  : 0
              }
              //Preguntamos por la data del Array y lo parseamos a entero.
              proximity={parseInt(
                Array.isArray(this.props.close_approach_data)
                  ? this.props.close_approach_data[0].miss_distance?.kilometers
                  : null
              )}
            />
          }
          <div className='Card__footer'>
            <div className='Card__footer--icons'>
              {this.props.is_potentially_hazardous_asteroid ? (
                <TiWarning size='40px' />
              ) : (
                <TiWarningOutline size='40px' />
              )}
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
