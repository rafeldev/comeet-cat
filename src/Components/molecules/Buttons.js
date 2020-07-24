import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* styles */
import '../../static/sass/SassComponents/Button-primaryMedium.scss';
import '../../static/sass/SassComponents/Button-primarySmall.scss';
import '../../static/sass/SassComponents/Button-purpleMedium.scss';
import '../../static/sass/SassComponents/Button-purpleSmall.scss';

class ButtonPrimaryMedium extends Component {
  render() {
    const styles = {
      margin: this.props.margin,
    };
    return (
      <Link to={this.props.to}>
        <button style={styles} className='button__primary-medium'>
          {this.props.title}
        </button>
      </Link>
    );
  }
}
class ButtonPrimarySmall extends Component {
  render() {
    return (
      <button className='button__primary-small'>{this.props.title}</button>
    );
  }
}

/* buttons purple */
class ButtonPurpleMedium extends Component {
  render() {
    return (
      <button className='button__Purple-medium'>{this.props.title}</button>
    );
  }
}
class ButtonPurpleSmall extends Component {
  render() {
    const styles = {
      margin: this.props.margin,
    };
    return (
      <button style={styles} className='button__Purple-small'>
        {this.props.title}
      </button>
    );
  }
}
export {
  ButtonPrimaryMedium,
  ButtonPrimarySmall,
  ButtonPurpleMedium,
  ButtonPurpleSmall,
};
