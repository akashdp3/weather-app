import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card.js";
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
}

const DashboardView = (props: WeatherProps) => {
  const { name, main, weather, timezone, dt } = props;
  console.log({ main, props });

  if (!name) {
    return null;
  }

  return (
    <div>
      <div className="flex gap-4">
        <Card className="flex-auto">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Current Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="pt-12 pb-24 flex flex-col gap-4 items-center">
              <div className="flex gap-1 justify-center items-center">
                <Icon weatherCode={weather[0].id} className="h-12 w-12" />
                <p className="text-lg font-semibold">{weather[0].main}</p>
              </div>
              <p className="flex text-8xl font-bold justify-center">
                {main.temp}&deg;
              </p>
              <div className="flex gap-8 justify-center">
                <p className="text-lg font-regular">
                  Min: {main.temp_min}&deg;
                </p>
                <p className="mr-6 text-lg font-regular">
                  Max: {main.temp_max}&deg;
                </p>
              </div>
            </div>
            <div className="flex justify-between text-md font-regular text-slate-700">
              <span>{convertToDate(timezone, dt, "long")}</span>
              <Clock initial={new Date()} timezone={timezone} />
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1 w-32">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Weekly Forcast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Forcast</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
