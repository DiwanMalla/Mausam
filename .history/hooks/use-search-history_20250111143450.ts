import { useLocalStorage } from "./use-local-storage";

interface SearchHistoryItem {
  id: string;
  query: string;
  lat: number;
  lon: number;
}
export function useSearchHistory() {
  useLocalStorage<>();
}
