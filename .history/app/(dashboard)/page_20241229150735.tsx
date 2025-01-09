"use client";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocations";
import { RefreshCw } from "lucide-react";

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
