import { ForecastData } from "@/app/API/types";

interface HourlyTemperatureProps {
  data: ForecastData;
}
const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
  return <div>HourlyTemperature</div>;
};

export default HourlyTemperature;
