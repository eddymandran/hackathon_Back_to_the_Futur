import React from 'react';
import '../styles/Home.css';
import Banner from './Banner';
import Timer from './Timer';
import MapView from './MapView';

export default function Home() {
  return (
    <div>
      <Banner />
      <MapView />
      <Timer />
    </div>
  );
}
