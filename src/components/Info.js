import React from 'react';
import AboutUs from './AboutUs';
import Form from './Form';
import '../style/Info.css';

function Info() {
  return (
    <div>
      <div className='info'>
        <AboutUs />
        <Form />
      </div>
    </div>
  );
}

export default Info;
