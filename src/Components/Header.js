import React, { Component } from 'react';

//styles
import '../static/sass/SassComponents/Header.scss';
import HeaderLogo from '../img/HeaderLogo.svg';
import GithubIcon from '../img/GithubIcon.svg';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='Header__logo'>
          <img src={HeaderLogo} alt='Logo del header' />
        </div>
        <div className='Header__menu'>
          <ul className='Header__menu--list'>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Asteroides Apollo</a>
            </li>
            <li>
              <a href=''>Team</a>
            </li>
          </ul>
          <a href='/'>
            <img className='Github__icon' src={GithubIcon} alt='' />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
