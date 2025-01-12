"use client";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useForecastQuery, useWeatherQuery } from "@/hooks/use-weather";
import { RefreshCw } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { Button } from "react-day-picker";

const CityPage = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");
  const coordinates = { lat, lon };
  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please try again</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <RefreshCw className="mr-2 h-4 w-4" />
            retry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  return (
    <div>
      <h1>City: {params.name}</h1>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lon}</p>
    </div>
  );
};

export default CityPage;
