import { format } from "date-fns";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card.js";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import Clock from "@/components/ui/clock";
import { convertToDate } from "@/utilities";

interface WeatherProps {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  timezone: number;
  dt: number;
  forcastData: any[];
}

const DashboardView = (props: WeatherProps) => {
  const { name, timezone, dt, forcastData } = props;

  if (!name) {
    return null;
  }

  return (
    <div>
      <div className="flex gap-4 flex-col lg:flex-row">
        <Card className="flex-auto">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Current Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="pt-12 pb-24 flex flex-col gap-4 items-center">
              <div className="flex gap-1 justify-center items-center">
                <Icon
                  weatherCode={forcastData[0].weather[0].id}
                  className="h-12 w-12"
                />
                <p className="text-lg font-semibold">
                  {forcastData[0].weather[0].main}
                </p>
              </div>
              <p className="flex text-8xl font-bold justify-center">
                {forcastData[0].main.temp}&deg;
              </p>
              <div className="flex gap-8 justify-center">
                <p className="text-lg font-regular">
                  Min: {forcastData[0].main.temp_min}&deg;
                </p>
                <p className="mr-6 text-lg font-regular">
                  Max: {forcastData[0].main.temp_max}&deg;
                </p>
              </div>
            </div>
            <div className="flex justify-between text-md font-regular text-slate-700">
              <span>{convertToDate(timezone, dt, "long")}</span>
              <Clock initial={new Date()} timezone={timezone} />
            </div>
          </CardContent>
        </Card>
        <Card className="flex-auto">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Weekly Forcast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Day</TableHead>
                  <TableHead className="text-left">Weather</TableHead>
                  <TableHead className="text-left">Min Temp</TableHead>
                  <TableHead className="text-left">Max Temp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {forcastData.map((item) => (
                  <TableRow>
                    <TableCell className="text-left">
                      {format(new Date(item.dt_txt), "iii")}
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="flex gap-1 items-center">
                        <Icon
                          weatherCode={item.weather[0].id}
                          className=" h-8 w-8"
                        />
                        <p className="text-sm font-semibold">
                          {item.weather[0].main}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-left">
                      {item.main.temp_min}&deg;
                    </TableCell>
                    <TableCell className="text-left">
                      {item.main.temp_max}&deg;
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
