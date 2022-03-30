import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaTimes as Delete,
  FaCheck as Create,
  FaLongArrowAltRight as GoToEntry,
} from 'react-icons/fa';

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

  const { grabItemPosition } = useContext(LocationContext);

  const [position, setPosition] = useState(null);
  // const [position, setPosition] = useState({});
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

      console.log(position);
      console.log(allLocations);

      // map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    if (position !== null) {
      position.id = uuidv4();
      setAllLocations([position, ...allLocations]);
    }

    console.log(allLocations, position); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  const deleteLocation = id => {
    console.log(allLocations, position);
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

  const entriesWithLocation = content.content
    .filter(entry => entry.location !== undefined)
    .map(entry => entry.location[0]);

  const entriesWithLocationTitle = content.content
    .filter(entry => entry.location !== undefined)
    .map(entry => entry.title);

  const entriesWithoutLocation = content.content
    .filter(entry => entry.location === undefined)
    .map(entry => entry.location);

  // const locationsWithEntries = allLocations.filter(location =>
  //   location.id.includes(entriesWithLocation)
  // );

  const newPosition = [position];

  console.log(
    content,
    allLocations,
    entriesWithoutLocation,
    entriesWithLocation,
    // locationsWithEntries,
    entriesWithLocationTitle
  );
  // console.log(content.content[0].location[0].id);

  return (
    <>
      {entriesWithLocation.map(location => (
        <Marker key={`${location.id}`} position={location} content={content}>
          <StyledPopup>
            View this entry
            <ButtonContainer>
              <StyledLink
                to="/viewEntry"
                aria-label="searchTags"
                onClick={() => setActiveLocation(location.id)}
              >
                <GoToEntry size={20} alt="goToEntry" />
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

function Map(content) {
  return (
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
  );
}
export default Map;
const MapContainerContainer = styled(MapContainer)`
  height: 77vh;
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
`;
