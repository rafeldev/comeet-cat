import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/* --styles-- */
import '../static/sass/font.scss';

/* --Routes-- */
import Home from '../Pages/Home';
import AsteroidesApollo from '../Pages/AsteroidesApollo';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/Home' component={Home} />
        <Route path='/Astroides-Apollo' component={AsteroidesApollo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
