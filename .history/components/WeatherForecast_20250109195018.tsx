import type { ForecastData } from "@/app/API/types";

interface WeatherForecastProps {
  data: ForecastData;
}
const WeatherForecast = ({ data }: WeatherForecastProps) => {
  return <div>WeatherForecast</div>;
};

export default WeatherForecast;
