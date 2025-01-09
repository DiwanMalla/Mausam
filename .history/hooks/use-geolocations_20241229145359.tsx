import { useState } from "react";
interface GeolocationState {
  coordinates: Coordinates | null;
  error: string | null;
}
export function useGeolocation() {
  const [locationData, setLocationData] = useState();
}
