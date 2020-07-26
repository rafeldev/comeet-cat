import React, { Component } from "react";

import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import "../../static/sass/SassComponents/Share.scss";

class Share extends Component {
  render() {
    return (
      <div className="share-container">
        <p>Compartir el proyecto en:</p>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://github.com/rafeldev/comeet-cat"
          target="blank"
        >
          <FaFacebookSquare className="icon" size="2em" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Descubre%20Comeet%20Cat.%20Una%20aplicacion%20de%20visualizacion%20de%20asteroides.%20https://github.com/rafeldev/comeet-cat"
          target="blank"
        >
          <FaTwitterSquare classname="icon" size="2em" />
        </a>
      </div>
    );
  }
}

export default Share;
