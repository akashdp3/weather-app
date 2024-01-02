export interface City {
  name: string;
  coordinates: { lat: number; lon: number };
}

export const CITY_SUGGESTIONS: City[] = [
  {
    name: "Mumbai, Maharashtra, India",
    coordinates: {
      lat: 19.0759837,
      lon: 72.8776559
    }
  },
  {
    name: "Bangalore, Karnataka, India",
    coordinates: {
      lat: 12.9715987,
      lon: 77.5945627
    }
  },
  {
    name: "Tokyo, Japan",
    coordinates: {
      lat: 35.6764225,
      lon: 139.650027
    }
  },
  {
    name: "London, UK",
    coordinates: {
      lat: 51.5072178,
      lon: -0.1275862
    }
  }
];
