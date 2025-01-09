import type { ForecastData } from "@/app/API/types";

interface WeatherForecastProps {
  data: ForecastData;
}
const WeatherForecast = ({ data }: WeatherForecastProps) => {
  const dailyForecasts = data.list.reduce((acc, forecast) => {
    const date = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");
  });
  return <div>WeatherForecast</div>;
};

export default WeatherForecast;
