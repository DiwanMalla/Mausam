"use client";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  useForecastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/use-weather";
import { AlertTriangle } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";

const CityPage = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");
  const coordinates = { lat, lon };
  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);
  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant={"destructive"}>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          Failed to load weather data. Please try again.
        </AlertDescription>
      </Alert>
    );
  }
  if (!weatherQuery.data || !forecastQuery.data || !params.name) {
    return <WeatherSkeleton />;
  }
  const locationName = locationQuery.data?.[0];
  return (
    <div>
      <h1>City: {params.name}</h1>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lon}</p>
      <p></p>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
      </div>
      <div>
        <div>
          <CurrentWeather data={weatherQuery.data} locationName={} />
        </div>
      </div>
    </div>
  );
};

export default CityPage;
