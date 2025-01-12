"use client";
import { useWeatherQuery } from "@/hooks/use-weather";
import { useParams, useSearchParams } from "next/navigation";

const CityPage = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");
  const coordinates = { lat, lon };
  const weatherQuery = useWeatherQuery(coordinates);

  return (
    <div>
      <h1>City: {params.name}</h1>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lon}</p>
      <p></p>
    </div>
  );
};

export default CityPage;
