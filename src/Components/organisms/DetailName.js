import React, { Component } from "react";
import "../../static/sass/SassComponents/AsteroidDetail.scss";
import heroImg from "../../img/heroImg.svg";

class DetailName extends Component {
  render() {
    return (
      <div className="detail-name__container">
        <img src={heroImg} alt="" />
        <h4>Nombre del asteroide: </h4>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default DetailName;
