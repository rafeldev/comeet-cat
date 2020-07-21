import React, { Component } from "react";
import "../static/sass/SassComponents/AsteroidDetail.scss";
import Asteroid from "../img/asteroid.svg";

class DetailName extends Component {
  render() {
    return (
      <div className="detail-name__container">
        <img src={Asteroid} alt="" />
        <h2>{this.props.nameAsteroid}</h2>
      </div>
    );
  }
}

export default DetailName;
