import { ForecastData } from "@/app/API/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ResponsiveContainer } from "recharts";

interface HourlyTemperatureProps {
  data: ForecastData;
}
const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Today&apos;s Temperature</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <ResponsiveContainer></ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyTemperature;
