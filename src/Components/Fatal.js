import React from 'react';

import FatalLogo from '../img/LogoFatal.svg';
import IconError from '../img/IconError.svg';
import '../static/sass/SassComponents/Fatal.scss';

const Fatal = () => {
  return (
    <div className='fatal__container'>
      <img className='iconError' src={IconError} alt='' />
      <div className='fatal__text'>
        <h1>Ups..!</h1>
        <p>
          No podemos encontrar <br /> la página que estabas buscando! <br />
          Pero no te preocupes, no es tu culpa. <br /> Intenta nuevamente o
          vuelve más tarde
        </p>
        <span>Error code: 404 Not Found</span>
      </div>
      <div className='logo__container'>
        <img src={FatalLogo} alt='Fatal logo' />
      </div>
    </div>
  );
};

export default Fatal;
