import HTTPService from "./http.service";

const API_URL = {
  WEATHER: "/weather"
};

export const getWeatherByLocation = (lon: number, lat: number) => {
  return HTTPService.get(API_URL.WEATHER, { lon, lat });
};

export const getWeatherByCity = (cityName: string) => {
  return HTTPService.get(API_URL.WEATHER, { q: cityName });
};
