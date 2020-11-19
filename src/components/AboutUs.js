import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/AboutUs.css';
import avatar1 from '../img/avatar1.jpeg';
import avatar2 from '../img/avatar2.jpeg';
import avatar3 from '../img/avatar3.jpeg';
import avatar4 from '../img/avatar4.jpeg';
import avatar5 from '../img/avatar5.jpeg';

const avatarArray = [
  {
    src: avatar1,
    legend: 'Jacques Roux',
  },
  {
    src: avatar2,
    legend: 'Jean-François Varlet',
  },
  {
    src: avatar3,
    legend: 'Madame Roland',
  },
  {
    src: avatar4,
    legend: 'Olympe de Gouges',
  },
  {
    src: avatar5,
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
