import { GeocodingResponse, WeatherData } from "@/app/API/types";
import { Card, CardContent } from "./ui/card";
interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResponse;
}
const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  const {
    weather: [CurrentWeather],
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
  } = data;
  return (
    <Card>
      <CardContent>
        <div>
          <div>
            <div className="flex">
              <h2>{locationName?.name}</h2>
              {locationName?.state && <span>, {locationName.state}</span>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
