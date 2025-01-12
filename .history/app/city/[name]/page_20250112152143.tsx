"use client";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyTemperature from "@/components/HourlyTemperature";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForecast from "@/components/WeatherForecast";
import {
  useForecastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/use-weather";
import { AlertTriangle } from "lucide-react";
import { useSearchParams } from "next/navigation";

const CityPage = ({ params }: { params: { name: string } }) => {
  const searchParams = useSearchParams();

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
  const cityName = decodeURIComponent(params.name);
  const locationName = locationQuery.data?.[0];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          {cityName}, {weatherQuery.data.sys.country}
        </h1>
        <div>{/*favorite button*/}</div>
      </div>
      <div className="grid gap-6">
        <div className="flex flex-col gap-4">
          <CurrentWeather
            data={weatherQuery.data}
            locationName={locationName}
          />
          <HourlyTemperature data={forecastQuery.data} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <WeatherDetails data={weatherQuery.data} />
          <WeatherForecast data={forecastQuery.data} />
        </div>
      </div>
    </div>
  );
};

export default CityPage;
