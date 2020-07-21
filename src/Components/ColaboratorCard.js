import React, { Component } from "react";
import "../static/sass/SassComponents/ColaboratorCard.scss";
import "../static/sass/SassComponents/SocialMediaCard.scss";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";

class ColaboratorCard extends Component {
  render() {
    return (
      <div className="colaborator-card">
        <div className="photo__perfil">
          <img src={this.props.img} alt="Colaborador" />
        </div>
        <div className="Info">
          <h4 className="colaborator-card__title">{this.props.title}</h4>
          <h2 className="colaborator-card__name">{this.props.name}</h2>
          <div className="social-media__container">
            <a target="__blank" href={this.props.urlGithub}>
              <AiFillGithub color="white" size="2.4em" />
            </a>
            <a target="__blank" href={this.props.urlInstagram}>
              <AiOutlineInstagram color="white" size="2.5em" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ColaboratorCard;
