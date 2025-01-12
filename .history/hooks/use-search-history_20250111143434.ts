import { useLocalStorage } from "./use-local-storage";

interface SearchHistoryItem {
  id: string;
}
export function useSearchHistory() {
  useLocalStorage<>();
}
