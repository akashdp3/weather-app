import { useState, useEffect } from "react";

import DashboardView from "./Dashboard.view";
import Navbar from "@/Navbar";
import useGeoLocation from "@/hooks/geoLocation.hook";
import {
  getWeatherByLocation,
  getWeatherForcast
} from "../../services/api.service";

const DEFAULT_CITY = {
  name: "Delhi, India",
  coordinates: {
    lat: 28.7,
    lon: 77.1
  }
};

const getDailyForcast = (data: any) => {
  const forcastedData = data.list.filter((item: any) =>
    item.dt_txt.includes("00:00:00")
  );
  forcastedData.unshift(data.list[0]);
  return forcastedData;
};

const Dashboard = ({
  isLocationPermissionGranted
}: {
  isLocationPermissionGranted: boolean;
}) => {
  const [city, setCity] = useState(
    isLocationPermissionGranted ? undefined : DEFAULT_CITY.name
  );
  const [coordinates, setCoordinates] = useState(
    isLocationPermissionGranted ? undefined : DEFAULT_CITY.coordinates
  );
  const [weatherData, setWeatherData] = useState({});
  const [forcastData, setForcastData] = useState<any[]>([]);

  const { location, error } = useGeoLocation();

  useEffect(() => {
    console.log({ location, error });

    if (location && location?.coords) {
      setCity("");
      setCoordinates({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      });
    }
  }, [location, error]);

  useEffect(() => {
    if (coordinates) {
      Promise.all([
        getWeatherByLocation(coordinates),
        getWeatherForcast(coordinates)
      ]).then((response) => {
        setWeatherData(response[0]);
        setForcastData(getDailyForcast(response[1]));
        if (!city) {
          setCity(response[1].city.name);
        }
        return null;
      });
    }
  }, [city, coordinates]);

  return (
    <div className="flex flex-col gap-4">
      <Navbar city={city} setCity={setCity} setCoordinates={setCoordinates} />
      <DashboardView {...weatherData} forcastData={forcastData} />
    </div>
  );
};

export default Dashboard;
