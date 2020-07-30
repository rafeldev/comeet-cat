import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import React, { Component, Fragment } from "react";

import FormAsteroid from "../Components/organisms/FormAsteroid";
import CertificateNoName from "../Components/molecules/CertificateNoName";

import "../static/sass/SassComponents/FormAsteroid.scss";

export default class NamingAsteroid extends Component {
  state = {
    form: {
      asteroidName: "Nombre del Asteroide",
      name: "Mi nombre",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <CertificateNoName
          asteroidName={this.state.form.asteroidName}
          name={this.state.form.name}
          ref={this.componentRef}
        />
        <FormAsteroid
          onChange={this.handleChange}
          formValues={this.state.form}
        />
        <div className="buttons">
          <button onClick={() => exportComponentAsJPEG(this.componentRef)}>
            Generar JPEG
          </button>
          <button onClick={() => exportComponentAsPDF(this.componentRef)}>
            Generar PDF
          </button>
          <button onClick={() => exportComponentAsPNG(this.componentRef)}>
            Generar PNG
          </button>
        </div>
      </Fragment>
    );
  }
}
