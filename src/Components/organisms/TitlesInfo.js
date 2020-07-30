import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonAnchor } from '../molecules/Buttons';
import { ButtonPrimarySmall } from '../molecules/Buttons';
import '../../static/sass/SassComponents/TitlesInfo.scss';

class TitlesInfo extends Component {
  render() {
    return (
      <div className='titles-info'>
        <h2 className='titles-info__title'>{this.props.title}</h2>
        <p className='titles-info__description'>{this.props.description}</p>
        <Link to={this.props.to}>
          <ButtonPrimarySmall title={this.props.value} />
        </Link>
      </div>
    );
  }
}
class TitlesInfoAnchor extends Component {
  render() {
    return (
      <div className='titles-info'>
        <h2 className='titles-info__title'>{this.props.title}</h2>
        <p className='titles-info__description'>{this.props.description}</p>
        <ButtonAnchor
          title='Sistema de Diseño'
          to='https://github.com/HectorDevx/Comeet-Cat-Design-System'
        />
      </div>
    );
  }
}

export { TitlesInfo, TitlesInfoAnchor };
