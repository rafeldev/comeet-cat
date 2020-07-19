import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* --styles-- */
import '../static/sass/font.scss';
import './App.css';

/* --Routes-- */
import Home from '../Pages/Home';
import AsteroidesApollo from '../Pages/AsteroidesApollo';
import AllAsteroid from '../Pages/AllAsteroid';
import Details from '../Pages/Details';
import NaminAsteroid from '../Pages/NaminAsteroid';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ColaboratorsContainer from '../Pages/containers/ColaboratorsContainer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Astroides-Apollo' component={AsteroidesApollo} />
        <Route exact path='/AllAsteroid' component={AllAsteroid} />
        <Route exact path='/Detail' component={Details} />
        <Route exact path='/Namin-Asteroid' component={NaminAsteroid} />
      </Switch>
      <ColaboratorsContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
