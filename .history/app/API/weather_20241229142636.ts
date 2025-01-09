import { Coordinate } from "recharts/types/util/types";
import { API_CONFIG } from "./config";
import { WeatherData } from "./types";

class WeatherAPI {
  private createURL(endpoint: string, params: Record<string, string | number>) {
    if (!API_CONFIG.API_KEY) {
      throw new Error("API_KEY is missing in the configuration");
    }
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    });
    return `${endpoint}?${searchParams.toString()}`;
  }
  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.statusText}`);
    }
    return response.json();
  }
  async getCurrentWeather({ lat, lon }: Coordinate): Promise<WeatherData> {
    const url = this.createURL(`${API_CONFIG.BASE_URL}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });
    return this.fetchData;
  }
  async getForecast() {}
  async reverseGeocode() {}
}
