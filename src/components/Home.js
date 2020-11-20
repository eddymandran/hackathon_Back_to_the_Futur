import React from 'react';
import '../style/Home.css';
import Banner from './Banner';
import Timer from './Timer';
import MapView from './MapView';
import Filter from './Filter';

export default function Home() {
  return (
    <div>
      <Banner />
      <Filter />
      <MapView />
      <Timer />
    </div>
  );
}
