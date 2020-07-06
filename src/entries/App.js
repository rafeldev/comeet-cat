import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* --styles-- */
import "../static/sass/font.scss";
import "./App.css";

/* --Routes-- */
import Home from "../pages/Home";
import AsteroidesApollo from "../pages/AsteroidesApollo";
import AllAsteroid from "../pages/AllAsteroid";
import Details from "../pages/Details";
import NaminAsteroid from "../pages/NaminAsteroid";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Astroides-Apollo" component={AsteroidesApollo} />
        <Route path="/All-Asteroid" component={AllAsteroid} />
        <Route path="/Detail" component={Details} />
        <Route path="/Namin-Asteroid" component={NaminAsteroid} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
