import React, { Component } from 'react';

/* styles */
import '../static/sass/SassComponents/Button-primaryMedium.scss';
import '../static/sass/SassComponents/Button-primarySmall.scss';
import '../static/sass/SassComponents/Button-purpleMedium.scss';
import '../static/sass/SassComponents/Button-purpleSmall.scss';

class ButtonPrimaryMedium extends Component {
  render() {
    return <button className='button__primary-medium'>Button primary</button>;
  }
}
class ButtonPrimarySmall extends Component {
  render() {
    return <button className='button__primary-small'>Details</button>;
  }
}

/* buttons purple */
class ButtonPurpleMedium extends Component {
  render() {
    return <button className='button__Purple-medium'>Button purple</button>;
  }
}
class ButtonPurpleSmall extends Component {
  render() {
    return <button className='button__Purple-small'>Details</button>;
  }
}
export {
  ButtonPrimaryMedium,
  ButtonPrimarySmall,
  ButtonPurpleMedium,
  ButtonPurpleSmall,
};
