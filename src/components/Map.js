import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import {
  MapContainer,
  LayerGroup,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import { Layer } from 'leaflet';

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

  const [position, setPosition] = useState({
    lat: 51.52540664057756,
    lng: -0.04617691040039063,
  });
  const [allLocations, setAllLocations] = useState([]);

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      console.log(position);
      console.log(allLocations);
      // map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    setAllLocations([position, ...allLocations]);
  }, [position]);

  return (
    <>
      {allLocations.map((location, index) => (
        <Marker key={`${location.lat}${location.lng}`} position={location}>
          <Popup>You are here</Popup>
        </Marker>
      ))}
    </>
  );
}

function Map() {
  return (
    <MapContainerContainer
      center={[51.505, -0.09]}
      zoom={13}
      id="map"
      // allLocations={allLocations}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />
      {/* {allLocations.map(location => (
        <LayerGroup key={`${location.lat}${location.lng}`}>
          {' '}
          <LocationMarker
            key={`${location.lat}${location.lng}`}
            position={location}
          />
        </LayerGroup>
      ))} */}
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
