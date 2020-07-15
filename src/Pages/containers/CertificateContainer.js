import React, { Component } from 'react';

import Certificate from '../../img/CertificadoDigital.png';

import '../../static/sass/SassComponents/CertificateContainer.scss';

class CertificateContainer extends Component {
  render() {
    return (
      <div className='Certificate'>
        <img src={Certificate} alt='certificado digital' />
      </div>
    );
  }
}

export default CertificateContainer;
