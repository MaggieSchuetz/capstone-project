import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes as Delete, FaCheck as Create } from 'react-icons/fa';
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

function LocationMarker(content) {
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
    lat: 3.546144,
    lng: 98.125154,
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
        <Marker
          key={`${location.lat}${location.lng}`}
          position={location}
          content={content}
        >
          <Popup>
            Add a new entry here?
            <ButtonContainer>
              <IconButton
                type="button"
                alt="deleteLocation"
                className="deleteLocation"
                aria-label="deleteLocation"
                // onClick={() => {
                //   deleteImage(src);
                // }}
              >
                <Delete size={20} alt="delete" />
              </IconButton>
              {/* <IconButton
                type="button"
                alt="createLocation"
                className="createLocation yes"
                aria-label="createLocation" */}
              {/* // onClick={() => {
                //   deleteImage(src);
                // }}
              > */}
              <Link to="/newEntry" aria-label="searchTags">
                <Create size={20} alt="create" />
              </Link>

              {/* // </IconButton> */}
            </ButtonContainer>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

function Map(content) {
  return (
    <MapContainerContainer
      center={[3.546144, 98.125154]}
      zoom={5}
      id="map"
      // allLocations={allLocations}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker content={content} />
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

const IconButton = styled.button`
  height: 1.6rem;
  width: 1.6rem;
  color: palevioletred;
  background-color: snow;
  border: 2px solid palevioletred;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;

  &.yes {
    border-color: cadetblue;
    color: cadetblue;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1em;
`;
