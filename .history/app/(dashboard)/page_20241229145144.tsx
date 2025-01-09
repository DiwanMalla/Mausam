import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const page = () => {
  return (
    <div>
      {/*favorite cities*/}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">My Location</h1>
        <Button variant={"outline"} size={"icon"}>
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      {/*Current and Hourly Weather*/}
    </div>
  );
};

export default page;
