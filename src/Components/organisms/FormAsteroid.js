import React, { Component } from "react";

import "../../static/sass/SassComponents/FormAsteroid.scss";

class FormAsteroid extends Component {
  render() {
    return (
      <form>
        <label>
          <h2>Nombre del asteroide</h2>
          <input
            onChange={this.props.onChange}
            type="text"
            name="asteroidName"
            value={this.props.formValues.asteroidName}
          />
        </label>
        <label>
          <h2>Tú Nombre</h2>
          <input
            onChange={this.props.onChange}
            type="text"
            name="name"
            value={this.props.formValues.name}
          />
        </label>
      </form>
    );
  }
}

export default FormAsteroid;
