import { useLocalStorage } from "./use-local-storage";

interface SearchHistoryItem {
  id: string;
  query: string;
  lat: number;
  lon: number;
  name: string;
}
export function useSearchHistory() {
  useLocalStorage<>();
}
