import React, { Component } from "react";
import "../static/sass/SassComponents/Share.scss";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

class Share extends Component {
  render() {
    return (
      <div className="share-container">
        <p>Compartir en:</p>
        <FaFacebookSquare className="icon" size="2em" />
        <FaTwitterSquare classname="icon" size="2em" />
      </div>
    );
  }
}

export default Share;
