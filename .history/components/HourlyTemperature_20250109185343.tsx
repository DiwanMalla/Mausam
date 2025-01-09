import { ForecastData } from "@/app/API/types";
import { Card, CardHeader } from "./ui/card";

interface HourlyTemperatureProps {
  data: ForecastData;
}
const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
  return (
    <Card>
      <CardHeader></CardHeader>
    </Card>
  );
};

export default HourlyTemperature;
