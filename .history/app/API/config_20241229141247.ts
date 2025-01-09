export const API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  GEO: "http://api.openweathermap.org/geo/1.0/reverse",
  API_KEY: process.env.OPENWEATHER_API_KEY,
  DEFAULT_PARAMS: {
    units: "metric",
    appid: process.env.OPENWEATHER_API_KEY,
  },
};
