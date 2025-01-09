import { WeatherData } from "@/app/API/types";
import { format } from "date-fns";

interface WeatherDetailsProps {
  data: WeatherData;
}
const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  const { wind, main, sys } = data;
  const formatTime = (timestamp: number) => {
    return format(new Date(timestamp * 1000), "h:mm a");
  };
  const details = [{ title: "Sunrise", value: formatTime(sys.sunrise) }];
  return <div>WeatherDetails</div>;
};

export default WeatherDetails;
