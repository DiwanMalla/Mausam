import { useFavorite } from "@/hooks/use-favorite";
import { ScrollArea } from "./ui/scroll-area";
import { useRouter } from "next/navigation";
import { useWeatherQuery } from "@/hooks/use-weather";
import { Button } from "./ui/button";
import { X } from "lucide-react";

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
      <h1 className="text-xl font-bold tracking-tight">Favorites</h1>
      <ScrollArea className="w-full pb-4">
        <div className="flex gap-4">
          {favorites.map((city) => {
            return (
              <FavoriteCityTablet
                key={city.id}
                {...city}
                onRemove={() => removeFavorite.mutate(city.id)}
              />
            );
          })}
        </div>
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
    <div
      onClick={() => router.push(`/city/${name}?lat=${lat}&lon=${lon}`)}
      role="button"
      tabIndex={0}
      className="relative flex min-w-[250px] cursor-pointer items-center gap-3 rounded-lg border bg-card p-4 pr-8 shadow-sm transition-all hover:shadow-md"
    >
      <Button
        className="absolute right-1 top-1 h-6 w-6 rounded-full p-0 hover:text-destructive-foreground group-hover:opacity-100"
        onClick={}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};
export default FavoriteCities;
