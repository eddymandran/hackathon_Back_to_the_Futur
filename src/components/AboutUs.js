import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/AboutUs.css';
import jacquesroux from '../img/jacquesroux.jpeg';
import jeanfrançoisvarlet from '../img/jeanfrançoisvarlet.jpeg';
import olympedegouges from '../img/olympedegouges.jpeg';
import madameroland from '../img/madameroland.jpeg';
import jeantheophileleclerc from '../img/jeantheophileleclerc.jpeg';

const avatarArray = [
  {
    src: jacquesroux,
    legend: 'Jacques Roux',
  },
  {
    src: jeanfrançoisvarlet,
    legend: 'Jean-François Varlet',
  },
  {
    src: madameroland,
    legend: 'Madame Roland',
  },
  {
    src: olympedegouges,
    legend: 'Olympe de Gouges',
  },
  {
    src: jeantheophileleclerc.jpeg,
    legend: 'Jean-Théophile Leclerc',
  },
];
const AboutUs = () => {
  return (
    <div className='about-us' id='about-us'>
      <div className='about-us-carousel-container' id='AboutUs'>
        <h1 className='about-us-title'> Leader of the Revolution </h1>
        <Carousel
          className='about-us-carousel'
          autoPlay
          showThumbs={false}
          showStatus={false}
          infiniteLoop
        >
          {avatarArray.map((avatar) => (
            <div className='about-us-container' key={avatar.legend}>
              <img alt={avatar.legend} src={avatar.src} />
              <p className='legend'>{avatar.legend}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;
