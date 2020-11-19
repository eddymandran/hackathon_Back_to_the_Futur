import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import './map.css';

export default function MapView() {
  return (
    <div>
      <MapContainer
        className='MapViewContainer'
        center={[45.746463, 4.827158]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[45.746463, 4.827158]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
