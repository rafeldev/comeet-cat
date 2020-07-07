import React, { Component } from "react";
import "../static/sass/SassComponents/Featured.scss";

class Featured extends Component {
  render() {
    return (
      <div className="featured">
        <img src="" alt="" />
        <div className="featured__info">
          <h3 className="featured__title">{this.props.title}</h3>
          <p className="featured__description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Featured;
