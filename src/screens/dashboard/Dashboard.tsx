import { useState, useEffect } from "react";

import DashboardView from "./Dashboard.view";
import { getWeatherByCity } from "../../services/api.service";

const DEFAULT_CITY = "Delhi";

const Dashboard = () => {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getWeatherByCity(city).then((response) => {
      setWeatherData(response.data);
    });
  }, []);
  console.log({ weatherData });

  return (
    <>
      <DashboardView {...weatherData} />
    </>
  );
};

export default Dashboard;
