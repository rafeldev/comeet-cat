import React, { Component } from 'react';
import { ButtonPrimarySmall } from './Buttons';
import '../static/sass/SassComponents/TitlesInfo.scss';

class TitlesInfo extends Component {
  render() {
    return (
      <div className='titles-info'>
        <h2 className='titles-info__title'>{this.props.title}</h2>
        <p className='titles-info__description'>{this.props.description}</p>
        <ButtonPrimarySmall title='Details'></ButtonPrimarySmall>
      </div>
    );
  }
}

export default TitlesInfo;
