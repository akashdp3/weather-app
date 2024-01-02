import { useState, useEffect } from "react";

import DashboardView from "./Dashboard.view";
import Navbar from "@/Navbar";
import { getWeatherByCity } from "../../services/api.service";

const DEFAULT_CITY = "Delhi";

const Dashboard = () => {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getWeatherByCity(city).then((response) => {
      setWeatherData(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Navbar city={city} setCity={setCity} />
      <DashboardView {...weatherData} />
    </div>
  );
};

export default Dashboard;
