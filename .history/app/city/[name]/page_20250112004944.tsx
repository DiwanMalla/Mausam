"use client";
import { useParams, useSearchParams } from "next/navigation";

const CityPage = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  return (
    <div>
      <h1>City: {params.name}</h1>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lon}</p>
    </div>
  );
};

export default CityPage;
