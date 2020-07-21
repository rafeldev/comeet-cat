import React, { Component } from 'react';
import TitlesInfo from '../../Components/TitlesInfo';
import ColaboratorCard from '../../Components/ColaboratorCard';
import '../../static/sass/SassComponents/ColaboratorsContainer.scss';

import imgRafa from '../../img/rafa2.jpg'
import imgHector from '../../img/hector.jpg'

class ColaboratorContainer extends Component {
  render() {
    return (
      <div className='colaborators-container__grid'>
        <div className='colaborators-container'>
          <TitlesInfo
            to='/'
            title='Team Comeet Cat'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '
          />
          <ColaboratorCard
            img={imgRafa}
            urlGithub='https://github.com/rafeldev'
            urlInstagram='https://www.instagram.com/rafedev/'
            title='Frontend Astronaut'
            name='Rafael Álvarez'
          />
          <ColaboratorCard
            img={imgHector}
            urlGithub='https://github.com/hectordevx'
            urlInstagram='https://www.instagram.com/hector___reyes/'
            title='Frontend Cosmonaut'
            name='Héctor Reyes'
          />
        </div>
      </div>
    );
  }
}

export default ColaboratorContainer;
