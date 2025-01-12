import { useLocalStorage } from "./use-local-storage";

export function useSearchHistory() {
  useLocalStorage<>();
}
