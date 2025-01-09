import { WeatherData } from "@/app/API/types";
import { Card, CardContent } from "./ui/card";
interface CurrentWeatherProps {
  data: WeatherData;
}
const CurrentWeather = ({ data, locationName }) => {
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
