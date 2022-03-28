import React from 'react';
import styled from 'styled-components';

import { useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';

function LocationMarker() {
  // const [position, setPosition] = useState(null);
  // const map = useMapEvents({
  //   click(e) {
  //     map.locate();
  //   },
  //   locationfound(e) {
  //     setPosition(e.latlng);
  //     map.flyTo(e.latlng, map.getZoom());
  //   },
  // });

  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      // map.flyTo(e.latlng, map.getZoom());
    },
  });

  // map.on('click', function (e) {
  //   var coord = e.latlng.toString().split(',');
  //   var lat = coord[0].split('(');
  //   var long = coord[1].split(')');
  //   alert('you clicked the map at LAT: ' + lat[1] + ' and LONG:' + long[0]);
  // });
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function Map() {
  return (
    <MapContainerContainer center={[51.505, -0.09]} zoom={13} id="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainerContainer>
  );
}

export default Map;

const MapContainerContainer = styled(MapContainer)`
  height: 80vh;
  margin: 2em;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
