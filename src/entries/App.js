import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* --styles-- */
import '../static/sass/font.scss';

/* --Routes-- */
import Home from '../Pages/Home';
import AsteroidesApollo from '../Pages/AsteroidesApollo';
import AllAsteroid from '../Pages/AllAsteroid';
import Details from '../Pages/Details';
import NaminAsteroid from '../Pages/NaminAsteroid';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Home' component={Home} />
        <Route path='/Astroides-Apollo' component={AsteroidesApollo} />
        <Route path='/All-Asteroid' component={AllAsteroid} />
        <Route path='/Detail' component={Details} />
        <Route path='/Namin-Asteroid' component={NaminAsteroid} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
