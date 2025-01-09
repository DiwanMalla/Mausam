import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const page = () => {
  return (
    <div>
      {/*favorite cities*/}
      <div>
        <h1>My Location</h1>
        <Button variant={"outline"} size={"icon"}>
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default page;
