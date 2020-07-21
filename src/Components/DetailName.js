import React, { Component } from "react";
import "../static/sass/SassComponents/AsteroidDetail.scss";
import heroImg from "../img/heroImg.svg";

class DetailName extends Component {
  render() {
    return (
      <div className="detail-name__container">
        <img src={heroImg} alt="" />
        <h2>{this.props.nameAsteroid}</h2>
      </div>
    );
  }
}

export default DetailName;
