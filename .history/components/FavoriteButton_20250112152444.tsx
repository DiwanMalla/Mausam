import { WeatherData } from "@/app/API/types";
import { useFavorite } from "@/hooks/use-favorite";

interface FavoriteButtonProps {
  data: WeatherData;
}
const FavoriteButton = ({ data }: FavoriteButtonProps) => {
  const { addToFavorite, isFavorite, removeFavorite } = useFavorite();
  const isCurrentlyFavorite = isFavorite(data.coord.lat, data.coord.lon);
  return <div>FavoriteButton</div>;
};

export default FavoriteButton;
