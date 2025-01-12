import { useLocalStorage } from "./use-local-storage";

interface SearchHistoryItem {
  id: string;
  query: string;
  lat: number;
}
export function useSearchHistory() {
  useLocalStorage<>();
}
