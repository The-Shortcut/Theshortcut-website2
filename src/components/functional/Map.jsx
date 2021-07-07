/* eslint-disable import/no-webpack-loader-syntax */
/* /* eslint-disable no-self-assign */
import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

// Pin Icon
import pinIcon from '../../assets/Icons/pin.png';

const Map = () => {
  const TOKEN = `${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`;
  const [viewport, setViewport] = useState({
    width: '30vw',
    height: '40vh',
    latitude: 60.16723,
    longitude: 24.92175,
    zoom: 12,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
      style={{margin:'auto', minWidth:'100%', maxHeight:'220px'}}>
      <Marker latitude={60.16723} longitude={24.92175}>
        <img src={pinIcon} alt='logo' width='30px' />
      </Marker>
    </ReactMapGL>
  );
};

export default Map;