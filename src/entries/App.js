import React from 'react';
import logo from '../img/catspace.jpg';
import { Link } from 'react-router-dom';

/* --styles-- */
import '../static/sass/font.scss';
import { AiOutlineGithub } from 'react-icons/ai';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          Welcome to comeet-cat
          <a className='github-icon' href=''>
            <AiOutlineGithub />
          </a>
        </h1>
        <img src={logo} className='catspace' alt='catspace' />
      </header>
    </div>
  );
}

export default App;
