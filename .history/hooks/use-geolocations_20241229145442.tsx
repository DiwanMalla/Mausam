import { useState } from "react";
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
}
