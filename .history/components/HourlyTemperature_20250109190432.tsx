import { ForecastData } from "@/app/API/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { format } from "date-fns";

interface HourlyTemperatureProps {
  data: ForecastData;
}
const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
  const charData = data.list
    .slice(0, 8)
    .map((item) => ({
      time: format(new Date(item.dt * 1000), "ha"),
      temp: Math.round(item.main.temp),
    }));
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Today&apos;s Temperature</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <ResponsiveContainer>
            <LineChart data={charData}>
              <Line />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyTemperature;
