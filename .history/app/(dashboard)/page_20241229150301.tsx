"use client";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocations";
import { RefreshCw } from "lucide-react";

const Dashboard = () => {
  const { coordinates, error, geoLocation, isLoading } = useGeolocation();

  return (
    <div className="space-y-4">
      {/*favorite cities*/}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button variant={"outline"} size={"icon"}>
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      {/*Current and Hourly Weather*/}
    </div>
  );
};

export default Dashboard;
