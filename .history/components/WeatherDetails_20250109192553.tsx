import { WeatherData } from "@/app/API/types";
import { format } from "date-fns";
import { Sunrise, Sunset } from "lucide-react";

interface WeatherDetailsProps {
  data: WeatherData;
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  const { wind, main, sys } = data;

  // Helper function to format time
  const formatTime = (timestamp: number) => {
    return format(new Date(timestamp * 1000), "h:mm a");
  };

  // Weather details array
  const details = [
    {
      title: "Sunrise",
      value: formatTime(sys.sunrise),
      icon: Sunrise,
      color: "text-orange-500",
    },
    {
      title: "Sunset",
      value: formatTime(sys.sunset),
      icon: Sunset,
      color: "text-red-500",
    },
    {
      title: "Wind Speed",
      value: `${wind.speed} m/s`,
      icon: "🌬️",
      color: "text-blue-500",
    },
    {
      title: "Pressure",
      value: `${main.pressure} hPa`,
      icon: "💨",
      color: "text-gray-500",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold">Weather Details</h2>
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className={`text-xl ${detail.color}`}>{detail.icon}</span>
            <div>
              <p className="font-medium">{detail.title}</p>
              <p>{detail.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
