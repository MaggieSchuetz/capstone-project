import { createContext, useState } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [activeItemLocation, setActiveItemLocation] = useState();
  const grabItemPosition = location => {
    setActiveItemLocation(location);
  };
  // const [firstLocation, setFirstLocation] = useState();
  // const activeFirstMarker = location => {
  //   setFirstLocation(location);
  // };

  return (
    <LocationContext.Provider value={{ activeItemLocation, grabItemPosition }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
