import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* --styles-- */
import "../static/sass/font.scss";
import "./App.css";

/* --Routes-- */
import Home from "../Pages/Home";
import AsteroidesApollo from "../Pages/AsteroidesApollo";
import AllAsteroid from "../Pages/AllAsteroid";
import NaminAsteroid from "../Pages/NaminAsteroid";
import NotFound from "../Pages/NotFound";

import Header from "../Components/organisms/Header";
import Footer from "../Components/templates/Footer";
import ColaboratorsContainer from "../Components/templates/ColaboratorsContainer";
import { DetailsContainer } from "../Components/templates/DetailsContainer";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detalle");

  return (
    <BrowserRouter>
      <Header />
      {detailId ? (
        <DetailsContainer id={detailId} />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/asteroides-apollo" component={AsteroidesApollo} />
          <Route exact path="/asteroides" component={AllAsteroid} />
          <Route exact path="/nombrar-asteroide" component={NaminAsteroid} />
          <Route component={NotFound} />
        </Switch>
      )}
      <ColaboratorsContainer />
      <Footer />
    </BrowserRouter>
  );
};
