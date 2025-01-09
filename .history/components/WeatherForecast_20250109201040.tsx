import type { ForecastData } from "@/app/API/types";

interface WeatherForecastProps {
  data: ForecastData;
}
const WeatherForecast = ({ data }: WeatherForecastProps) => {
  const dailyForecasts = data.list.reduce((acc, forecast) => {
    const date = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");
    if (!acc[date]) {
      acc[date] = {
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        humidity: forecast.main.humidity,
        wind: forecast.wind.speed,
      };
    }
  });
  return <div>WeatherForecast</div>;
};

export default WeatherForecast;
