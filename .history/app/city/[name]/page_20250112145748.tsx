"use client";
import { useParams, useSearchParams } from "next/navigation";

const CityPage = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  return (
    <div>
      <h1>City: {params.name}</h1>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lon}</p>
    </div>
  );
};

export default CityPage;
