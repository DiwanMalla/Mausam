import { WeatherData } from "@/app/API/types";
import { useFavorite } from "@/hooks/use-favorite";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

interface FavoriteButtonProps {
  data: WeatherData;
}
const FavoriteButton = ({ data }: FavoriteButtonProps) => {
  const { addToFavorite, isFavorite, removeFavorite } = useFavorite();
  const isCurrentlyFavorite = isFavorite(data.coord.lat, data.coord.lon);
  return (
    <Button>
      <Star
        className={`h-4 w-4 ${isCurrentlyFavorite ? "fill-current" : ""}`}
      />
    </Button>
  );
};

export default FavoriteButton;
