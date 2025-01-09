import { WeatherData } from "@/app/API/types";

interface WeatherDetailsProps {
  data: WeatherData;
}
const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  return <div>WeatherDetails</div>;
};

export default WeatherDetails;
