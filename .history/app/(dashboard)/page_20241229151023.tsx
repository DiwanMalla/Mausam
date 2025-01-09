"use client";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocations";
import { AlertCircle, MapPin, RefreshCw } from "lucide-react";

const Dashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeolocation();
  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
    }
  };
  if (locationLoading) {
    return <WeatherSkeleton />;
  }
  if (locationError) {
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription>
        <p>{locationError}</p>
        <Button onClick={getLocation} variant={"outline"} className="w-fit">
          <MapPin />
          Enable location
        </Button>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>;
  }
  return (
    <div className="space-y-4">
      {/*favorite cities*/}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button variant={"outline"} size={"icon"} onClick={handleRefresh}>
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      {/*Current and Hourly Weather*/}
    </div>
  );
};

export default Dashboard;
