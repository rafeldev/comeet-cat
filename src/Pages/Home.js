import React, { Component } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import "../index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="h2-prueba">Header Container</h2>
        <Header />

        <Footer />
      </div>
    );
  }
}

export default Home;
