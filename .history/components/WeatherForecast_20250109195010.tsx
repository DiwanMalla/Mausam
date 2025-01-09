import { ForecastData } from "@/app/API/types";

interface WeatherForecastProps {
  data: ForecastData;
}
const WeatherForecast = ({ data }) => {
  return <div>WeatherForecast</div>;
};

export default WeatherForecast;
