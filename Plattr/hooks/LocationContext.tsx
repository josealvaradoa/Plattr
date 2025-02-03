import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';

type LocationData = {
  location: string | null;
  latitude: number | null;
  longitude: number | null;
  errorMsg: string | null;
  isFetching: boolean;
};

// 1. Create the context
const LocationContext = createContext<LocationData | undefined>(undefined);

// 2. Create a provider component
export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState<string | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        // Ask for permission
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          setIsFetching(false);
          return;
        }

        // Get the current position
        const { coords } = await Location.getCurrentPositionAsync({});
        setLatitude(coords.latitude);
        setLongitude(coords.longitude);

        // Reverse geocode to get city/region
        const geocoded = await Location.reverseGeocodeAsync({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });

        if (geocoded.length > 0) {
          const place = geocoded[0];
          // Construct a display name: city or region
          const locationName = place.city || place.region || 'Unknown';
          setLocation(locationName);
        } else {
          setErrorMsg('Unable to get location from coordinates');
        }
      } catch (error) {
        console.warn(error);
        setErrorMsg('Something went wrong while fetching location');
      } finally {
        setIsFetching(false);
      }
    })();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
        latitude,
        longitude,
        errorMsg,
        isFetching,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

// 3. Create a convenience hook to consume this context
export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
};
