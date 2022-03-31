import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTimes as Delete, FaCheck as Create } from 'react-icons/fa';
import { TiArrowForward as GoToEntry } from 'react-icons/ti';
import { useState, useEffect, useContext } from 'react';
import LocationContext from '../context/LocationContext';
import { v4 as uuidv4 } from 'uuid';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';

function LocationMarker({ content }) {
  const { grabItemPosition } = useContext(LocationContext);
  const [position, setPosition] = useState(null);
  const [allLocations, setAllLocations] = useState([]);
  /* eslint-disable no-unused-vars */
  const map = useMapEvents({
    click(e) {
      if (position === null) {
        setPosition(e.latlng, { id: 1 });
      }
      if (position !== null) {
        setPosition(e.latlng, position.id);
      }
    },
  });

  useEffect(() => {
    if (position !== null) {
      position.id = uuidv4();
      setAllLocations([position, ...allLocations]);
    } else if (position === null) {
      setAllLocations(allLocations);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  const deleteLocation = id => {
    setAllLocations(allLocations.filter(location => location.id !== id));
    setPosition(null);
  };

  const setActiveLocation = id => {
    const activeLocation = allLocations.filter(location => location.id === id);
    grabItemPosition(activeLocation);
  };

  useEffect(() => {
    const allLocations = JSON.parse(localStorage.getItem('allLocations'));
    if (allLocations) {
      setAllLocations(allLocations);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('allLocations', JSON.stringify(allLocations));
  }, [allLocations]);

  const entriesWithLocation = content
    .filter(entry => entry.location !== undefined)
    .map(entry => entry.location[0]);

  const entriesWithLocationTitle = content
    .filter(entry => entry.location !== undefined)
    .map(entry => entry.title);

  const entriesWithoutLocation = content
    .filter(entry => entry.location === undefined)
    .map(entry => entry.location);

  const test = content
    .filter(entry => entry.location !== undefined)
    .map(entry => entry);

  const newPosition = [position];

  return (
    <>
      {test.map(item => (
        <Marker
          key={`${item.location[0].id}`}
          position={item.location[0]}
          title={item.title}
        >
          <StyledPopup>
            {`Read about "${item.title}"`}
            <ButtonContainer>
              <StyledLink
                to="/viewEntry"
                aria-label="searchTags"
                onClick={() => setActiveLocation(item.location[0].id)}
              >
                <GoToEntry size={30} alt="goToEntry" />
              </StyledLink>
            </ButtonContainer>
          </StyledPopup>
        </Marker>
      ))}

      {position !== null &&
        newPosition.map(location => (
          <Marker key={`${location.id}`} position={location} content={content}>
            <StyledPopup>
              Add a new entry here?
              <ButtonContainer>
                <IconButton
                  type="button"
                  alt="deleteLocation"
                  className="deleteLocation"
                  aria-label="deleteLocation"
                  onClick={() => deleteLocation(location.id)}
                >
                  <Delete size={20} alt="delete" />
                </IconButton>
                <StyledLink
                  to="/newEntry"
                  aria-label="searchTags"
                  onClick={() => setActiveLocation(location.id)}
                >
                  <Create size={20} alt="create" />
                </StyledLink>
              </ButtonContainer>
            </StyledPopup>
          </Marker>
        ))}
    </>
  );
}

function Map({ content }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <MapContainerContainer
        center={[4.477856485570586, 109.86328125000001]}
        zoom={5}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker content={content} />
      </MapContainerContainer>
    </motion.div>
  );
}
export default Map;
const MapContainerContainer = styled(MapContainer)`
  height: 70vh;
  margin: 2em;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const IconButton = styled.button`
  height: 1.6rem;
  width: 1.6rem;
  color: palevioletred;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  color: darkslategray;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1em;
`;
const StyledPopup = styled(Popup)`
  font-size: 12pt;
  text-align: center;
`;
