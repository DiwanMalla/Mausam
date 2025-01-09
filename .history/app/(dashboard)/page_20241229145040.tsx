import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const page = () => {
  return (
    <div>
      {/*favorite cities*/}
      <div>
        <h1>My Location</h1>
        <Button variant={"outline"}>
          <RefreshCw />
        </Button>
      </div>
    </div>
  );
};

export default page;
