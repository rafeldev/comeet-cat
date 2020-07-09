import React, { Component } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FeaturedContainer from "./containers/FeaturedContainer";
import ColaboratorContainer from "./containers/ColaboratorsContainer";
import CallToAction from "./containers/CallToAction";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <FeaturedContainer />
        <ColaboratorContainer />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default Home;
