import React, { Component } from 'react';

import '../static/sass/SassComponents/DataTransformContainer.scss';
import '../static/sass/SassComponents/DataTransformContainerReverse.scss';

class DataTransformContainer extends Component {
  render() {
    return (
      <div className='Data__container'>
        <div className='Data__container-text'>
          <div className='Data__text'>
            <span>Introduccion</span>
            <h1>Comparacion</h1>
            <span>Diametro estimado: dato</span>
          </div>
        </div>
        <div className='Data__container-img'>Ilustracion</div>
      </div>
    );
  }
}
class DataTransformContainerRowReverse extends Component {
  render() {
    return (
      <div className='Data__container--Reverse'>
        <div className='Data__container-img'>Ilustracion</div>
        <div className='Data__container-text--Reverse'>
          <div className='Data__text--Reverse'>
            <span>Introduccion</span>
            <h1>Comparacion</h1>
            <span>Diametro estimado: dato</span>
          </div>
        </div>
      </div>
    );
  }
}

export { DataTransformContainer, DataTransformContainerRowReverse };
