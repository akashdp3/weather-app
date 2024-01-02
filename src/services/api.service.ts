import HTTPService from "./http.service";

type Coordindates = {
  lat: number;
  lon: number;
};

const API_URL = {
  WEATHER: "/data/2.5//weather",
  FORCAST: "/data/2.5/forecast"
};

export const getWeatherByLocation = (coordinates: Coordindates) => {
  return HTTPService.get(API_URL.WEATHER, {
    ...coordinates,
    units: "metric"
  }).then((res) => res.data);
};

export const getWeatherForcast = (coordindates: Coordindates) => {
  return HTTPService.get(API_URL.FORCAST, {
    ...coordindates,
    units: "metric"
  }).then((res) => res.data);
};
