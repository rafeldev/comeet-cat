import React from 'react';
import logo from '../img/catspace.jpg';

/* --styles-- */
import '../static/sass/font.scss'


import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='catspace' alt='catspace' />
        <h1>Welcome to comeet-cat</h1>
      </header>
    </div>
  );
}

export default App;
