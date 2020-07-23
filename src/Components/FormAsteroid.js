import React, { Component } from "react";

import { ButtonPrimaryMedium } from "./molecules/Buttons";

import "../static/sass/SassComponents/FormAsteroid.scss";

class FormAsteroid extends Component {
  render() {
    return (
      <form>
        <h1>Nombra tu asteroide:</h1>
        <label>
          <h2>Nombre del asteroide</h2>
          <input type="text" name="name" />
        </label>
        <label>
          <h2>Tu Nombre</h2>
          <input type="text" name="name" />
        </label>
        <label>
          <h2>Correo Electronico</h2>
          <input type="text" name="name" />
        </label>
        <ButtonPrimaryMedium margin="30px 0 0 0 " title="Generar archivo" />
      </form>
    );
  }
}

export default FormAsteroid;
