import { ForecastData } from "@/app/API/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { format } from "date-fns";

interface HourlyTemperatureProps {
  data: ForecastData;
}
const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
  const charData = data.list.slice(0, 8).map((item) => ({
    time: format(new Date(item.dt * 1000), "ha"),
    temp: Math.round(item.main.temp),
    feels_like: Math.round(item.main.feels_like),
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
              <XAxis
                dataKey="time"
                stroke="#8888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#8888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyTemperature;
