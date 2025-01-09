import { Coordinates } from "@/app/API/types";
import { useEffect, useState } from "react";
interface GeolocationState {
  coordinates: Coordinates | null;
  error: string | null;
  isLoading: boolean;
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
        isLoading: false,
      });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationData({
          coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
          isLoading: false,
        });
      },
      (err) => {
        let errMsg: string;
        switch (err.code) {
          case err.PERMISSION_DENIED:
            errMsg =
              "Location permission denied. Please enable location access.";
            break;
          case err.POSITION_UNAVAILABLE:
            errMsg =
              "Location information is unavailable. Please try again later.";
            break;
          case err.TIMEOUT:
            errMsg =
              "The request to get user location timed out. Please try again.";
            break;
          default:
            errMsg = "An unknown error occurred while fetching the location.";
            break;
        }
        setLocationData({
          coordinates: null,
          error: errMsg,
          isLoading: false,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };
  useEffect(() => {
    getLocation();
  }, []);
  return { ...locationData, getLocation };
}
