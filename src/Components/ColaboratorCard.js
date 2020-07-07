import React, { Component } from "react";
import "../static/sass/SassComponents/ColaboratorCard.scss";
import SocialMediaCard from "./SocialMediaCard";

class ColaboratorCard extends Component {
  render() {
    return (
      <div className="ColaboratorCard">
        <h4 className="ColaboratorCard__title">{this.props.title}</h4>
        <h2 className="ColaboratorCard__name">{this.props.name}</h2>
        <SocialMediaCard />
      </div>
    );
  }
}

export default ColaboratorCard;
