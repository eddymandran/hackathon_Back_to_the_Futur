import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import * as castleData from '../data/castle.json';
import './map.css';

const castleIcon = new Icon({
  iconUrl: '/iconechateau.svg',
  iconSize: [30, 30],
});

export default function MapView() {
  return (
    <div>
      <MapContainer
        className='MapViewContainer'
        center={[45.746463, 4.827158]}
        zoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {castleData.features.map((castle) => (
          <Marker
            key={castle.properties.CASTLE_ID}
            position={[
              castle.geometry.coordinates[0],
              castle.geometry.coordinates[1],
            ]}
            icon={castleIcon}
          >
            <Popup>
              {castle.properties.NAME}
              <p>{castle.properties.FORTUNE}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
