import { API_CONFIG } from "./config";

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
  private fetchData<T>(url: string): Promise<T> {
    const response = await fetch();
  }
  async getCurrentWeather() {}
  async getForecast() {}
  async reverseGeocode() {}
}
