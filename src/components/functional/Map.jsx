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
      mapStyle='mapbox://styles/theshortcut/ck9zsj3703njw1isa34hx4jzy'
      onViewportChange={(nextViewport) => {
        setViewport(nextViewport);
      }}
      style={{margin:'auto', minWidth:'100%', maxHeight:'210px'}}>
      <Marker latitude={60.16723} longitude={24.92175}>
        <img src={pinIcon} alt='logo' width='30px' />
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
