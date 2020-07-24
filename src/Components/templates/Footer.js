import React, { Component } from 'react';

import '../../static/sass/SassComponents/Footer.scss';
import ComeetLogo from '../../img/comeet-cat-logo.svg';
import { ButtonPrimaryMedium } from '../molecules/Buttons';

class Footer extends Component {
  render() {
    return (
      <div className='footer__grid'>
        <div className='footer'>
          <div className='footer__social'>
            <h4>Platzi Master</h4>
            <ButtonPrimaryMedium title='Feedback'></ButtonPrimaryMedium>
          </div>
          <div className='footer__project'>
            <img src={ComeetLogo} alt='Logo del header' />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
