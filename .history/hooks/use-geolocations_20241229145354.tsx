import { useState } from "react";
interface GeolocationState {
  coordinates: Coordinates | null;
}
export function useGeolocation() {
  const [locationData, setLocationData] = useState();
}
