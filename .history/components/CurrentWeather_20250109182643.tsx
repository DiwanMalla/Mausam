import { GeocodingResponse, WeatherData } from "@/app/API/types";
import { Card, CardContent } from "./ui/card";
interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResponse;
}
const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  const {
    weather: [CurrentWeather],
  };
  return (
    <Card>
      <CardContent>
        <div>
          <div>
            <div>
              <h2>{locationName?.name}</h2>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
