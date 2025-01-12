import { useLocalStorage } from "./use-local-storage";

interface SearchHistoryItem {
  id: string;
  query: String;
}
export function useSearchHistory() {
  useLocalStorage<>();
}
