"use client";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyTemperature from "@/components/HourlyTemperature";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForecast from "@/components/WeatherForecast";
import { useForecastQuery, useWeatherQuery } from "@/hooks/use-weather";
import { AlertTriangle, RefreshCw } from "lucide-react";
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
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please try again</p>
        </AlertDescription>
      </Alert>
    );
  }
  if (!weatherQuery.data || !forecastQuery.data || !params.cityName) {
    return <WeatherSkeleton />;
  }
  return (
    <div className="space-y-4">
      {/*favorite cities*/}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
      </div>
      <div className="grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <CurrentWeather
            data={weatherQuery.data}
            locationName={locationName}
          />
          <HourlyTemperature data={forecastQuery.data} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/*details*/}
          <WeatherDetails data={weatherQuery.data} />
          {/*Forecast*/}
          <WeatherForecast data={forecastQuery.data} />
        </div>
      </div>
      {/*Current and Hourly Weather*/}
    </div>
  );
};

export default CityPage;
