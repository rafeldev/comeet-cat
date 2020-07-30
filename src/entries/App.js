import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* --styles-- */
import '../static/sass/font.scss';
import './App.css';

/* --Routes-- */
import Home from '../Pages/Home';
import AsteroidesApollo from '../Pages/AsteroidesApollo';
import AllAsteroid from '../Pages/AllAsteroid';
import NamingAsteroid from '../Pages/NamingAsteroid';
import NotFound from '../Pages/NotFound';

import Header from '../Components/organisms/Header';
import Footer from '../Components/templates/Footer';
import ColaboratorsContainer from '../Components/templates/ColaboratorsContainer';
/* import DetailsWithQuery from '../container/DetailsWithQuery';
 */
import { Details } from '../Pages/Details';

import ImgData from '../../src/imgUrl.json';

export const App = () => {
  localStorage.setItem('IMG_DATA', JSON.stringify(ImgData));

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail/:id' component={Details} />
        <Route exact path='/asteroides-apollo' component={AsteroidesApollo} />
        <Route exact path='/asteroides' component={AllAsteroid} />
        <Route exact path='/nombrar-asteroide' component={NaminAsteroid} />
        <Route component={NotFound} />
      </Switch>
      <ColaboratorsContainer />
      <Footer />
    </BrowserRouter>
  );
};
