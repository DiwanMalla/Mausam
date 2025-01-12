import { useFavorite } from "@/hooks/use-favorite";
import { ScrollArea } from "./ui/scroll-area";
import { useRouter } from "next/router";
import { useWeatherQuery } from "@/hooks/use-weather";

interface FavoriteCityTabletProps {
  id: string;
  name: string;
  lat: number;
  lon: number;
  onRemove: (id: string) => void;
}
const FavoriteCities = () => {
  const { favorites, removeFavorite } = useFavorite();
  if (!favorites.length) {
    return null;
  }
  return (
    <>
      <h1>Favorites</h1>
      <ScrollArea>
        <div></div>
      </ScrollArea>
    </>
  );
};
const FavoriteCityTablet = ({
  id,
  name,
  lat,
  lon,
  onRemove,
}: FavoriteCityTabletProps) => {
  const router = useRouter();
  const { data: weather, isLoading } = useWeatherQuery({ lat, lon });
  return (
    <div onClick={router.push(`/city/${name}?lat=${lat}&lon=${lon}`)}></div>
  );
};
export default FavoriteCities;
