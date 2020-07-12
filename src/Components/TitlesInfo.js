<<<<<<< HEAD
import React, { Component } from 'react';
import { ButtonPrimarySmall } from './Buttons';
import '../static/sass/SassComponents/TitlesInfo.scss';
=======
import React, { Component } from "react";
import { ButtonPrimaryMedium } from "./Buttons";
import "../static/sass/SassComponents/TitlesInfo.scss";
>>>>>>> cc-hector

class TitlesInfo extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className='titles-info'>
        <h2 className='titles-info__title'>{this.props.title}</h2>
        <p className='titles-info__description'>{this.props.description}</p>
        <ButtonPrimarySmall title='Details'></ButtonPrimarySmall>
=======
      <div className="titles-info">
        <h2 className="titles-info__title">{this.props.title}</h2>
        <p className="titles-info__description">{this.props.description}</p>
        <ButtonPrimaryMedium>Details</ButtonPrimaryMedium>
>>>>>>> cc-hector
      </div>
    );
  }
}

export default TitlesInfo;
