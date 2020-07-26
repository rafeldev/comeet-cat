import React, { Component } from "react";
import { Link } from "react-router-dom";

//styles
import "../../static/sass/SassComponents/Header.scss";
import ComeetLogo from "../../img/comeet-cat-logo.svg";
import GithubIcon from "../../img/GithubIcon.svg";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__logo">
          <Link to="/">
            <img src={ComeetLogo} alt="Logo del header" />
          </Link>
        </div>
        <div className="Header__menu">
          <ul className="Header__menu--list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/asteroides-apollo">Asteroides Apollo</Link>
            </li>
            <li>
              <Link to="/asteroides">Ver todos</Link>
            </li>
          </ul>
          <a href="https://github.com/rafeldev/comeet-cat" target="blank">
            <img className="Github__icon" src={GithubIcon} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
