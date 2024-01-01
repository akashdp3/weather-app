import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CityWeather = () => {
  return (
    <Card className="flex-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Current Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pt-16 pb-24 flex flex-col gap-4">
          <p className="flex text-8xl font-bold justify-center">5&deg;</p>
          <div className="flex gap-8 justify-center">
            <p className="text-lg font-regular">Min: 2&deg;</p>
            <p className="mr-6 text-lg font-regular">Max: 8&deg;</p>
          </div>
        </div>
        <div className="flex justify-between text-md font-regular text-slate-700">
          <span>Monday, 14th Jan</span>
          <span>10:34:00 PM</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CityWeather;
