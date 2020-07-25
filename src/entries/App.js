import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* --styles-- */
import "../static/sass/font.scss";
import "./App.css";

/* --Routes-- */
import Home from "../Pages/Home";
import AsteroidesApollo from "../Pages/AsteroidesApollo";
import AllAsteroid from "../Pages/AllAsteroid";
import Details from "../Pages/Details";
import NaminAsteroid from "../Pages/NaminAsteroid";
import NotFound from "../Pages/NotFound";

import Header from "../Components/organisms/Header";
import Footer from "../Components/templates/Footer";
import ColaboratorsContainer from "../Components/templates/ColaboratorsContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/astroides-apollo" component={AsteroidesApollo} />
        <Route exact path="/asteroides" component={AllAsteroid} />
        <Route exact path="/detalle" component={Details} />
        <Route exact path="/nombrar-asteroide" component={NaminAsteroid} />
        <Route component={NotFound} />
      </Switch>
      <ColaboratorsContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
