import { useEffect, useState } from "react";
interface GeolocationState {
  coordinates: Coordinates | null;
  error: string | null;
  isLoading: true;
}
export function useGeolocation() {
  const [locationData, setLocationData] = useState<GeolocationState>({
    coordinates: null,
    error: null,
    isLoading: true,
  });
  const getLocation = () => {
    setLocationData((prev) => ({ ...prev, isLoading: true, error: null }));
    if (!navigator.geolocation) {
      setLocationData({
        coordinates: null,
        error: "Geolocation is not supported by your browser",
      });
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return { ...locationData };
}
