import React from 'react';
import Banner from './Banner';
import Timer from './Timer';
import MapView from './MapView';
import '../style/Home.css';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className='homeDesktop'>
        <MapView />
        <Timer />
      </div>
    </div>
  );
}
