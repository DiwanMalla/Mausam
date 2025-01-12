import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "./use-local-storage";

interface SearchHistoryItem {
  id: string;
  query: string;
  lat: number;
  lon: number;
  name: string;
  country: string;
  state?: string;
  searchedAt: number;
}
export function useSearchHistory() {
  const [history, setHistory] = useLocalStorage<SearchHistoryItem[]>(
    "search-history",
    []
  );
  const historyQuery = useQuery({
    queryKey: ["search-history"],
    queryFn: () => history,
    initialData: history,
  });
  const addToHistory = useMutation({
    mutationFn: async (search: Omit<SearchHistoryItem, "id" | "SearchAt">) => {
      const newSearch: SearchHistoryItem = {
        ...search,
        id: `${search.lat}=${search.lon}-${Date.now()}`,
        searchedAt: Date.now(),
      };
      const filteredHistory = history.filter(
        (item) => !(item.lat === search.lat && item.lon === search.lon)
      );
      const newHistory = [newSearch, ...filteredHistory].slice(0, 10);
    },
  });
}
