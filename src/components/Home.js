import React from 'react';
import '../styles/Home.css';
import Banner from './Banner';
import Timer from './Timer';

export default function Home() {
  return (
    <div>
      {' '}
      <Banner />
      <Timer />
    </div>
  );
}
