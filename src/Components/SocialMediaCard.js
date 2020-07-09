import React, { Component } from "react";
import "../static/sass/SassComponents/SocialMediaCard.scss";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";

class SocialMediaCard extends Component {
  render() {
    return (
      <div className="social-media__container">
        <AiFillGithub color="white" size="2.4em" />
        <AiOutlineInstagram color="white" size="2.5em" />
      </div>
    );
  }
}

export default SocialMediaCard;
