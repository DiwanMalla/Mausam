import type { Coordinates } from "@/app/API/types";
import { useQuery } from "@tanstack/react-query";

export function useWeatherQuery(coordinates: Coordinates | null) {
  useQuery({});
}
