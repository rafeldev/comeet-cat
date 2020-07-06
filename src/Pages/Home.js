import React, { Component } from "react";

import Header from "../Components/Header";
import FeaturedContainer from "./containers/FeaturedContainer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <FeaturedContainer />
      </div>
    );
  }
}

export default Home;
