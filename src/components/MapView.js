import React, { useContext, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import castles from '../data/castles.json';
import '../style/map.css';
import { WishesContext } from '../_context/WishesContextProvider';

const castleIcon = new Icon({
  iconUrl: '/iconechateau.svg',
  iconSize: [30, 30],
});

export default function MapView() {
  const { addWishes } = useContext(WishesContext);
  const [filter, setFilter] = useState('all');

  function handleChange(event) {
    setFilter(event.target.value);
  }

  return (
    <div>
      <div className='filter'>
        <h3>Richness of the castle</h3>
        <p>
          <select className='selectRichness' onChange={handleChange}>
            <option value='all'>All</option>
            <option value='💰'>💰</option>
            <option value='💰💰'>💰💰</option>
            <option value='💰💰💰'>💰💰💰</option>
            <option value='💰💰💰💰'>💰💰💰💰</option>
            <option value='💰💰💰💰💰'>💰💰💰💰💰</option>
          </select>
        </p>
      </div>
      <div className='map-container'>
        <MapContainer
          className='MapViewContainer'
          center={[45.746463, 4.827158]}
          zoom={12}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
          />

          {castles
            /* .filter((castle) => {
              return castle.properties.FORTUNE === { filter };
            }) */
            .map((castle) => (
              <Marker
                key={castle.properties.CASTLE_ID}
                position={[
                  castle.geometry.coordinates[0],
                  castle.geometry.coordinates[1],
                ]}
                icon={castleIcon}
              >
                <Popup className='popup'>
                  <h3>{castle.properties.NAME}</h3>
                  <p>{castle.properties.ADDRESS_FR}</p>
                  <h3>{castle.properties.FORTUNE}</h3>
                  <img src={castle.properties.PICTURE} alt='castle' />
                  <div>
                    <button
                      variant='contained'
                      color='primary'
                      onClick={() => addWishes(castle)}
                    >
                      Add to Wishes
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
}
