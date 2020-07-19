import React, { Component } from 'react';
import { ButtonPrimaryMedium } from '../../Components/Buttons';
import '../../static/sass/SassComponents/CallToAction.scss';
import Asteroid from '../../img/asteroid.svg';

class CallToAction extends Component {
  render() {
    return (
      <div className='cta__grid'>
        <div className='cta'>
          <div className='cta__info'>
            <h3>¡Nombra tu asteroide!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
            <ButtonPrimaryMedium
              to='/Naming-Asteroid'
              title='Descubrir asteroides'
            />
          </div>
          <img className='cta__img' src={Asteroid} alt='' />
        </div>
      </div>
    );
  }
}

export default CallToAction;
