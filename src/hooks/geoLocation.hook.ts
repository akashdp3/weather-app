import { useState, useEffect } from "react";

const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

const useGeoLocation = () => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setLocation, setError, options);
  }, []);

  return { location, error };
};

export default useGeoLocation;
